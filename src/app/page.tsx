"use client";

import Header from "./_components/Header";
import CurrentEvent from "./_components/CurrentEvent";
import AboutUs from "./_components/AboutUs";
import Contact from "./_components/Contact";
import { motion, useReducedMotion } from "motion/react";
import { easeOutCubic } from "./constants";

export default function Home() {
  const reduce = useReducedMotion();

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="bg-white px-4 text-stone-900 antialiased relative"
      >
        <motion.h1
          className="font-archivo-black text-[3.8rem] md:text-[6rem] lg:text-[7rem] my-6 md:my-0 text-center font-extrabold tracking-tight md:leading-[105%]"
          style={{ transformOrigin: "bottom right" }}
          initial={reduce ? undefined : { opacity: 0, y: 24, rotate: -6 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 0.3, ease: easeOutCubic }}
        >
          GATHER
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
