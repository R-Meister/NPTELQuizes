import { questionsByWeek } from "@/data/questions";
import { Question } from "@/types/Question";

export type CourseConfig = {
  slug: string;
  title: string;
  subtitle: string;
  status: "live" | "coming-soon";
  questionsByWeek: Record<string, Question[]>;
};

export const courses: CourseConfig[] = [
  {
    slug: "conservation-economics",
    title: "Conservation Economics",
    subtitle: "Week-wise prep for NPTEL quizzes and exams",
    status: "live",
    questionsByWeek,
  },
];

export const getCourseBySlug = (slug: string) => {
  return courses.find((course) => course.slug === slug);
};
