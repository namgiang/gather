"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

/**
 * Sticky header that slides away while you scroll down and comes back the moment
 * you scroll up (or focus something inside it), so "Say Hi" is never far away.
 */
export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    let last = window.scrollY;
    let ticking = false;

    const update = () => {
      ticking = false;
      const y = window.scrollY;
      const dy = y - last;
      if (y < 80) {
        setHidden(false);
        last = y;
      } else if (dy > 8) {
        // keep it visible while a keyboard user is inside it
        if (!ref.current?.contains(document.activeElement)) setHidden(true);
        last = y;
      } else if (dy < -8) {
        setHidden(false);
        last = y;
      }
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      ref={ref}
      onFocusCapture={() => setHidden(false)}
      className={`sticky top-0 z-20 border-b-2 border-ink bg-cream transition-transform ease-[cubic-bezier(.215,.61,.355,1)] motion-reduce:transition-none ${
        hidden ? "-translate-y-full duration-[250ms]" : "duration-200"
      }`}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-2.5 md:px-6 md:py-3.5">
        <a href="#top" aria-label="Gather home" className="block leading-[0]">
          <img src="logo.svg" alt="Gather" className="h-[30px] w-auto md:h-9" />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-2">
          <a
            href="#gatherings"
            className="gl-pill hidden rounded-full border-2 border-ink bg-white px-4 py-2.5 text-[15px] font-bold sm:block"
          >
            Gatherings
          </a>
          <a
            href="#about"
            className="gl-pill hidden rounded-full border-2 border-ink bg-white px-4 py-2.5 text-[15px] font-bold sm:block"
          >
            About
          </a>
          <a
            href="#book"
            className="gl-pill gl-press rounded-full border-2 border-ink bg-tomato px-[18px] py-[11px] text-[15px] font-bold text-white md:py-2.5"
          >
            Say Hi
          </a>
        </nav>
      </div>
    </header>
  );
}
