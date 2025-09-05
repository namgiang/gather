"use client";

import Header from "./_components/Header";
import CurrentEvent from "./_components/CurrentEvent";
import { useEffect, useRef } from "react";

export default function Home() {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const rootStyles = getComputedStyle(document.documentElement);
    const easing =
      rootStyles.getPropertyValue("--ease-out-cubic").trim() ||
      "cubic-bezier(0.215, 0.61, 0.355, 1)";

    if (prefersReduced) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }

    el.animate(
      [
        {
          opacity: 0,
          transform: "translateY(24px) rotate(-6deg)",
          transformOrigin: "bottom right",
        },
        {
          opacity: 1,
          transform: "translateY(0) rotate(0deg)",
          transformOrigin: "bottom right",
        },
      ],
      { duration: 300, easing, fill: "forwards" }
    );
  }, []);

  return (
    <>
      <Header />
      <main
        id="main-content"
        className="min-h-screen bg-white px-4 text-stone-900 antialiased relative"
      >
        <h1
          ref={headingRef}
          className="font-archivo-black text-[3.8rem] md:text-[6rem] lg:text-[7rem] my-6 md:my-0 text-center font-extrabold tracking-tight md:leading-[105%] opacity-0 overflow-hidden"
          style={{
            transform: "translateY(32px) rotate(6deg)",
            transformOrigin: "bottom right",
          }}
        >
          GATHER
        </h1>
        <CurrentEvent />

        {/* Demo sections to scroll to */}
        {/* <section id="studio" className="mx-auto max-w-6xl px-4 py-24">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight">
            Studio
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            We are Gather — a studio focused on thoughtful design and meaningful
            experiences.
          </p>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-4 py-24">
          <h2 className="text-4xl font-extrabold uppercase tracking-tight">
            Work
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-stone-600">
            Selected projects and collaborations. More coming soon.
          </p>
        </section> */}
      </main>
    </>
  );
}
