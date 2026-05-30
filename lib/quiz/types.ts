export type AnswerChoice = "A" | "B" | "C" | "D";

/** 結果類型（對應 URL slug） */
export type ScalpCategory =
  | "oily"
  | "sensitive"
  | "dry"
  | "neutral"
  | "thin"
  | "hairloss";

export type QuizOption = {
  id: string;
  choice: AnswerChoice;
  label: string;
};

export type QuizQuestion = {
  id: string;
  text: string;
  options: QuizOption[];
};

export type CategoryScores = Record<ScalpCategory, number>;

export type QuizResult = {
  category: ScalpCategory;
  title: string;
  subtitle: string;
  description: string;
  tips: string[];
};
