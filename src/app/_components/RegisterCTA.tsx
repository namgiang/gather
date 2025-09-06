import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

function RegisterCTA() {
  const reduce = useReducedMotion();
  const wave = [
    "M1 5 C10 1, 20 9, 30 5 S50 1, 70 5 90 9, 99 5",
    "M1 5 C10 3, 20 7, 30 5 S50 7, 70 5 90 3, 99 5",
    "M1 5 C10 2, 20 8, 30 5 S50 2, 70 5 90 8, 99 5",
  ];
  const [hovered, setHovered] = useState(false);
  return (
    <motion.a
      href="#register"
      className="relative inline-block font-semibold text-lg md:text-xl text-[#D86A85] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D86A85] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FBE9CE]"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.span
        className="relative z-10 block origin-bottom"
        animate={hovered && !reduce ? { scale: 1.05 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 18 }}
      >
        REGISTER HERE
      </motion.span>
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
              : hovered
              ? { d: wave as unknown as string } // keyframes cast for TS
              : { d: wave[0] }
          }
          transition={
            reduce
              ? undefined
              : hovered
              ? {
                  duration: 1.4,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                }
              : { duration: 0.2 }
          }
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          className="text-[#D86A85]"
        />
      </svg>
    </motion.a>
  );
}

export default RegisterCTA;
