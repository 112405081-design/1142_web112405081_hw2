import Link from "next/link";
import { notFound } from "next/navigation";
import { QuizPageShell } from "@/components/layout/QuizPageShell";
import { QuizResultEffects } from "@/components/quiz/QuizResultEffects";
import { getQuizResult, isScalpCategory } from "@/lib/quiz/results";

type Props = {
  params: Promise<{ tier: string }>;
};

const btnPrimary =
  "quiz-tap btn-quiz-leaf touch-target inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-medium shadow-lg transition-colors hover:shadow-xl";
const btnSecondary =
  "quiz-tap touch-target inline-flex w-full items-center justify-center rounded-xl border border-quiz-leaf/35 bg-white/80 px-6 py-3.5 text-sm font-medium text-quiz-leaf-dark shadow-sm backdrop-blur-[2px] hover:border-quiz-leaf/55 hover:bg-white hover:shadow-md";

export default async function QuizResultPage({ params }: Props) {
  const { tier: categoryParam } = await params;

  if (!isScalpCategory(categoryParam)) {
    notFound();
  }

  const result = getQuizResult(categoryParam);

  return (
    <QuizPageShell variant="result">
      <QuizResultEffects title={result.title} />
      <div className="flex min-h-full flex-col justify-center space-y-4 sm:space-y-5">
        <div className="space-y-1 text-center">
          <p className="quiz-text-shadow text-xs tracking-wide text-stone-800/80 sm:text-sm">
            你的測驗結果
          </p>
          <h1 className="quiz-text-shadow text-2xl font-bold tracking-tight sm:text-3xl">
            {result.title}
          </h1>
          <p className="quiz-text-shadow text-base text-stone-800/90 sm:text-lg">
            {result.subtitle}
          </p>
        </div>
        <p className="quiz-text-shadow text-left text-sm leading-relaxed text-stone-800/95 sm:text-base">
          {result.description}
        </p>
        <div className="rounded-xl border border-stone-900/15 bg-white/80 p-4 text-left shadow-sm backdrop-blur-[2px] sm:p-5">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wide text-stone-600 sm:text-sm">
            給你的小建議
          </h2>
          <ul className="list-inside list-disc space-y-2 text-sm leading-relaxed text-stone-800">
            {result.tips.map((tip) => (
              <li key={tip}>{tip}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-3 pt-1">
          <Link href="/quiz/play" className={btnSecondary}>
            再測一次
          </Link>
          <Link href="/quiz" className={btnPrimary}>
            回到測驗首頁
          </Link>
        </div>
      </div>
    </QuizPageShell>
  );
}
