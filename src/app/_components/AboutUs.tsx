"use client";

import {
  motion,
  useReducedMotion,
  useInView,
  useAnimationControls,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { easeOutCubic } from "../constants";

export default function AboutUs() {
  const reduce = useReducedMotion();
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const inView = useInView(headingRef, { amount: 0.3, once: false });
  const controls = useAnimationControls();
  const bgControls = useAnimationControls();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Track viewport width for mobile logic
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // First scroll detection (mobile only)
  useEffect(() => {
    if (!isMobile || hasScrolled) return;
    const onScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, hasScrolled]);

  // Animate when conditions satisfied
  useEffect(() => {
    if (reduce) {
      controls.set({ opacity: 1, y: 0, rotate: 0 });
      return;
    }
    if (!isMobile && inView) controls.start("visible");
    if (isMobile && hasScrolled && inView) controls.start("visible");
  }, [reduce, inView, isMobile, hasScrolled, controls]);

  // Background mount animation: fade + move from y60 -> y20
  useEffect(() => {
    if (reduce) {
      bgControls.set("parked");
      return;
    }
    // defer to ensure layout
    requestAnimationFrame(() => bgControls.start("parked"));
  }, [reduce, bgControls]);

  // Background second phase: y20 -> y0 when heading allowed to animate
  useEffect(() => {
    if (reduce) {
      bgControls.set("atRest");
      return;
    }
    if (!isMobile && inView) bgControls.start("atRest");
    if (isMobile && hasScrolled && inView) bgControls.start("atRest");
  }, [reduce, inView, isMobile, hasScrolled, bgControls]);

  const variants = {
    hidden: { opacity: 0, y: 32, rotate: -6 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.9, ease: easeOutCubic },
    },
  } as const;

  const bgVariants = {
    initialMount: { opacity: 0, y: -100, scale: 0.6 },
    parked: {
      opacity: 1,
      y: -50,
      scale: 0.7,
      transition: { duration: 0.9, ease: easeOutCubic },
    },
    atRest: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.9, ease: easeOutCubic },
    },
  } as const;

  return (
    <section
      id="about"
      className="relative mx-auto w-full max-w-[460px] py-8 md:py-10"
    >
      {/* Rotated background layer */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
        variants={bgVariants}
        initial={reduce ? "parked" : "initialMount"}
        animate={bgControls}
      >
        <div
          className="w-[136%] h-[136%] -translate-x-[14%] -translate-y-[18%] bg-cover bg-center"
          style={{ backgroundImage: "url(flower.png)" }}
        />
      </motion.div>
      {/* Overlay for readability (light so image shows) */}
      {/* <div
        aria-hidden
        className="absolute inset-0 z-10 bg-white/40 backdrop-blur-[1px] pointer-events-none"
      /> */}
      {/* Mobile scroll hint */}
      <motion.h2
        ref={headingRef}
        className="relative z-20 font-archivo-black text-[3.1rem] md:text-7xl leading-snug tracking-tight text-center"
        style={{ transformOrigin: "bottom right" }}
        variants={variants}
        initial={reduce ? undefined : "hidden"}
        animate={controls}
      >
        We create dining experiences that connect people
      </motion.h2>
    </section>
  );
}
