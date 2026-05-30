import Link from "next/link";
import { QuizFlow } from "@/components/quiz/QuizFlow";
import { QuizPageShell } from "@/components/layout/QuizPageShell";

export default function QuizPlayPage() {
  return (
    <QuizPageShell variant="play">
      <Link
        href="/quiz"
        className="quiz-tap absolute left-4 top-4 z-20 inline-flex text-sm font-medium text-quiz-leaf-dark underline-offset-2 hover:text-quiz-leaf hover:underline sm:left-5 sm:top-5"
      >
        ← 返回說明
      </Link>
      <QuizFlow />
    </QuizPageShell>
  );
}
