"use client";

import { useCallback, useState } from "react";
import {
  BACKGROUNDS,
  type BackgroundVariant,
} from "@/lib/quiz/backgrounds";

type Props = {
  variant: BackgroundVariant;
};

/** 卡片內全幅背景圖（非全螢幕） */
export function CardBackground({ variant }: Props) {
  const { sources, fileHint } = BACKGROUNDS[variant];
  const [sourceIndex, setSourceIndex] = useState(0);
  const [allFailed, setAllFailed] = useState(false);

  const currentSrc = sources[sourceIndex];

  const handleError = useCallback(() => {
    setSourceIndex((index) => {
      const next = index + 1;
      if (next >= sources.length) {
        setAllFailed(true);
        return index;
      }
      return next;
    });
  }, [sources.length]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {!allFailed && currentSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={currentSrc}
          src={currentSrc}
          alt=""
          className="h-full w-full object-cover object-center"
          onError={handleError}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-gradient-to-b from-stone-300 to-stone-500 px-4">
          <p className="rounded-lg border border-dashed border-stone-500/60 bg-white/80 p-3 text-center text-[10px] leading-relaxed text-stone-700">
            卡片背景圖
            <br />
            <span className="font-mono">backgrounds/{fileHint}</span>
          </p>
        </div>
      )}
    </div>
  );
}
