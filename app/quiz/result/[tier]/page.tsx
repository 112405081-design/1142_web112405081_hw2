import { notFound } from "next/navigation";
import { QuizPageShell } from "@/components/layout/QuizPageShell";
import { QuizResultActions } from "@/components/quiz/QuizResultActions";
import { QuizResultEffects } from "@/components/quiz/QuizResultEffects";
import { QuizResultGrid } from "@/components/quiz/QuizResultGrid";
import { getQuizResult, isScalpCategory } from "@/lib/quiz/results";

type Props = {
  params: Promise<{ tier: string }>;
};

export default async function QuizResultPage({ params }: Props) {
  const { tier: categoryParam } = await params;

  if (!isScalpCategory(categoryParam)) {
    notFound();
  }

  const result = getQuizResult(categoryParam);
  const sharePath = `/quiz/result/${categoryParam}`;

  return (
    <QuizPageShell variant="result" category={categoryParam} align="top">
      <QuizResultEffects title={result.title} />

      <div className="flex min-h-full flex-col">
        <QuizResultGrid result={result} />
        <QuizResultActions title={result.title} sharePath={sharePath} />
      </div>
    </QuizPageShell>
  );
}
