import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

function RegisterCTA() {
  const reduce = useReducedMotion();
  // Wave path keyframes (same segment counts for morphing)
  const wave: string[] = [
    "M1 5 C10 1, 20 9, 30 5 S50 1, 70 5 90 9, 99 5",
    "M1 5 C10 3, 20 7, 30 5 S50 7, 70 5 90 3, 99 5",
    "M1 5 C10 2, 20 8, 30 5 S50 2, 70 5 90 8, 99 5",
  ];
  const [hovered, setHovered] = useState(false);
  const [canHover, setCanHover] = useState(true);

  // Detect if the device actually supports hover (most touch devices do not)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
      const update = () => setCanHover(mq.matches);
      update();
      if (mq.addEventListener) mq.addEventListener("change", update);
      else mq.addListener(update); // older Safari
      return () => {
        if (mq.removeEventListener) mq.removeEventListener("change", update);
        else mq.removeListener(update);
      };
    }
  }, []);
  return (
    <motion.a
      href="https://docs.google.com/forms/d/e/1FAIpQLSf_3akuxvEW4Dg5lvfkxFsVZnmRFlyFgHEAQ4CJnnoSxqwlww/viewform?usp=dialog"
      className="relative inline-block font-semibold text-lg md:text-xl text-[#D86A85] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D86A85] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBE9CE]"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      whileHover={!reduce ? { scale: 1.05 } : undefined}
      whileFocus={!reduce ? { scale: 1.05 } : undefined}
      whileTap={!reduce ? { scale: 1.04 } : undefined}
    >
      <span className="relative z-10 block origin-bottom">REGISTER HERE</span>
      <svg
        aria-hidden
        className="absolute left-0 right-0 -bottom-1 h-2 w-full"
        viewBox="0 0 100 8"
        preserveAspectRatio="none"
      >
        <motion.path
          d={wave[0]}
          animate={
            reduce
              ? { d: wave[0] }
              : canHover
              ? hovered
                ? { d: wave }
                : { d: wave[0] }
              : { d: wave } // always animate on touch (no hover)
          }
          transition={
            reduce
              ? undefined
              : canHover
              ? hovered
                ? {
                    duration: 1.4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  }
                : { duration: 0.2 }
              : {
                  duration: 1.8,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
          }
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="text-[#D86A85]"
          style={{ willChange: "d" }}
        />
      </svg>
    </motion.a>
  );
}

export default RegisterCTA;
