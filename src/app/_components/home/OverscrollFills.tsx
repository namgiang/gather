"use client";

import { useEffect } from "react";

/**
 * Fixed layers behind the page. Rubber-band overscroll reveals whatever sits
 * behind the moving content — html background-color alone can't show gingham
 * (WebKit only paints the solid color into the bounce), so these fixed fills
 * stay put while the page stretches.
 */
export default function OverscrollFills() {
  useEffect(() => {
    const root = document.documentElement;
    let ink = false;

    const paint = () => {
      const max = root.scrollHeight - window.innerHeight;
      // generous slack: iOS toolbars / fractional scrollY often miss exact max
      const atBottom = max > 0 && window.scrollY >= max - 64;
      if (atBottom === ink) return;
      ink = atBottom;
      root.classList.toggle("gl-bounce-ink", atBottom);
      root.classList.toggle("gl-bounce-gingham", !atBottom);
    };

    root.classList.add("gl-bounce-gingham");
    root.classList.remove("gl-bounce-ink");
    paint();
    window.addEventListener("scroll", paint, { passive: true });
    window.addEventListener("resize", paint, { passive: true });
    return () => {
      window.removeEventListener("scroll", paint);
      window.removeEventListener("resize", paint);
      root.classList.remove("gl-bounce-ink", "gl-bounce-gingham");
    };
  }, []);

  return (
    <>
      <div aria-hidden="true" className="gl-bounce-fill gl-bounce-fill-gingham" />
      <div aria-hidden="true" className="gl-bounce-fill gl-bounce-fill-ink" />
    </>
  );
}
