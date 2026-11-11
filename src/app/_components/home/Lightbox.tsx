"use client";

/* eslint-disable @next/next/no-img-element */
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
  type TouchEvent,
} from "react";
import { GROUPS, type GroupKey } from "../../_data/events";

type Ctx = { open: (group: GroupKey, index: number) => void };
const LightboxContext = createContext<Ctx>({ open: () => {} });

export const useLightbox = () => useContext(LightboxContext);

type View = { group: GroupKey; index: number; dir: 1 | -1 };

const arrow =
  "gl-lb-nav grid cursor-pointer place-items-center rounded-full border-2 border-ink";

export function LightboxProvider({ children }: { children: ReactNode }) {
  const [view, setView] = useState<View | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  const touchX = useRef<number | null>(null);
  const isOpen = view !== null;

  const open = useCallback((group: GroupKey, index: number) => {
    returnFocus.current = document.activeElement as HTMLElement | null;
    setView({ group, index, dir: 1 });
  }, []);

  const close = useCallback(() => {
    setView(null);
    returnFocus.current?.focus?.();
  }, []);

  const step = useCallback((dir: 1 | -1) => {
    setView((v) => {
      if (!v) return v;
      const n = GROUPS[v.group].length;
      return { group: v.group, index: (v.index + dir + n) % n, dir };
    });
  }, []);

  // Lock page scroll and move focus into the dialog while it's open.
  useEffect(() => {
    if (!isOpen) return;
    const html = document.documentElement;
    const previous = html.style.overflow;
    html.style.overflow = "hidden";
    dialogRef.current?.focus();
    return () => {
      html.style.overflow = previous;
    };
  }, [isOpen]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") close();
    else if (e.key === "ArrowLeft") step(-1);
    else if (e.key === "ArrowRight") step(1);
  };

  const onTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const start = touchX.current;
    touchX.current = null;
    if (start === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? start) - start;
    if (Math.abs(dx) > 48) step(dx < 0 ? 1 : -1);
  };

  const ctx = useMemo(() => ({ open }), [open]);
  const photos = view ? GROUPS[view.group] : null;
  const current = view && photos ? photos[view.index] : null;

  return (
    <LightboxContext.Provider value={ctx}>
      {children}
      {view && photos && current && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          tabIndex={-1}
          onKeyDown={onKeyDown}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          className="gl-lb-in fixed inset-0 z-[100] flex flex-col items-center justify-center px-3 pb-[104px] pt-16 outline-none md:px-24 md:pb-16 md:pt-[72px]"
        >
          <button
            type="button"
            aria-label="Close photo"
            onClick={close}
            className="absolute inset-0 cursor-zoom-out border-0 bg-[rgba(26,20,15,.94)] p-0"
          />
          <figure className="pointer-events-none relative m-0 flex max-h-full max-w-full flex-col items-center gap-3 md:gap-3.5">
            <img
              key={`${view.group}-${view.index}`}
              className={`${view.dir > 0 ? "gl-lb-next" : "gl-lb-prev"} pointer-events-auto block h-auto max-h-[calc(100dvh-220px)] w-auto max-w-full rounded-xl border-2 border-cream md:max-h-[calc(100dvh-200px)] md:rounded-2xl md:border-[3px] md:shadow-[0_30px_60px_rgba(0,0,0,.45)]`}
              src={current.full}
              alt={current.alt}
            />
            <figcaption className="text-center font-hand text-2xl leading-[1.1] text-cream md:text-[28px]">
              {current.cap}
              <span className="ml-3 hidden font-sans text-[13px] font-bold tracking-[.12em] text-[#D8CFC4] md:inline">
                {view.index + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>

          {/* phone: arrows + count at the bottom */}
          <div className="absolute inset-x-0 bottom-7 flex items-center justify-center gap-[22px] md:hidden">
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => step(-1)}
              className={`${arrow} gl-press size-[52px] bg-cream`}
            >
              <Chevron dir="left" stroke="#1A1A1A" size={22} />
            </button>
            <span className="min-w-[52px] text-center text-[13px] font-bold tracking-[.12em] text-[#D8CFC4]">
              {view.index + 1} / {photos.length}
            </span>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => step(1)}
              className={`${arrow} gl-press size-[52px] bg-tomato`}
            >
              <Chevron dir="right" stroke="#FFFFFF" size={22} />
            </button>
          </div>

          {/* desktop: arrows on the sides */}
          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => step(-1)}
            className={`${arrow} absolute left-5 top-[calc(50%-28px)] hidden size-14 bg-cream md:grid`}
          >
            <Chevron dir="left" stroke="#1A1A1A" size={24} />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => step(1)}
            className={`${arrow} absolute right-5 top-[calc(50%-28px)] hidden size-14 bg-tomato md:grid`}
          >
            <Chevron dir="right" stroke="#FFFFFF" size={24} />
          </button>

          <button
            type="button"
            aria-label="Close photo viewer"
            onClick={close}
            className={`${arrow} gl-press absolute right-3.5 top-3.5 size-[46px] bg-cream md:right-5 md:top-5 md:size-12`}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#1A1A1A"
              strokeWidth="2.5"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      )}
    </LightboxContext.Provider>
  );
}

function Chevron({
  dir,
  stroke,
  size,
}: {
  dir: "left" | "right";
  stroke: string;
  size: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={stroke}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={dir === "left" ? "M15 18l-6-6 6-6" : "M9 18l6-6-6-6"} />
    </svg>
  );
}
