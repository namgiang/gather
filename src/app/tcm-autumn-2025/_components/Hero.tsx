"use client";

import { useAnimationControls, useReducedMotion } from "motion/react";
import { useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const cupControls = useAnimationControls();
  const steamControls = useAnimationControls();
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    cupControls.start({
      scale: [1, 1.02, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "mirror",
        ease: "easeInOut",
      },
    });
    steamControls.start({
      y: [8, -14],
      opacity: [0.0, 1, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    });
  }, [cupControls, steamControls, prefersReducedMotion]);

  return (
    <section id="hero" aria-labelledby="herotitle" className="relative isolate">
      <div
        className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-20 md:py-24"
        id="content"
      >
        <div className="space-y-6 self-start">
          <h1 className="font-serif text-5xl">Autumn Healing TCM Dinner</h1>
        </div>
        <div className="relative">
          <Image
            src="/cute-dining-table-of-herbs-and-tea--lotus-root--ch.png"
            alt="Cute dining table with herbs and tea, featuring lotus root and traditional Chinese elements"
            width={600}
            height={600}
            className="w-full h-auto rounded-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
}
