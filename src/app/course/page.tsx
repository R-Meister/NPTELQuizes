import CourseSelector from "@/components/CourseSelector";
import CourseAutoRedirect from "@/components/CourseAutoRedirect";

export default function CoursePage() {
  return (
    <div className="min-h-screen bg-slate-950">
      <CourseAutoRedirect />
      <CourseSelector />
    </div>
  );
}
