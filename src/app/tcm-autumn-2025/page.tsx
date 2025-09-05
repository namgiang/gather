"use client";

import { MotionConfig, useReducedMotion } from "motion/react";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import FirstCourse from "./_components/FirstCourse";

// Single-file Next.js route component
// Drop this into app/page.tsx (or app/tcm-autumn/page.tsx)
export default function Page() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "user"}>
      <Header />
      <main className="min-h-screen bg-white text-stone-900 antialiased relative">
        <Hero />
      </main>
    </MotionConfig>
  );
}
