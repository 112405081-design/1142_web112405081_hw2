"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

type Props = {
  title: string;
  sharePath: string;
};

const btnPrimary =
  "quiz-tap btn-quiz-leaf touch-target inline-flex w-full items-center justify-center rounded-xl px-6 py-3.5 text-sm font-medium shadow-lg transition-colors hover:shadow-xl";
const btnSecondary =
  "quiz-tap touch-target inline-flex w-full items-center justify-center rounded-xl border border-quiz-leaf/35 bg-white/85 px-6 py-3.5 text-sm font-medium text-quiz-leaf-dark shadow-sm backdrop-blur-sm hover:border-quiz-leaf/55 hover:bg-white hover:shadow-md";

export function QuizResultActions({ title, sharePath }: Props) {
  const [shareUrl, setShareUrl] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setShareUrl(`${window.location.origin}${sharePath}`);
  }, [sharePath]);

  const handleShare = useCallback(async () => {
    const url = shareUrl || `${window.location.origin}${sharePath}`;
    const text = `我的頭皮心理測驗結果：${title}`;

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: text, text, url });
        return;
      } catch {
        /* 使用者取消或不支援時改複製連結 */
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("複製此連結分享給朋友：", url);
    }
  }, [sharePath, shareUrl, title]);

  return (
    <div className="space-y-3 px-1 pb-2 pt-8">
      <Link href="/quiz/play" className={btnSecondary}>
        再測一次
      </Link>
      <button type="button" onClick={handleShare} className={btnPrimary}>
        {copied ? "連結已複製！" : "分享測驗結果"}
      </button>
    </div>
  );
}
