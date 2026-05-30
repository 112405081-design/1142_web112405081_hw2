import type { AnswerChoice, CategoryScores, ScalpCategory } from "./types";

/** 各選項加分（與測驗規則一致） */
export const CHOICE_SCORES: Record<
  AnswerChoice,
  Partial<Record<ScalpCategory, number>>
> = {
  A: { oily: 2 },
  B: { sensitive: 2, dry: 1 },
  C: { neutral: 2 },
  D: { thin: 1, hairloss: 2 },
};

export const ALL_CATEGORIES: ScalpCategory[] = [
  "oily",
  "sensitive",
  "dry",
  "neutral",
  "thin",
  "hairloss",
];

/** 同分時優先順序（分數高者勝，並列則依此順序） */
const TIE_BREAK_PRIORITY: ScalpCategory[] = [
  "hairloss",
  "oily",
  "sensitive",
  "thin",
  "dry",
  "neutral",
];

export function createEmptyScores(): CategoryScores {
  return {
    oily: 0,
    sensitive: 0,
    dry: 0,
    neutral: 0,
    thin: 0,
    hairloss: 0,
  };
}

export function addChoiceToScores(
  scores: CategoryScores,
  choice: AnswerChoice,
): CategoryScores {
  const next = { ...scores };
  const deltas = CHOICE_SCORES[choice];
  for (const category of ALL_CATEGORIES) {
    const delta = deltas[category];
    if (delta) next[category] += delta;
  }
  return next;
}

export function calculateScores(choices: AnswerChoice[]): CategoryScores {
  return choices.reduce(
    (scores, choice) => addChoiceToScores(scores, choice),
    createEmptyScores(),
  );
}

export function getResultCategory(scores: CategoryScores): ScalpCategory {
  const maxScore = Math.max(...ALL_CATEGORIES.map((c) => scores[c]));

  const tied = TIE_BREAK_PRIORITY.filter((c) => scores[c] === maxScore);
  return tied[0];
}
