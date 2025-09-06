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
  const inView = useInView(headingRef, { amount: 0.2, once: false });
  const controls = useAnimationControls();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    setIsMobile(mq.matches);
    const handleChange = () => setIsMobile(mq.matches);
    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 0) {
        setHasScrolled(true);
        window.removeEventListener("scroll", onScroll);
      }
    };
    // Only attach for mobile; desktop animates on view immediately
    if (isMobile && !hasScrolled) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => window.removeEventListener("scroll", onScroll);
  }, [isMobile, hasScrolled]);

  useEffect(() => {
    if (reduce) {
      controls.set({ opacity: 1, y: 0, rotate: 0 });
      return;
    }
    // Desktop: animate as soon as it enters view.
    if (!isMobile && inView) {
      controls.start("visible");
    }
    // Mobile: require user scroll (any scroll) + in view.
    if (isMobile && hasScrolled && inView) {
      controls.start("visible");
    }
  }, [reduce, inView, isMobile, hasScrolled, controls]);

  const variants = {
    hidden: { opacity: 0, y: 32, rotate: -6 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.4, ease: easeOutCubic },
    },
  } as const;

  return (
    <section id="about" className="mx-auto w-full max-w-[400px] py-16 md:py-24">
      <motion.h2
        ref={headingRef}
        className="font-archivo-black text-6xl md:text-7xl leading-tight tracking-tight text-center"
        style={{ transformOrigin: "bottom right" }}
        variants={variants}
        initial={reduce ? undefined : "hidden"}
        animate={controls}
      >
        We create dining experience to connect people
      </motion.h2>
    </section>
  );
}
