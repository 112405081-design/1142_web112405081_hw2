/** 各頁背景圖路徑（將圖片放到 public/images/backgrounds/） */
export type BackgroundVariant = "home" | "intro" | "play" | "result";

export type BackgroundConfig = {
  /**
   * 依序嘗試載入（放 JPG 時請把 .jpg 放在陣列最前面）
   * 路徑皆相對於 public/
   */
  sources: string[];
  fileHint: string;
};

export const BACKGROUNDS: Record<BackgroundVariant, BackgroundConfig> = {
  home: {
    sources: [
      "/images/backgrounds/home.jpg",
      "/images/backgrounds/home.jpeg",
      "/images/backgrounds/home.png",
      "/images/backgrounds/home.webp",
    ],
    fileHint: "home.jpg",
  },
  intro: {
    sources: [
      "/images/backgrounds/intro.jpg",
      "/images/backgrounds/intro.jpeg",
      "/images/backgrounds/intro.png",
      "/images/backgrounds/intro.webp",
      "/images/backgrounds/intro.svg",
    ],
    fileHint: "intro.jpg",
  },
  play: {
    sources: [
      "/images/backgrounds/play.jpg",
      "/images/backgrounds/play.jpeg",
      "/images/backgrounds/play.png",
      "/images/backgrounds/play.webp",
    ],
    fileHint: "play.jpg",
  },
  result: {
    sources: [
      "/images/backgrounds/result.jpg",
      "/images/backgrounds/result.jpeg",
      "/images/backgrounds/result.png",
      "/images/backgrounds/result.webp",
      "/images/backgrounds/result.svg",
    ],
    fileHint: "result.jpg",
  },
};
