"use client";

import { useEffect } from "react";
import { clearQuizProgress } from "@/lib/quiz/storage";

type Props = {
  title: string;
};

/** 結果頁：清除暫存進度，並更新分頁標題 */
export function QuizResultEffects({ title }: Props) {
  useEffect(() => {
    clearQuizProgress();
    const previousTitle = document.title;
    document.title = `${title}｜頭皮心理測驗`;

    return () => {
      document.title = previousTitle;
    };
  }, [title]);

  return null;
}
