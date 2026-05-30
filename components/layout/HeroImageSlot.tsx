"use client";

import { useCallback, useEffect, useState } from "react";

type Props = {
  sources?: string[];
  alt?: string;
  fileHint?: string;
  className?: string;
  hideHintWhenLoaded?: boolean;
  fit?: "cover" | "contain";
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
  fit = "cover",
}: Props) {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [allFailed, setAllFailed] = useState(false);

  const currentSrc = sources[sourceIndex] ?? "";
  const isContain = fit === "contain";

  useEffect(() => {
    setSourceIndex(0);
    setLoaded(false);
    setAllFailed(false);
  }, [sources.join("|")]);

  const tryNextSource = useCallback(() => {
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

  const handleError = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget;
      if (img.naturalWidth > 0) return;
      tryNextSource();
    },
    [tryNextSource],
  );

  const handleLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      if (e.currentTarget.naturalWidth > 0) {
        setLoaded(true);
        setAllFailed(false);
      }
    },
    [],
  );

  const showHint = !hideHintWhenLoaded || !loaded || allFailed;

  if (isContain) {
    return (
      <figure className={`w-full ${className}`}>
        <div className="relative mx-auto h-[min(40dvh,16rem)] w-full min-h-[9rem] sm:h-[min(44dvh,18rem)]">
          {!allFailed && currentSrc ? (
            <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                key={currentSrc}
                src={currentSrc}
                alt={alt}
                decoding="async"
                onLoad={handleLoad}
                onError={handleError}
                className={`absolute inset-0 h-full w-full object-contain object-center transition-opacity duration-300 ${
                  loaded ? "opacity-100" : "opacity-0"
                }`}
              />
              {!loaded && (
                <div className="absolute inset-0 flex items-center justify-center text-xs text-stone-600/80">
                  圖片載入中…
                </div>
              )}
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center px-4 text-center text-xs text-stone-600">
              請將圖片放到
              <br />
              <span className="font-mono">public/images/hero/{fileHint}</span>
            </div>
          )}
        </div>
        {showHint && (
          <figcaption className="mt-2 text-center text-[10px] text-stone-500">
            <span className="font-mono">public/images/hero/{fileHint}</span>
          </figcaption>
        )}
      </figure>
    );
  }

  return (
    <figure className={`mb-6 sm:mb-8 ${className}`}>
      <div className="relative overflow-hidden rounded-xl border border-dashed border-stone-300/80 bg-stone-100/80 sm:rounded-2xl">
        {!allFailed && currentSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={currentSrc}
            src={currentSrc}
            alt={alt}
            onLoad={handleLoad}
            onError={handleError}
            className="aspect-[16/9] w-full object-cover object-center sm:aspect-[21/9]"
          />
        ) : (
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-stone-200/80 px-4 text-center text-xs text-stone-600 sm:aspect-[21/9]">
            請將圖片放到
            <br />
            <span className="font-mono">public/images/hero/{fileHint}</span>
          </div>
        )}
      </div>
      {showHint && (
        <figcaption className="mt-2 text-center text-[10px] text-stone-500">
          <span className="font-mono">public/images/hero/{fileHint}</span>
        </figcaption>
      )}
    </figure>
  );
}

/** 結果頁：優先 JPG（檔案約 3MB，勿用 SVG 覆蓋） */
export function resultHeroSources(category: string): string[] {
  return [
    `/images/hero/result-${category}.jpg`,
    `/images/hero/result-${category}.jpeg`,
    `/images/hero/result-${category}.png`,
    `/images/hero/result-${category}.webp`,
  ];
}
