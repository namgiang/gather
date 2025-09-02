"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Teapot from "./Teapot";

function Header() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();

  // Transform scroll position to rotation angle
  // Rotate the teapot from 0 to -25 degrees as we scroll down
  const rotate = useTransform(scrollY, [0, 800], [0, 55]);

  return (
    <header
      ref={ref}
      className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90"
    >
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <motion.div style={{ rotate }}>
            <Teapot ariaHidden />
          </motion.div>
        </div>
      </div>
    </header>
  );
}

export default Header;
