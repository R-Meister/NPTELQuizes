import Image from "next/image";
import { ArrowRight, Compass, Layers, Sparkles } from "lucide-react";
import Link from "next/link";
import "@/app/globals.css";

export default function Home() {
  return (
    <div className="min-h-screen text-white px-6 py-10 md:py-14 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full z-10 relative">
        <header className="mb-12 md:mb-16 grid md:grid-cols-[1.3fr_0.9fr] gap-6 items-stretch">
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
              A clean and focused preparation platform for NPTEL courses. Start with Conservation Economics and scale to multiple courses as you add them.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/course" className="inline-flex items-center bg-emerald-500 text-black font-semibold py-3 px-6 rounded-full hover:bg-emerald-400 transition-colors">
                Select Course
                <ArrowRight className="ml-2" size={18} />
              </Link>
              <Link href="/course/conservation-economics" className="inline-flex items-center bg-slate-800/90 border border-slate-700 text-slate-100 font-semibold py-3 px-6 rounded-full hover:bg-slate-700 transition-colors">
                Open Course Hub
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-8 flex flex-col justify-between">
            <h2 className="text-lg font-semibold text-slate-100 mb-5">How this is organized</h2>
            <div className="mb-6 rounded-2xl border border-slate-800 bg-slate-900/70 p-4 flex justify-center">
              <Image
                src="/nptelimage.png"
                alt="NPTEL"
                width={120}
                height={120}
                className="h-24 w-24 md:h-28 md:w-28 object-contain"
                priority
              />
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <Compass size={18} className="text-emerald-400 mt-0.5" />
                <p>Pick a course first, then choose practice or test mode.</p>
              </div>
              <div className="flex items-start gap-3">
                <Layers size={18} className="text-blue-400 mt-0.5" />
                <p>Navigate by week or attempt all weeks in test mode.</p>
              </div>
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
