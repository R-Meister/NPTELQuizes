import WeekSelector from "@/components/WeekSelector";
import { getCourseBySlug } from "@/data/courses";
import { notFound } from "next/navigation";

export default function CourseQuizWeekSelector({ params }: { params: { course: string } }) {
  const course = getCourseBySlug(params.course);

  if (!course) {
    notFound();
  }

  const weeks = Object.keys(course.questionsByWeek);

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <WeekSelector
        weeks={weeks}
        basePath={`/course/${course.slug}/quiz`}
        backPath={`/course/${course.slug}`}
        title={`${course.title}: Select a Week for Test`}
      />
    </div>
  );
}
