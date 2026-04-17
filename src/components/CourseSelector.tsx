"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, Clock3 } from "lucide-react";
import { courses } from "@/data/courses";

const LAST_SELECTED_COURSE_KEY = "nptel:last-selected-course";

const handleCourseSelect = (slug: string) => {
  try {
    localStorage.setItem(LAST_SELECTED_COURSE_KEY, slug);
  } catch {
    // no-op for locked storage environments
  }
};

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
            const cardClasses = isLive
              ? "border-emerald-300/40 bg-gradient-to-br from-emerald-500 to-teal-600"
              : "border-amber-300/40 bg-gradient-to-br from-amber-500 to-orange-600";

            return (
              <div
                key={course.slug}
                className={`rounded-2xl border p-7 ${cardClasses}`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <div>
                    <h2 className="text-3xl font-extrabold text-white leading-tight">{course.title}</h2>
                    <p className="text-base text-white/90 mt-2">{course.subtitle}</p>
                  </div>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border font-semibold ${
                      isLive
                        ? "text-emerald-950 border-emerald-200/60 bg-emerald-200"
                        : "text-amber-950 border-amber-200/60 bg-amber-200"
                    }`}
                  >
                    {isLive ? "Live" : "Coming Soon"}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-sm text-white/95 mb-6 font-medium">
                  {isLive ? <BookOpen size={16} /> : <Clock3 size={16} />}
                  {isLive ? "Ready to practice and test" : "Course shell ready for content"}
                </div>

                {isLive ? (
                  <Link
                    href={`/course/${course.slug}`}
                    onClick={() => handleCourseSelect(course.slug)}
                    className="inline-flex items-center text-white font-semibold hover:text-white/90 transition-colors"
                  >
                    Open Course
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                ) : (
                  <span className="text-white/90 text-sm font-medium">Publish this course to unlock navigation</span>
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
