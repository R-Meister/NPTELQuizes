import Link from "next/link";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { courses } from "@/data/courses";

const CourseSelector = () => {
  return (
    <div className="w-full text-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <p className="text-xs tracking-[0.18em] uppercase text-emerald-300/80">Course Catalog</p>
          <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">Select a Course</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {courses.map((course) => {
            const isLive = course.status === "live";

            return (
              <div
                key={course.slug}
                className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-xl font-semibold text-white">{course.title}</h2>
                    <p className="text-sm text-slate-400 mt-1">{course.subtitle}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border ${
                      isLive
                        ? "text-emerald-300 border-emerald-700/70 bg-emerald-900/30"
                        : "text-amber-300 border-amber-700/70 bg-amber-900/30"
                    }`}
                  >
                    {isLive ? "Live" : "Coming Soon"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-slate-300 mb-6">
                  {isLive ? <BookOpen size={16} /> : <Clock3 size={16} />}
                  {isLive ? "Ready to practice and test" : "Course shell ready for content"}
                </div>

                {isLive ? (
                  <Link
                    href={`/course/${course.slug}`}
                    className="inline-flex items-center text-emerald-300 hover:text-emerald-200 transition-colors"
                  >
                    Open Course
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                ) : (
                  <span className="text-slate-500 text-sm">Publish this course to unlock navigation</span>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CourseSelector;
