"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { isScalpCategory } from "@/lib/quiz/results";

const LOADING_MS = 2200;

export function QuizResultLoadingClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  useEffect(() => {
    if (!category || !isScalpCategory(category)) {
      router.replace("/quiz");
      return;
    }

    const timer = window.setTimeout(() => {
      router.replace(`/quiz/result/${category}`);
    }, LOADING_MS);

    return () => window.clearTimeout(timer);
  }, [category, router]);

  return (
    <div className="flex min-h-full flex-col items-center justify-center gap-6 py-16">
      <div className="quiz-loading-spinner" aria-hidden />
      <div className="space-y-2 text-center">
        <p className="quiz-text-shadow text-base font-semibold text-quiz-leaf-dark sm:text-lg">
          正在分析你的答案
        </p>
        <p className="quiz-text-shadow text-sm text-stone-800/80">
          結果即將揭曉…
        </p>
      </div>
    </div>
  );
}

export function QuizResultLoadingFallback() {
  return (
    <div className="flex min-h-full items-center justify-center py-16">
      <p className="quiz-text-shadow text-sm text-stone-800/80">載入中…</p>
    </div>
  );
}
