"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Clipboard, ExternalLink, X } from "lucide-react";

const CONTACT_EMAIL = "raman@rmnm.in";

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
        className="h-14 w-14 rounded-full border border-emerald-400/40 bg-gradient-to-br from-emerald-400 to-emerald-500 text-black shadow-[0_16px_32px_-14px_rgba(16,185,129,0.8)] hover:from-emerald-300 hover:to-emerald-400 transition-all"
        aria-label="Open contact options"
      >
        <Mail size={20} className="mx-auto" />
      </button>

      {open && (
        <div className="mt-3 w-[340px] max-w-[90vw] rounded-2xl border border-slate-700/80 bg-gradient-to-b from-[#0a0d10] to-[#050607] p-5 shadow-[0_28px_70px_-30px_rgba(0,0,0,0.95)]">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white text-lg font-semibold tracking-tight">Contact Me</h2>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-500 hover:text-white transition-colors"
              aria-label="Close contact popup"
            >
              <X size={18} />
            </button>
          </div>

          <p className="text-slate-300 text-sm mb-2">Email directly</p>
          <div className="rounded-xl border border-slate-700 bg-slate-900/70 px-4 py-3 text-slate-100 text-[17px] mb-4 tracking-wide">
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
