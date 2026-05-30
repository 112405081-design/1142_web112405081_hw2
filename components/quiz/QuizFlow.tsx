"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { QUIZ_QUESTIONS } from "@/lib/quiz/questions";
import {
  clearQuizProgress,
  loadQuizProgress,
  saveQuizProgress,
} from "@/lib/quiz/storage";
import { calculateScores, getResultCategory } from "@/lib/quiz/scoring";
import type { AnswerChoice } from "@/lib/quiz/types";

const SLIDE_MS = 420;

export function QuizFlow() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerChoice[]>([]);
  const [restored, setRestored] = useState(false);
  const [tappedId, setTappedId] = useState<string | null>(null);
  const [isAdvancing, setIsAdvancing] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"forward" | "back">(
    "forward",
  );
  const canPersist = useRef(false);

  const question = QUIZ_QUESTIONS[currentIndex];
  const total = QUIZ_QUESTIONS.length;
  const answeredCount = answers.filter(Boolean).length;
  const progress = ((currentIndex + 1) / total) * 100;

  useEffect(() => {
    const saved = loadQuizProgress();
    if (saved) {
      setCurrentIndex(saved.currentIndex);
      setAnswers(saved.answers);
    }
    canPersist.current = true;
    setRestored(true);
  }, []);

  useEffect(() => {
    if (!canPersist.current) return;
    saveQuizProgress({ currentIndex, answers });
  }, [currentIndex, answers]);

  function handleSelect(choice: AnswerChoice, optionId: string) {
    if (isAdvancing) return;

    setTappedId(optionId);
    setIsAdvancing(true);

    const nextAnswers = [...answers];
    nextAnswers[currentIndex] = choice;
    setAnswers(nextAnswers);

    const isLast = currentIndex === total - 1;

    window.setTimeout(() => {
      if (isLast) {
        const scores = calculateScores(nextAnswers);
        const category = getResultCategory(scores);
        clearQuizProgress();
        router.push(`/quiz/loading?category=${category}`);
        return;
      }
      setSlideDirection("forward");
      setCurrentIndex((i) => i + 1);
      setTappedId(null);
      setIsAdvancing(false);
    }, SLIDE_MS);
  }

  function handleBack() {
    if (currentIndex === 0 || isAdvancing) return;
    setSlideDirection("back");
    setCurrentIndex((i) => i - 1);
    setTappedId(null);
  }

  if (!restored) {
    return (
      <p className="quiz-text-shadow flex min-h-full items-center justify-center text-center text-sm text-stone-800/80">
        載入測驗中…
      </p>
    );
  }

  return (
    <div className="quiz-slide-container min-h-full">
      <div
        key={currentIndex}
        className={`flex min-h-full w-full flex-col justify-center space-y-5 py-10 ${
          slideDirection === "forward" ? "quiz-slide-forward" : "quiz-slide-back"
        }`}
      >
        <div className="space-y-2">
          <p className="quiz-text-shadow text-center text-xs text-stone-800/85 sm:text-sm">
            第 {currentIndex + 1} / {total} 題
          </p>
          <div className="h-1.5 overflow-hidden rounded-full bg-quiz-leaf/20">
            <div
              className="h-full rounded-full bg-quiz-leaf-dark transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="flex h-[72px] items-center justify-center">
          <h2 className="quiz-text-shadow text-center text-base font-semibold leading-snug sm:text-lg">
            {question.text}
          </h2>
        </div>

        <ul className="space-y-2.5">
          {question.options.map((option) => {
            const selected = answers[currentIndex] === option.choice;
            const isTapped = tappedId === option.id;

            return (
              <li key={option.id}>
                <button
                  type="button"
                  disabled={isAdvancing && !isTapped}
                  onClick={() => handleSelect(option.choice, option.id)}
                  className={`quiz-choice touch-target w-full rounded-3xl border px-5 py-4 text-center text-sm leading-snug transition-all duration-300 ${
                    selected || isTapped
                      ? "quiz-choice-selected border-quiz-leaf-dark bg-quiz-leaf-dark text-white shadow-md"
                      : "bg-white/40 backdrop-blur-md border border-white/60 text-quiz-leaf-dark shadow-sm hover:bg-white/55"
                  } ${isTapped ? "quiz-choice-tap" : ""}`}
                >
                  <span className="mr-1.5 font-semibold">{option.choice}.</span>
                  {option.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="h-[40px] pt-1 text-center">
          {currentIndex > 0 && (
            <button
              type="button"
              onClick={handleBack}
              disabled={isAdvancing}
              className="quiz-tap quiz-text-shadow touch-target text-sm text-quiz-leaf-dark underline-offset-2 hover:text-quiz-leaf disabled:opacity-50"
            >
              上一題
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
