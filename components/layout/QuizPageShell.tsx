import { CardBackground } from "@/components/layout/CardBackground";
import type { BackgroundVariant } from "@/lib/quiz/backgrounds";

type Props = {
  variant: BackgroundVariant;
  children: React.ReactNode;
  category?: string;
  /** 結果頁從頂部開始，其餘置中 */
  align?: "center" | "top";
};

/**
 * 直式手機卡片版面：外層淺色底 + 中央直式卡片，背景圖在卡片內。
 */
export function QuizPageShell({
  variant,
  children,
  category,
  align = "center",
}: Props) {
  return (
    <div className="flex min-h-dvh w-full flex-col items-center justify-center bg-stone-300/80 px-3 py-3 dark:bg-stone-950 sm:px-4 sm:py-6">
      <main className="flex w-full flex-1 flex-col items-center justify-center pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]">
        <article
          className="relative flex w-[min(100%,22.5rem)] flex-col overflow-hidden rounded-[1.75rem] shadow-2xl ring-1 ring-black/10 sm:w-[min(100%,24rem)]"
          style={{
            height: "min(90dvh, calc(min(100vw - 1.5rem, 24rem) * 16 / 9))",
            maxHeight: "90dvh",
          }}
        >
          <CardBackground
            variant={variant}
            category={category}
          />

          <div
            data-quiz-card-scroll
            className={`relative z-10 flex min-h-0 flex-1 flex-col overflow-x-hidden overflow-y-auto overscroll-contain px-3 py-4 text-stone-900 sm:px-4 sm:py-5 ${
              align === "top" ? "justify-start" : "justify-center"
            }`}
          >
            {children}
          </div>
        </article>
      </main>
    </div>
  );
}