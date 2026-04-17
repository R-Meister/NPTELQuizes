import pdfplumber
import re
import json

def is_bold(fontname):
    if not fontname:
        return False
    return "bold" in fontname.lower()


def parse_pdf(pdf_path):
    questions = []
    
    current_question = ""
    options = []
    answer = None
    
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            words = page.extract_words(extra_attrs=["fontname", "top"])
            
            i = 0
            while i < len(words):
                word = words[i]["text"]
                font = words[i]["fontname"]
                
                # Detect start of a question (sentence, not option)
                if not re.match(r"[a-d]\.", word) and len(options) == 0:
                    current_question += word + " "
                
                # Detect option (a., b., c., d.)
                elif re.match(r"[a-d]\.", word):
                    option_text = ""
                    is_answer = False
                    
                    # Collect full option line
                    i += 1
                    while i < len(words) and not re.match(r"[a-d]\.", words[i]["text"]):
                        option_text += words[i]["text"] + " "
                        
                        # Check if ANY part of option is bold
                        if is_bold(words[i]["fontname"]):
                            is_answer = True
                        
                        # Stop if next looks like new question (number)
                        if re.match(r"\d+", words[i]["text"]):
                            break
                        
                        i += 1
                    
                    option_text = option_text.strip()
                    options.append(option_text)
                    
                    if is_answer:
                        answer = option_text
                    
                    continue
                
                # If 4 options collected → save question
                if len(options) == 4:
                    questions.append({
                        "question": current_question.strip(),
                        "options": options,
                        "answer": answer if answer else options[0]  # fallback
                    })
                    
                    # Reset
                    current_question = ""
                    options = []
                    answer = None
                
                i += 1

    return questions


def export_to_js(questions, week="week1"):
    return f"""import {{ Question }} from "@/types/Question";

export const questionsByWeek: {{ [week: string]: Question[] }} = {{
  {week}: {json.dumps(questions, indent=4)}
}};
"""


# 🔥 RUN
pdf_path = "extraction/data/conservation_economics/Week 1_Solution.pdf"
questions = parse_pdf(pdf_path)
js_output = export_to_js(questions, "week1")

# Save file
with open("questions.ts", "w") as f:
    f.write(js_output)

print("✅ Done! questions.ts generated.")