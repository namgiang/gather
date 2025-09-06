"use client";

import Header from "./_components/Header";
import CurrentEvent from "./_components/CurrentEvent";
import AboutUs from "./_components/AboutUs";
import Contact from "./_components/Contact";
import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { easeOutCubic } from "./constants";

export default function Home() {
  const reduce = useReducedMotion();
  const [ready, setReady] = useState(false);
  const raf2Ref = useRef<number | null>(null);
  const heroVariants = {
    hidden: { opacity: 0, y: 24, rotate: -6 },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { duration: 0.6, ease: easeOutCubic },
    },
  } as const;

  // Defer animation start until after mount to avoid iOS Safari occasionally sticking at initial state
  useEffect(() => {
    // two rAFs to ensure fonts/layout settled before animating
    const f1 = requestAnimationFrame(() => {
      raf2Ref.current = requestAnimationFrame(() => setReady(true));
    });
    return () => {
      cancelAnimationFrame(f1);
      if (raf2Ref.current) cancelAnimationFrame(raf2Ref.current);
    };
  }, []);

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="bg-white px-4 text-stone-900 antialiased relative"
      >
        <motion.h1
          className="font-archivo-black text-[3.8rem] md:text-[6rem] lg:text-[7rem] my-6 md:my-0 text-center font-extrabold tracking-tight md:leading-[105%]"
          style={{
            transformOrigin: "bottom right",
            willChange: "transform, opacity",
          }}
          variants={heroVariants}
          initial={reduce ? undefined : "hidden"}
          animate={reduce ? { opacity: 1 } : ready ? "show" : "hidden"}
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
