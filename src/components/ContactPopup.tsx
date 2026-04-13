"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Clipboard, ExternalLink, X } from "lucide-react";

const CONTACT_EMAIL = "contact@rmnm.in";

const ContactPopup = () => {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="h-14 w-14 rounded-full bg-emerald-500 text-black shadow-[0_18px_35px_-15px_rgba(16,185,129,0.9)] font-semibold hover:bg-emerald-400 transition-colors"
        aria-label="Open contact options"
      >
        <Mail size={20} className="mx-auto" />
      </button>

      {open && (
        <div className="mt-3 w-[320px] max-w-[90vw] rounded-2xl border border-slate-800 bg-[#050607] p-5 shadow-2xl">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-lg font-semibold">Contact Me</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition-colors"
              aria-label="Close contact popup"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-slate-300 text-sm mb-2">Email directly</p>
          <div className="rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-slate-200 text-base mb-4">
            {CONTACT_EMAIL}
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-3 text-white font-medium hover:bg-blue-500 transition-colors"
            >
              <Clipboard size={16} />
              {copied ? "Copied" : "Copy email"}
            </button>

            <Link
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-700 bg-transparent px-3 py-3 text-slate-100 font-medium hover:bg-slate-900 transition-colors"
            >
              <ExternalLink size={16} />
              Open mail app
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactPopup;
