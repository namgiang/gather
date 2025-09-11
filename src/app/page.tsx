"use client";

import Header from "./_components/Header";
import CurrentEvent from "./_components/CurrentEvent";
import AboutUs from "./_components/AboutUs";
import Contact from "./_components/Contact";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { easeOutCubic } from "./constants";

export default function Home() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [fallbackApplied, setFallbackApplied] = useState(false);
  const raf1 = useRef<number | null>(null);
  const raf2 = useRef<number | null>(null);
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const initialTransformRef = useRef<string | null>(null);

  // Use layout effect so the initial (hidden) state paints before we trigger the animation.
  useLayoutEffect(() => {
    if (reduce) {
      setMounted(true);
      return;
    }
    // Capture initial transform after Motion sets it.
    raf1.current = requestAnimationFrame(() => {
      if (h1Ref.current) {
        initialTransformRef.current = getComputedStyle(h1Ref.current).transform;
      }
      // Second RAF to ensure a paint happened, then flip to animated state.
      raf2.current = requestAnimationFrame(() => {
        setMounted(true);
      });
    });
    return () => {
      if (raf1.current) cancelAnimationFrame(raf1.current);
      if (raf2.current) cancelAnimationFrame(raf2.current);
    };
  }, [reduce]);

  // Fallback: if after 900ms the transform hasn't changed, force final state (some older iOS Safari builds stall WA animations)
  useEffect(() => {
    if (reduce) return;
    if (!mounted) return;
    const timer = setTimeout(() => {
      if (!h1Ref.current) return;
      const current = getComputedStyle(h1Ref.current).transform;
      if (initialTransformRef.current && current === initialTransformRef.current) {
        // Animation didn't progress; force end state.
        setFallbackApplied(true);
      }
    }, 900);
    return () => clearTimeout(timer);
  }, [mounted, reduce]);

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="bg-white px-4 text-stone-900 antialiased relative"
      >
        <motion.h1
          ref={h1Ref}
          className="font-archivo-black text-[3.8rem] md:text-[6rem] lg:text-[7rem] my-6 md:my-0 text-center font-extrabold tracking-tight md:leading-[105%]"
          style={{
            transformOrigin: "bottom right",
            willChange: "transform, opacity",
            WebkitBackfaceVisibility: "hidden",
            backfaceVisibility: "hidden",
            perspective: 1000,
            // Fallback forces final state without animation if needed
            ...(fallbackApplied ? { transform: "translateY(0) rotate(0deg)", opacity: 1, transition: "none" } : {}),
          }}
          initial={false}
          animate={
            reduce
              ? { opacity: 1 }
              : mounted
              ? { opacity: 1, y: 0, rotate: 0 }
              : { opacity: 0, y: 24, rotate: -6 }
          }
          transition={
            reduce
              ? undefined
              : {
                  opacity: { duration: 0.3, ease: easeOutCubic },
                  y: { duration: 0.6, ease: easeOutCubic },
                  rotate: { duration: 0.6, ease: easeOutCubic },
                }
          }
          whileTap={{ scale: 0.98 }}
        >
          <span style={{ display: "inline-block", transform: "translateZ(0)" }}>
            GATHER
          </span>
        </motion.h1>
        <CurrentEvent />
        <AboutUs />
      </main>
      <footer>
        <Contact />
      </footer>
    </>
  );
}
