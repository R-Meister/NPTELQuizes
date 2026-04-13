
import Link from "next/link";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <span>Big thanks to original contributors</span>
          <Link
            href="https://github.com/HackerrArnav/Conversation_Economics_Quiz_App"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
        <Link
          href="https://www.linkedin.com/in/rmnm/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-base font-semibold text-emerald-300 hover:text-emerald-200 transition-colors"
          aria-label="Add me on LinkedIn"
        >
          Add me on LinkedIn
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
