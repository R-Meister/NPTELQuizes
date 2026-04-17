import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpenCheck, PenSquare } from "lucide-react";
import { getCourseBySlug } from "@/data/courses";
import CourseSelectionTracker from "@/components/CourseSelectionTracker";

export default function CourseLandingPage({ params }: { params: { course: string } }) {
  const course = getCourseBySlug(params.course);

  if (!course) {
    notFound();
  }

  const weeksCount = Object.keys(course.questionsByWeek).length;

  return (
    <div className="min-h-screen bg-slate-950 px-4 sm:px-6 lg:px-8 py-12 text-slate-100">
      <div className="max-w-5xl mx-auto">
        <CourseSelectionTracker slug={course.slug} />
        <div className="mb-10">
          <p className="text-xs tracking-[0.18em] uppercase text-emerald-300/80">Course Hub</p>
          <h1 className="text-3xl md:text-4xl font-bold mt-2">{course.title}</h1>
          <p className="text-slate-400 mt-3 max-w-2xl">{course.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
          <Link
            href={`/course/${course.slug}/quiz`}
            className="rounded-2xl border border-emerald-300/40 bg-gradient-to-br from-emerald-500 to-teal-600 p-7 hover:from-emerald-400 hover:to-teal-500 transition-all"
          >
            <div className="flex items-center gap-2 text-white/90 mb-3">
              <BookOpenCheck size={18} />
              <span className="text-sm font-semibold tracking-wide uppercase">Test Mode</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white leading-tight">Take Timed-Style Quiz</h2>
            <p className="text-white/95 text-base mt-3 font-medium">
              Answers are shown only after you submit the full test.
            </p>
            <p className="text-white/85 text-sm mt-2">Attempt a week-specific test or all weeks together.</p>
            <span className="inline-flex items-center mt-6 text-white text-sm font-semibold">
              Open Quiz
              <ArrowRight size={16} className="ml-2" />
            </span>
          </Link>

          <Link
            href={`/course/${course.slug}/practice`}
            className="rounded-2xl border border-blue-300/40 bg-gradient-to-br from-blue-500 to-cyan-600 p-7 hover:from-blue-400 hover:to-cyan-500 transition-all"
          >
            <div className="flex items-center gap-2 text-white/90 mb-3">
              <PenSquare size={18} />
              <span className="text-sm font-semibold tracking-wide uppercase">Practice Mode</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white leading-tight">Practice by Week</h2>
            <p className="text-white/95 text-base mt-3 font-medium">
              Feedback appears immediately after every answer click.
            </p>
            <p className="text-white/85 text-sm mt-2">Train topic-by-topic with week-by-week navigation.</p>
            <span className="inline-flex items-center mt-6 text-white text-sm font-semibold">
              Open Practice
              <ArrowRight size={16} className="ml-2" />
            </span>
          </Link>
        </div>

        <div className="text-sm text-slate-500">Total available weeks: {weeksCount}</div>
      </div>
    </div>
  );
}
