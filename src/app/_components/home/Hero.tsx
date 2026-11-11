"use client";

/* eslint-disable @next/next/no-img-element */
import { TCM_PHOTOS } from "../../_data/events";
import { PhotoButton } from "./ui";

const LETTERS: { c: string; t?: string }[] = [
  { c: "G", t: "rotate(-4deg)" },
  { c: "A", t: "translateY(4px)" },
  { c: "T", t: "rotate(3deg)" },
  { c: "H" },
  { c: "E", t: "rotate(-3deg) translateY(3px)" },
  { c: "R", t: "rotate(5deg)" },
];

export default function Hero() {
  const crew = TCM_PHOTOS[0];
  return (
    <section
      id="top"
      className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-[22px] lg:pb-24 lg:pt-8"
    >
      <h1
        aria-label="Gather"
        className="gl-hop m-0 select-none whitespace-nowrap text-center font-display text-[70px] font-normal leading-[.9] tracking-[-0.035em] md:text-[clamp(96px,13vw,184px)] md:tracking-[-0.03em]"
      >
        {LETTERS.map((l) => (
          <span key={l.c + (l.t ?? "")} aria-hidden="true" style={{ transform: l.t }}>
            {l.c}
          </span>
        ))}
      </h1>

      {/* desktop: promise + CTAs before the photo */}
      <p className="mx-auto mt-7 hidden max-w-[640px] text-center text-[clamp(19px,2vw,23px)] font-medium leading-[1.45] lg:block">
        Chosen-family dinners, big pots and extra chairs. We cook for supper clubs,
        fairs and neighbourhoods across Amsterdam. Come as you are, bring who you love.
      </p>
      <div className="mt-[26px] hidden flex-wrap justify-center gap-4 lg:flex">
        <a
          href="#book"
          className="gl-pill rounded-full border-2 border-ink bg-tomato px-6 py-[15px] text-[17px] font-bold text-white shadow-[4px_4px_0_#1A1A1A]"
        >
          Book us to cook
        </a>
        <a
          href="#gatherings"
          className="gl-pill rounded-full border-2 border-ink bg-white px-6 py-[15px] text-[17px] font-bold"
        >
          See past gatherings ↓
        </a>
      </div>

      <div className="relative mx-auto mt-[60px] max-w-[1100px] lg:mt-14">
        <div className="gl-checker-blue -rotate-[1.5deg] rounded-[22px] lg:-rotate-[1.2deg] lg:rounded-[28px]">
          <PhotoButton
            group="tcm"
            index={0}
            label="the crew with guests"
            className="w-full rounded-[10px] lg:rounded-xl"
          >
            <img
              src={crew.src}
              srcSet={`${crew.src} 800w, ${crew.full} 1600w`}
              sizes="(min-width: 1280px) 1060px, 90vw"
              alt={crew.alt}
              loading="eager"
              className="block h-[300px] w-full rounded-[10px] object-cover lg:h-[clamp(320px,42vw,540px)] lg:rounded-xl"
              style={{ objectPosition: "50% 41%" }}
            />
          </PhotoButton>
        </div>

        {/* the one loop: a slow spinning sticker */}
        <div className="absolute -right-3.5 -top-10 size-[108px] lg:-right-[18px] lg:-top-[54px] lg:size-[168px]">
          <svg
            className="gl-spin size-full"
            viewBox="0 0 200 200"
            role="img"
            aria-label="Dinners, catering, chosen family"
          >
            <defs>
              <path id="gl-circ" d="M100,100 m-74,0 a74,74 0 1,1 148,0 a74,74 0 1,1 -148,0" />
            </defs>
            <circle cx="100" cy="100" r="98" fill="#D86A85" />
            <text fontFamily="var(--font-archivo-black), sans-serif" fontSize="16.5" letterSpacing="2" fill="#FFF7ED">
              <textPath href="#gl-circ">DINNERS ✶ CATERING ✶ CHOSEN FAMILY ✶</textPath>
            </text>
          </svg>
          <img
            src="flower.png"
            alt=""
            aria-hidden="true"
            className="absolute left-[22px] top-[19px] size-16 scale-[1.9] object-cover lg:left-[34px] lg:top-[30px] lg:size-[100px]"
          />
        </div>

        {/* a sticky note that stays put */}
        <div className="absolute -bottom-[34px] -left-2.5 w-[170px] -rotate-6 bg-lilac px-3.5 pb-3.5 pt-3 font-hand text-[22px] leading-[1.05] shadow-[0_8px_18px_rgba(60,40,20,.18)] lg:-bottom-10 lg:-left-3 lg:w-[230px] lg:px-5 lg:pb-[22px] lg:pt-[18px] lg:text-[28px] lg:shadow-[0_10px_24px_rgba(60,40,20,.18)]">
          3 gatherings so far,
          <br />
          everyone gets a seat ♡
        </div>
      </div>

      {/* phone: promise + link after the photo */}
      <p className="mt-[62px] text-center text-[19px] font-medium leading-[1.45] lg:hidden">
        Chosen-family dinners, big pots and extra chairs. Come as you are, bring who you love.
      </p>
      <div className="mt-3 flex justify-center lg:hidden">
        <a
          href="#gatherings"
          className="gl-press inline-block px-1.5 py-3 text-[17px] font-bold underline decoration-2 underline-offset-[5px]"
        >
          See what we&apos;ve cooked ↓
        </a>
      </div>
    </section>
  );
}
