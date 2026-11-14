"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useState } from "react";

/**
 * Sticky header that slides away while you scroll down and comes back the moment
 * you scroll up (or focus something inside it), so "Say Hi" is never far away.
 *
 * In-page hash links pin it visible for a beat so scroll-margin space is covered
 * by the header instead of a strip of the previous section.
 */
export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const pinUntil = useRef(0);

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
        const pinned = Date.now() < pinUntil.current;
        const focusInside = ref.current?.contains(document.activeElement);
        if (!pinned && !focusInside) setHidden(true);
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

    const pin = () => {
      setHidden(false);
      // long enough to cover smooth scroll + settle
      pinUntil.current = Date.now() + 1500;
    };

    const onClick = (e: MouseEvent) => {
      const t = e.target;
      if (!(t instanceof Element)) return;
      if (t.closest('a[href^="#"]')) pin();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("hashchange", pin);
    document.addEventListener("click", onClick);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("hashchange", pin);
      document.removeEventListener("click", onClick);
    };
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
