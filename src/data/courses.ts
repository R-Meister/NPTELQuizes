import {
  conservationEconomicsQuestionsByWeek,
  forestsAndTheirManagementQuestionsByWeek,
  introductionToLiberalArtsQuestionsByWeek,
} from "@/data/questions";
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
    questionsByWeek: conservationEconomicsQuestionsByWeek,
  },
  {
    slug: "forests-and-their-management",
    title: "Forests and Their Management",
    subtitle: "Week-wise prep for NPTEL quizzes and exams",
    status: "coming-soon",
    questionsByWeek: forestsAndTheirManagementQuestionsByWeek,
  },
  {
    slug: "introduction-to-liberal-arts",
    title: "Introduction to Liberal Arts",
    subtitle: "Week-wise prep for NPTEL quizzes and exams",
    status: "coming-soon",
    questionsByWeek: introductionToLiberalArtsQuestionsByWeek,
  },
];

export const getCourseBySlug = (slug: string) => {
  return courses.find((course) => course.slug === slug);
};
