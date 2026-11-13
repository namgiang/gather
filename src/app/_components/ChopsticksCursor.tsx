"use client";

import { useEffect, useRef } from "react";

const CLICKABLE = 'a, button, summary, [role="button"], label[for], .gl-pbtn, .gl-pill';
const FIELD = 'input, textarea, select, [contenteditable="true"]';

/**
 * Chopsticks that follow the mouse and pinch over anything clickable.
 * Desktop with a fine pointer only; otherwise the static CSS cursor in
 * globals.css (or the normal one) is used.
 */
export default function ChopsticksCursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const calm = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || calm.matches) return;

    const root = document.documentElement;
    root.classList.add("gl-cc");
    let down = false;

    const state = (t: Element | null) => {
      if (down) return "press";
      return t?.closest?.(CLICKABLE) ? "pinch" : "open";
    };
    const move = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      el.style.transform = `translate3d(${e.clientX - 8}px, ${e.clientY - 6}px, 0)`;
      const t = e.target as Element | null;
      const field = !!t?.closest?.(FIELD);
      el.dataset.v = field ? "0" : "1";
      el.dataset.s = state(t);
    };
    const press = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = true;
      el.dataset.s = "press";
    };
    const release = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      down = false;
      el.dataset.s = state(e.target as Element | null);
    };
    const hide = () => {
      el.dataset.v = "0";
    };

    document.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerdown", press, { passive: true });
    document.addEventListener("pointerup", release, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      root.classList.remove("gl-cc");
      document.removeEventListener("pointermove", move);
      document.removeEventListener("pointerdown", press);
      document.removeEventListener("pointerup", release);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="gl-cc-wrap" data-s="open" data-v="0">
      <svg width="64" height="64" viewBox="0 0 32 32" overflow="visible">
        <g>
          <path d="M3.66 3.30L25.73 29.93L28.27 27.67L4.34 2.70Z" fill="#1A1A1A" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" paintOrder="stroke" />
          <circle cx="27" cy="28.8" r="1.7" fill="#1A1A1A" stroke="#fff" strokeWidth="1.8" paintOrder="stroke" />
          <path d="M3.66 3.30L25.73 29.93L28.27 27.67L4.34 2.70Z" fill="#1A1A1A" />
          <circle cx="27" cy="28.8" r="1.7" fill="#1A1A1A" />
          <path d="M19.55 22.47L22.20 25.67L24.44 23.67L21.57 20.68Z" fill="#E0301E" />
        </g>
        <g className="gl-cc-b">
          <path d="M-34.32 0.36L0.00 1.36L0.00 -1.36L-34.32 -0.36Z" fill="#1A1A1A" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" paintOrder="stroke" />
          <circle cx="0" cy="0" r="1.36" fill="#1A1A1A" stroke="#fff" strokeWidth="1.8" paintOrder="stroke" />
          <path d="M-34.32 0.36L0.00 1.36L0.00 -1.36L-34.32 -0.36Z" fill="#1A1A1A" />
          <circle cx="0" cy="0" r="1.36" fill="#1A1A1A" />
          <path d="M-9.61 1.08L-5.49 1.20L-5.49 -1.20L-9.61 -1.08Z" fill="#E0301E" />
        </g>
      </svg>
    </div>
  );
}
