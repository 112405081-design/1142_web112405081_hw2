"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { QuizPageShell } from "@/components/layout/QuizPageShell";

const COUNTER_STORAGE_KEY = "home-morning-counter";

const btnPrimary =
  "quiz-tap btn-quiz-leaf touch-target inline-flex w-full max-w-[12rem] items-center justify-center rounded-xl px-6 py-3 text-sm font-medium shadow-lg transition-colors hover:shadow-xl sm:text-base";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(COUNTER_STORAGE_KEY);
    if (saved !== null) {
      const value = Number(saved);
      if (!Number.isNaN(value)) setCounter(value);
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    localStorage.setItem(COUNTER_STORAGE_KEY, String(counter));
  }, [counter, ready]);

  function addMorning() {
    setCounter((prev) => prev + 1);
  }

  return (
    <QuizPageShell variant="home">
      <div className="flex min-h-full flex-col items-center justify-center gap-5 text-center sm:gap-6">
        <Link
          href="/quiz"
          className="quiz-tap quiz-text-shadow touch-target text-sm text-quiz-leaf-dark underline-offset-4 hover:text-quiz-leaf sm:text-base"
        >
          前往頭皮心理測驗 →
        </Link>
      </div>
    </QuizPageShell>
  );
}
