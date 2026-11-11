"use client";

import { COM, COM_PHOTOS } from "../../_data/events";
import { HeartsDivider, Polaroid, eyebrow } from "./ui";

const icons = [
  <svg key="curry" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#CA4E26" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 11h16v2a8 8 0 0 1-16 0z" />
    <path d="M9 7c0-1 1-1 1-2s-1-1-1-2" />
    <path d="M14 7c0-1 1-1 1-2s-1-1-1-2" />
  </svg>,
  <svg key="salad" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#3F7A2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 12h18a9 9 0 0 1-18 0z" />
    <path d="M12 12c0-4 3-6 6-6-1 3-3 5-6 6z" />
    <path d="M10 12c-1-3-3-4-5-4 0 2 2 4 5 4z" />
  </svg>,
  <svg key="cookie" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#8A5A3B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="10" r="1" />
    <circle cx="14" cy="8.5" r="1" />
    <circle cx="15" cy="14" r="1" />
    <circle cx="10" cy="15" r="1" />
  </svg>,
];

export default function Community() {
  const P = COM_PHOTOS;
  return (
    <section
      id="community"
      className="mx-auto max-w-[1100px] px-6 pb-14 pt-[52px] lg:py-24"
    >
      <HeartsDivider
        left="#DCCDF7"
        right="#F7C6A8"
        className="mb-[26px] !max-w-none !px-0 lg:-mt-10 lg:mb-12"
      />

      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:items-center lg:justify-center lg:gap-10">
        <div className="gl-checker-sage -rotate-[1.5deg] rounded-[20px] p-5 lg:min-w-0 lg:max-w-[460px] lg:flex-[1_1_360px] lg:-rotate-2 lg:rounded-[22px] lg:p-7">
          <p className={`${eyebrow} !text-xs text-indigo lg:!text-sm`}>
            {COM.no} · {COM.kind} · {COM.tag}
          </p>
          <h3 className="m-0 mt-2 font-display text-[34px] font-normal leading-none tracking-[-0.02em] lg:mt-2.5 lg:text-[44px]">
            {COM.title}
          </h3>
          <p className="m-0 mt-2.5 text-base leading-[1.5] lg:mt-3 lg:text-lg">{COM.intro}</p>
          <div className="mt-4 flex flex-col gap-2 lg:mt-5 lg:gap-2.5">
            {COM.menu.map((m, i) => (
              <div
                key={m.dish}
                className="flex items-center gap-3.5 rounded-xl border-2 border-dashed border-ink px-3 py-2.5 lg:rounded-[14px] lg:px-3.5 lg:py-3"
              >
                <span className="hidden shrink-0 lg:block">{icons[i]}</span>
                <span className="block min-w-0">
                  <span className="block text-base font-bold lg:text-lg">{m.dish}</span>
                  <span className="mt-0.5 block text-sm text-[#5B5650] lg:text-[15px]">
                    {m.note}
                  </span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* phone: 2x2 polaroids, second column dropped a little */}
        <div className="mt-[34px] grid grid-cols-2 gap-x-5 gap-y-4 lg:hidden">
          <Polaroid group="com" index={3} photo={P[3]} rotate={-3} padClassName="p-2 pb-7" imgClassName="h-[190px]" captionClassName="text-[19px]" />
          <Polaroid group="com" index={0} photo={P[0]} rotate={3} className="mt-[22px]" padClassName="p-2 pb-7" imgClassName="h-[190px]" captionClassName="text-[19px]" />
          <Polaroid group="com" index={1} photo={P[1]} rotate={2} padClassName="p-2 pb-7" imgClassName="h-[150px]" captionClassName="text-[19px]" />
          <Polaroid group="com" index={2} photo={P[2]} rotate={-2} className="mt-[22px]" padClassName="p-2 pb-7" imgClassName="h-[150px]" captionClassName="text-[19px]" />
        </div>

        {/* desktop: loose pile */}
        <div className="relative hidden h-[680px] min-w-0 flex-[0_1_480px] lg:block">
          <Polaroid group="com" index={0} photo={P[0]} rotate={-5} className="absolute left-0 top-0 w-[240px]" imgClassName="h-[280px]" />
          <Polaroid group="com" index={1} photo={P[1]} rotate={5} className="absolute right-0 top-10 w-[220px]" imgClassName="h-[200px]" />
          <Polaroid group="com" index={2} photo={P[2]} rotate={2} className="absolute left-2.5 top-[330px] w-[230px]" imgClassName="h-[170px]" />
          <Polaroid group="com" index={3} photo={P[3]} rotate={-4} className="absolute right-0 top-[330px] w-[230px]" imgClassName="h-[270px]" />
        </div>
      </div>
    </section>
  );
}
