"use client";

import { useEffect, useRef } from "react";
import RegisterCTA from "./RegisterCTA";
import { durationMedium } from "../constants";
export default function CurrentEvent() {
  const pictureRef = useRef<HTMLElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const imgEl = pictureRef.current;
    const card = boxRef.current;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Retrieve global easing variable (fallback to hard-coded value if missing)
    const rootStyles = getComputedStyle(document.documentElement);
    const easeOutCubic =
      rootStyles.getPropertyValue("--ease-out-cubic").trim() ||
      "cubic-bezier(0.215, 0.61, 0.355, 1)";

    if (prefersReduced) {
      if (imgEl) {
        imgEl.style.opacity = "1";
        imgEl.style.transform = "translateY(0)";
      }
      if (card) {
        card.style.opacity = "1";
        card.style.transform = "rotate(0deg) scale(1)";
      }
      return; // Skip animations entirely
    }

    if (imgEl && window.matchMedia("(min-width: 480px)").matches) {
      imgEl.animate(
        [
          { opacity: 0, transform: "translateY(24px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        { duration: durationMedium, easing: easeOutCubic, fill: "forwards" }
      );
    }

    if (card) {
      card.animate(
        [
          { opacity: 0, transform: "rotate(-16deg) scale(0.9)" },
          { opacity: 1, transform: "rotate(0deg) scale(1)" },
        ],
        { duration: durationMedium, easing: easeOutCubic, fill: "forwards" }
      );
    }
  }, []);

  return (
    <section id="current-event" className="relative">
      <div className="sm:absolute inset-0 z-10 grid place-items-center pointer-events-none">
        <div
          ref={boxRef}
          className="pointer-events-auto w-full max-w-[400px] sm:w-[min(34vw,360px)] sm:min-w-[320px] p-6 sm:p-8 md:p-10 text-[#1A1A1A]"
          style={{
            border: "20px solid transparent",
            borderRadius: "20px",
            background:
              "linear-gradient(#FFF7ED,#FFF7ED) padding-box, conic-gradient(#9CB2F0 25%, #E7EBD9 0 50%, #9CB2F0 0 75%, #E7EBD9 0) 0 0/20px 20px round border-box",
            opacity: 0,
            transform: "rotate(20deg) scale(0.94)",
          }}
        >
          <h2 className="text-3xl sm:text-4xl font-archivo-black leading-tight">
            TCM Dinner
          </h2>
          {/* <p className="mt-1 italic md:text-md text-[#3F51B5]">T•C•M</p> */}
          <p className="italic md:text-md text-[#3F51B5]">
            4-course menu inspired by Traditional Chinese Medicine and{" "}
            <span className="font-semibold">food as a medicine</span>
          </p>
          <ul className="mt-6 space-y-2 text-lg">
            <li>
              <span className="font-semibold">When:</span> October 6th 2025,
              18:30 - 22:00
            </li>
            <li>
              <span className="font-semibold">Where:</span> Bonjour Càphê,
              Moermanskkade 4, Amsterdam
            </li>
          </ul>
          <div className="mt-6">
            <RegisterCTA />
          </div>
        </div>
      </div>
      <div className="relative min-h-[75svh] lg:min-h-[80svh] isolate overflow-hidden flex items-end hidden sm:block rounded-[20px]">
        <picture
          ref={pictureRef}
          className="pointer-events-none absolute inset-0"
          style={{ opacity: 0, transform: "translateY(24px)" }}
        >
          <source
            media="(min-width: 1280px)"
            srcSet="tcm-table-illus-2048.jpg"
          />
          <source
            media="(min-width: 1024px)"
            srcSet="tcm-table-illus-1536.jpg"
          />
          <source
            media="(min-width: 640px)"
            srcSet="tcm-table-illus-1024.jpg"
          />
          <img
            src="tcm-table-illus-768.jpg"
            srcSet="tcm-table-illus-480.jpg 480w, tcm-table-illus-768.jpg 768w, tcm-table-illus-1024.jpg 1024w, tcm-table-illus-1536.jpg 1536w, tcm-table-illus-2048.jpg 2048w"
            sizes="100vw"
            alt=""
            aria-hidden="true"
            loading="eager"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </picture>
        <div className="relative w-full mx-auto max-w-6xl px-4 py-16" />
      </div>
    </section>
  );
}
