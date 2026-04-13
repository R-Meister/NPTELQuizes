import { redirect } from "next/navigation";

export default function LegacyPracticePage({ params }: { params: { week: string } }) {
  redirect(`/course/conservation-economics/practice/${params.week}`);
}
