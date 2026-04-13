
import Link from "next/link";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-gray-400 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center justify-center gap-4 text-center">
        <div className="flex items-center gap-2">
          <span>View source on GitHub</span>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-300 transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
