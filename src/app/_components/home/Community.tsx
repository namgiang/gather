"use client";

import { COM, COM_PHOTOS } from "../../_data/events";
import { Hearts, Polaroid, Sticker, StickerLayer, eyebrow } from "./ui";

const icons = [
  <svg key="curry" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#E0301E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 11h16v2a8 8 0 0 1-16 0z" />
    <path d="M9 7c0-1 1-1 1-2s-1-1-1-2" />
    <path d="M14 7c0-1 1-1 1-2s-1-1-1-2" />
  </svg>,
  <svg key="salad" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0F66B8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
    <div className="relative isolate overflow-clip">
      <StickerLayer>
        <Sticker
          src="leaves/lotus-c.webp"
          m={{ left: -10, top: 22, w: 150, rot: -8, flip: true }}
        />
        <Sticker
          src="leaves/lotus-c.webp"
          m={{ right: 8, bottom: 6, w: 170, rot: 7 }}
        />
      </StickerLayer>
      <div aria-hidden="true" className="absolute inset-x-0 bottom-8 flex justify-start pl-[60px] lg:bottom-11 lg:justify-center lg:pl-0">
        <Hearts left="#E0301E" right="#0F66B8" width={64} />
      </div>
    <section
      id="community"
      className="relative mx-auto max-w-[1280px] px-6 pb-[130px] pt-[96px] lg:pb-32 lg:pt-36"
    >
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:flex-nowrap lg:items-center lg:justify-between lg:gap-10">
        <div className="gl-checker-sky relative -rotate-[1.5deg] rounded-[20px] p-5 lg:min-w-0 lg:max-w-[520px] lg:flex-[1_1_380px] lg:-rotate-2 lg:rounded-[22px] lg:p-7">
          {/* desktop: the lotus is pressed onto the card's corner */}
          <img
            src="leaves/lotus-c.webp"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="gl-sticker pointer-events-none absolute -right-[92px] -top-[118px] hidden w-[230px] max-w-none rotate-[10deg] lg:block"
          />
          <p className={`${eyebrow} !text-xs text-cobalt lg:!text-sm`}>
            {COM.no} · {COM.kind} · {COM.tag}
          </p>
          <h3 className="m-0 mt-2 font-display text-[34px] font-black leading-none tracking-[-0.02em] lg:mt-2.5 lg:text-[44px]">
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
        <div className="relative hidden h-[700px] min-w-0 flex-[1_1_480px] lg:block lg:max-w-[640px]">
          <Polaroid group="com" index={0} photo={P[0]} rotate={-5} className="absolute left-0 top-0 w-[50%]" imgClassName="h-[300px]" />
          <Polaroid group="com" index={1} photo={P[1]} rotate={5} className="absolute right-0 top-10 w-[46%]" imgClassName="h-[230px]" />
          <Polaroid group="com" index={2} photo={P[2]} rotate={2} className="absolute left-[2%] top-[360px] w-[48%]" imgClassName="h-[220px]" />
          <Polaroid group="com" index={3} photo={P[3]} rotate={-4} className="absolute right-0 top-[340px] w-[48%]" imgClassName="h-[260px]" />
        </div>
      </div>
    </section>
    </div>
  );
}
