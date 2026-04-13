import { redirect } from "next/navigation";

export default function LegacyQuizPage({ params }: { params: { week: string } }) {
  redirect(`/course/conservation-economics/quiz/${params.week}`);
}
