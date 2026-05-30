import Link from "next/link";
import { QuizPageShell } from "@/components/layout/QuizPageShell";

const btnPrimary =
  "quiz-tap touch-target inline-flex w-full max-w-[13rem] items-center justify-center rounded-full border border-white/30 bg-white/15 px-6 py-3.5 text-base font-medium text-white shadow-xl backdrop-blur-md transition-all duration-300 hover:bg-white/25 hover:shadow-2xl";

export default function QuizIntroPage() {
  return (
    <QuizPageShell variant="intro">
      <div className="flex min-h-full flex-col items-center justify-center space-y-5 text-center">
        <div className="pt-24">
          <Link href="/quiz/play" className={btnPrimary}>
            開始測驗
          </Link>
        </div>
      </div>
    </QuizPageShell>
  );
}