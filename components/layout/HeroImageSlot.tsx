"use client";

import { useCallback, useState } from "react";

type Props = {
  /** 依序嘗試的路徑，預設 hero.jpg */
  sources?: string[];
  alt?: string;
  fileHint?: string;
  className?: string;
  /** 圖片成功載入後隱藏下方提示文字 */
  hideHintWhenLoaded?: boolean;
};

const DEFAULT_HERO_SOURCES = [
  "/images/hero/hero.jpg",
  "/images/hero/hero.jpeg",
  "/images/hero/hero.png",
  "/images/hero/hero.webp",
  "/images/hero/hero-placeholder.svg",
];

export function HeroImageSlot({
  sources = DEFAULT_HERO_SOURCES,
  alt = "測驗主視覺",
  fileHint = "hero.jpg",
  className = "",
  hideHintWhenLoaded = true,
}: Props) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  const currentSrc = sources[sourceIndex];

  const handleError = useCallback(() => {
    setLoaded(false);
    setSourceIndex((index) => {
      const next = index + 1;
      if (next >= sources.length) {
        setAllFailed(true);
        return index;
      }
      return next;
    });
  }, [sources.length]);

  const showHint = !hideHintWhenLoaded || !loaded || allFailed;

  return (
    <figure className={`mb-6 sm:mb-8 ${className}`}>
      <div className="relative overflow-hidden rounded-xl border border-dashed border-stone-300/80 bg-stone-100/80 sm:rounded-2xl dark:border-stone-600 dark:bg-stone-800/50">
        {!allFailed && currentSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={currentSrc}
            src={currentSrc}
            alt={alt}
            className="aspect-[16/9] w-full object-cover sm:aspect-[21/9]"
            onLoad={() => setLoaded(true)}
            onError={handleError}
          />
        ) : (
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-stone-200/80 px-4 text-center text-xs text-stone-600 sm:aspect-[21/9]">
            請將主視覺放到
            <br />
            <span className="font-mono">public/images/hero/{fileHint}</span>
          </div>
        )}
      </div>
      {showHint && (
        <figcaption className="mt-2 text-center text-[10px] leading-snug text-stone-500 sm:text-xs dark:text-stone-400">
          主視覺圖 ·{" "}
          <span className="font-mono">public/images/hero/{fileHint}</span>
        </figcaption>
      )}
    </figure>
  );
}

/** 結果頁主視覺：依類型嘗試 JPG，再退回 SVG 佔位 */
export function resultHeroSources(category: string): string[] {
  return [
    `/images/hero/result-${category}.jpg`,
    `/images/hero/result-${category}.jpeg`,
    `/images/hero/result-${category}.png`,
    `/images/hero/result-${category}.webp`,
    `/images/hero/result-${category}.svg`,
  ];
}
