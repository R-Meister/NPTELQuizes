import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import "@/app/globals.css";

export default function Home() {
  return (
    <div className="text-white px-4 md:px-6 py-5 md:py-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full z-10 relative">
        <header>
          <div className="rounded-3xl border border-emerald-900/60 bg-gradient-to-br from-emerald-950/70 via-slate-950/80 to-slate-950/90 p-8 md:p-10 shadow-[0_25px_80px_-40px_rgba(16,185,129,0.7)]">
            <p className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase text-emerald-300/80 mb-5">
              <Sparkles size={14} />
              NPTEL Quiz Suite
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight mb-4">
              Learn fast.
              <br />
              Revise with structure.
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
              A clean and focused preparation platform for NPTEL courses.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/course/conservation-economics" className="inline-flex items-center bg-slate-800/90 border border-slate-700 text-slate-100 font-semibold py-3 px-6 rounded-full hover:bg-slate-700 transition-colors">
                Open Course Hub
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </header>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-slate-950" />
        <div className="absolute -left-48 -top-48 w-96 h-96 bg-emerald-500 rounded-full blur-3xl opacity-10 animate-blob" />
        <div className="absolute -right-48 bottom-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000" />
      </div>
    </div>
  );
}
