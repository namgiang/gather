"use client";

import React, { useMemo, useRef, useState } from "react";
import {
  motion,
  MotionConfig,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import Hero from "./_components/Hero";
import Header from "./_components/Header";
import FirstCourse from "./_components/FirstCourse";

// Single-file Next.js route component
// Drop this into app/page.tsx (or app/tcm-autumn/page.tsx)
export default function Page() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <MotionConfig reducedMotion={prefersReducedMotion ? "always" : "user"}>
      <main className="min-h-screen bg-white text-stone-900 antialiased relative">
        <Header />
        <Hero />
        <FirstCourse />
      </main>
    </MotionConfig>
  );
}

// function MenuTeaser() {
//   return (
//     <section
//       id="menu"
//       aria-labelledby="menutitle"
//       className="bg-stone-900 text-white"
//     >
//       <div className="mx-auto max-w-6xl px-4 py-16">
//         <h2
//           id="menutitle"
//           className="text-2xl md:text-3xl font-semibold tracking-tight"
//         >
//           Menu teaser
//         </h2>
//         <p className="mt-2 text-stone-300 max-w-prose">
//           A light, seasonal plate to breathe with autumn.
//         </p>
//         <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
//           {[
//             {
//               title: "Lotus & Tremella Broth",
//               desc: "Clear chicken broth, lotus root, tremella, goji — sesame finish",
//             },
//             {
//               title: "Ginger‑Pear Salad",
//               desc: "Poached pear, daikon ribbons, shiso, toasted sesame",
//             },
//             {
//               title: "Leek & Tofu Bowl",
//               desc: "Warm rice, seared tofu, leek oil, cinnamon salt",
//             },
//           ].map((m) => (
//             <article
//               key={m.title}
//               className="rounded-2xl bg-white/5 border border-white/10 p-5"
//               aria-labelledby={`m-${m.title}`}
//             >
//               <h3 id={`m-${m.title}`} className="font-medium">
//                 {m.title}
//               </h3>
//               <p className="text-sm text-stone-200 mt-1">{m.desc}</p>
//             </article>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
