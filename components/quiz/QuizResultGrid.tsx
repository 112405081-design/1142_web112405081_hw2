import type { QuizResult } from "@/lib/quiz/types";

type Props = {
  result: QuizResult;
};

/** 結果頁版面：名稱左上、背景圖右上、敘述、小建議（僅建議有框） */
export function QuizResultGrid({ result }: Props) {
  return (
    <div className="flex min-h-[min(72dvh,36rem)] flex-1 flex-col pt-2">
      <div className="grid grid-cols-2 gap-3">
        <header className="mt-8 ml-4 flex flex-col justify-center sm:mt-10 sm:ml-6">
          <p className="quiz-text-shadow text-[10px] font-medium uppercase tracking-wider text-quiz-leaf-dark/80 sm:text-xs">
            你的測驗結果
          </p>
          <h1 className="quiz-text-shadow mt-1 text-xl font-bold leading-tight text-quiz-leaf-dark sm:text-2xl">
            {result.title}
          </h1>
          <p className="quiz-text-shadow mt-1 text-sm text-stone-800/90">
            {result.subtitle}
          </p>
        </header>

        {/* 右上留白，讓背景結果圖露出 */}
        <div aria-hidden className="min-h-[6.5rem] sm:min-h-[7.5rem]" />
      </div>

      <p className="quiz-text-shadow mt-16 text-sm leading-relaxed text-stone-800/95 sm:mt-20 sm:text-[0.9375rem]">
        {result.description}
      </p>

      <section className="mt-5 rounded-xl border border-white/55 bg-white/85 p-4 shadow-sm backdrop-blur-sm sm:mt-6 sm:p-5">
        <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-quiz-leaf-dark/80">
          給你的小建議
        </h2>
        <ul className="list-inside list-disc space-y-1.5 text-sm leading-relaxed text-stone-800">
          {result.tips.map((tip) => (
            <li key={tip}>{tip}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
