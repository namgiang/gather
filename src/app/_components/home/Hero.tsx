"use client";

/* eslint-disable @next/next/no-img-element */
import { TCM_PHOTOS } from "../../_data/events";
import { PhotoButton } from "./ui";

const LETTERS: { c: string; t?: string; accent?: boolean }[] = [
  { c: "G", t: "rotate(-4deg)" },
  { c: "A", t: "translateY(4px)", accent: true },
  { c: "T", t: "rotate(3deg)" },
  { c: "H" },
  { c: "E", t: "rotate(-3deg) translateY(3px)" },
  { c: "R", t: "rotate(5deg)" },
];

export default function Hero() {
  const crew = TCM_PHOTOS[0];
  return (
    <div className="gl-gingham relative isolate -mt-[70px] overflow-clip md:-mt-[76px] lg:border-b-2 lg:border-ink">
    <section
      id="top"
      className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-[92px] md:pt-[98px] lg:pb-24 lg:pt-[108px]"
    >
      <h1
        aria-label="Gather"
        className="gl-hop font-archivo-black m-0 select-none whitespace-nowrap text-balance text-center text-[70px] leading-[.9] tracking-[-0.035em] md:text-[clamp(96px,11vw,150px)] md:tracking-[-0.03em]"
      >
        {LETTERS.map((l) => (
          <span
            key={l.c + (l.t ?? "")}
            aria-hidden="true"
            className={l.accent ? "text-tomato" : undefined}
            style={l.t ? ({ "--t": l.t } as React.CSSProperties) : undefined}
          >
            {l.c}
          </span>
        ))}
      </h1>

      {/* desktop: promise + CTAs before the photo */}
      <Promise className="mt-10 hidden lg:block" />
      <div className="mt-[26px] hidden flex-wrap justify-center gap-4 lg:flex">
        <PrimaryCta />
        <SecondaryCta />
      </div>

      <div className="relative mx-auto mt-[58px] max-w-[1100px] lg:mt-14">
        <div className="-rotate-[1.5deg] rounded-[22px] border-2 border-ink bg-white p-2.5 shadow-[6px_8px_0_#1A1A1A] lg:-rotate-[1.2deg] lg:rounded-[28px] lg:p-3.5 lg:shadow-[10px_12px_0_#1A1A1A]">
          <PhotoButton
            group="tcm"
            index={0}
            label="the crew with guests"
            className="w-full overflow-hidden rounded-[10px] lg:rounded-xl"
          >
            <img
              src={crew.src}
              srcSet={`${crew.src} 800w, ${crew.full} 1600w`}
              sizes="(min-width: 1280px) 1060px, 90vw"
              alt={crew.alt}
              loading="eager"
              className="block h-[210px] w-full origin-[72%_6%] scale-[1.2] rounded-[10px] object-cover lg:scale-100 lg:h-[clamp(320px,42vw,540px)] lg:rounded-xl"
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
            <circle cx="100" cy="100" r="98" fill="#E0301E" />
            <text fontFamily="var(--font-archivo-black), sans-serif" fontSize="16.5" letterSpacing="2" fill="#F6F1E7">
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
        <div className="absolute -bottom-[52px] -left-2.5 w-[200px] -rotate-6 bg-white px-3.5 pb-3.5 pt-3 font-hand text-cobalt text-[21px] leading-[1.05] shadow-[0_8px_18px_rgba(60,40,20,.18)] lg:-bottom-10 lg:-left-3 lg:w-[230px] lg:px-5 lg:pb-[22px] lg:pt-[18px] lg:text-[28px] lg:shadow-[0_10px_24px_rgba(60,40,20,.18)]">
          3 gatherings so far,
          <br />
          everyone gets a seat ♡
        </div>
      </div>

      {/* phone: promise + CTAs after the photo */}
      <Promise short className="mt-[84px] lg:hidden" />
      <div className="mt-5 flex flex-col items-center gap-3 lg:hidden">
        <PrimaryCta />
        <SecondaryCta />
      </div>
    </section>
    </div>
  );
}

function Promise({ className = "", short = false }: { className?: string; short?: boolean }) {
  return (
    <p
      className={`relative mx-auto max-w-[740px] -rotate-[0.6deg] rounded-[20px] border-2 border-ink bg-cream px-5 py-[14px] text-center text-[16px] font-medium leading-[1.4] lg:rounded-[22px] lg:px-8 lg:py-[22px] lg:text-[clamp(19px,2vw,23px)] ${className}`}
    >
      {short ? (
        <>
          A community food collective in Amsterdam. We cook TCM dinners, street food and
          Iftar dinners. Come as you are, bring who you love.
        </>
      ) : (
        <>
          A community food collective in Amsterdam. We cook everything from TCM dinners
          and street food snacks to Iftar dinners, and bring people together over good
          food and stories. Come as you are, bring who you love.
        </>
      )}
    </p>
  );
}

function PrimaryCta() {
  return (
    <a
      href="#book"
      className="gl-pill gl-press rounded-full border-2 border-ink bg-tomato px-6 py-[15px] text-[17px] font-bold text-white shadow-[4px_4px_0_#1A1A1A]"
    >
      Plan a dinner with us
    </a>
  );
}

function SecondaryCta() {
  return (
    <a
      href="#gatherings"
      className="gl-pill gl-press rounded-full border-2 border-ink bg-white px-6 py-[15px] text-[17px] font-bold"
    >
      See past gatherings ↓
    </a>
  );
}
