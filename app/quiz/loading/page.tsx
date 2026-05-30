import { Suspense } from "react";
import { QuizPageShell } from "@/components/layout/QuizPageShell";
import {
  QuizResultLoadingClient,
  QuizResultLoadingFallback,
} from "@/components/quiz/QuizResultLoadingClient";

export default function QuizResultLoadingPage() {
  return (
    <QuizPageShell variant="play">
      <Suspense fallback={<QuizResultLoadingFallback />}>
        <QuizResultLoadingClient />
      </Suspense>
    </QuizPageShell>
  );
}
