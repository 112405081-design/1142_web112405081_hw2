import type { AnswerChoice } from "./types";

export const QUIZ_PROGRESS_KEY = "scalp-quiz-progress";

export type QuizProgress = {
  currentIndex: number;
  answers: AnswerChoice[];
};

export function loadQuizProgress(): QuizProgress | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = localStorage.getItem(QUIZ_PROGRESS_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as QuizProgress;
    if (
      typeof parsed.currentIndex !== "number" ||
      !Array.isArray(parsed.answers)
    ) {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

export function saveQuizProgress(progress: QuizProgress): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(QUIZ_PROGRESS_KEY, JSON.stringify(progress));
}

export function clearQuizProgress(): void {
  if (typeof window === "undefined") return;
  localStorage.removeItem(QUIZ_PROGRESS_KEY);
}
