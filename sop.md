# SOP: Adding New Courses and Content

This app is fully frontend (Next.js App Router) and Vercel-ready with no backend required.

## 1) Create the course question file

Create a new file in `src/data/` using this pattern:

- `src/data/questions-<course-slug>.ts`

Example:

- `src/data/questions-environmental-law.ts`

Use this shape:

```ts
import { Question } from "@/types/Question";

export const questionsByWeekEnvironmentalLaw: { [week: string]: Question[] } = {
  week0: [
    {
      question: "Sample question",
      options: ["A", "B", "C", "D"],
      answer: "A",
    },
  ],
  week1: [],
};
```

Notes:

- Use keys like `week0`, `week1`, `week2`.
- Keep `answer` exactly equal to one of the strings in `options`.

## 2) Register the new course

Open `src/data/courses.ts` and:

1. Import the new week data object.
2. Add a new entry to the `courses` array.

Example:

```ts
{
  slug: "environmental-law",
  title: "Environmental Law",
  subtitle: "Week-wise prep for NPTEL quizzes and exams",
  status: "live",
  questionsByWeek: questionsByWeekEnvironmentalLaw,
}
```

## 3) Verify auto-generated pages

No new pages need to be coded. The app already supports dynamic routes:

- `/course`
- `/course/<slug>`
- `/course/<slug>/quiz`
- `/course/<slug>/quiz/<week>`
- `/course/<slug>/practice`
- `/course/<slug>/practice/<week>`

As soon as the course is in `src/data/courses.ts`, it appears in the UI.

## 4) Quick validation before deploy

Run:

```bash
npm run build
```

If build succeeds, the course is ready for Vercel deployment.

## 5) Optional content workflow

Recommended weekly workflow:

1. Add questions for a week in the course question file.
2. Run local checks (`npm run build`).
3. Commit and push.
4. Verify on Vercel preview.

## 6) Contact and UI text updates

If contact details change:

- Update mail address in `src/components/ContactPopup.tsx` (`CONTACT_EMAIL`)
- Update LinkedIn URL in `src/components/Footer.tsx`
