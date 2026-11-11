"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { GOI, GOI_PHOTOS, PROTEINS } from "../../_data/events";
import { useLightbox } from "./Lightbox";
import { ExpandBadge, PhotoButton, eyebrow } from "./ui";

const thumb =
  "block w-full rounded-[14px] border-2 border-ink object-cover box-border lg:rounded-2xl";

export default function GoiCuon() {
  const [prot, setProt] = useState(0);
  const { open } = useLightbox();
  const p = PROTEINS[prot];
  const cut = GOI_PHOTOS[0];

  const zoomPhoto = (className: string) => (
    <button
      type="button"
      onClick={() => open("goi", 0)}
      aria-label="View the cut-open rolls larger"
      className={`gl-pbtn relative w-full overflow-hidden rounded-[22px] border-2 border-ink bg-[#E9D2AE] shadow-[6px_8px_0_#1A1A1A] lg:rounded-3xl lg:shadow-[8px_10px_0_#1A1A1A] ${className}`}
    >
      <img
        src={cut.full}
        alt={cut.alt}
        className="gl-zoom absolute left-0 top-0 block h-auto w-[165%] max-w-none"
        style={{ transform: `translate(${p.x}%, ${p.y}%)` }}
      />
      <span className="absolute bottom-3 left-3 rounded-full border-2 border-ink bg-cream px-[11px] py-1.5 text-[13px] font-bold lg:bottom-3.5 lg:left-3.5 lg:px-3 lg:text-sm">
        {p.name}
      </span>
      <ExpandBadge className="lg:hidden" />
    </button>
  );

  const rolledWith = (
    <p className="m-0 text-[15px] leading-[1.5] lg:text-base">
      <strong>Rolled with</strong> {GOI.rolledWith}
    </p>
  );

  return (
    <section
      id="goicuon"
      className="border-y-2 border-ink bg-peach"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-3.5 px-6 pb-12 pt-11 lg:flex-row lg:flex-wrap lg:items-center lg:gap-12 lg:py-24">
        {/* text + picker */}
        <div className="flex min-w-0 flex-col gap-3.5 lg:flex-1 lg:basis-[380px] lg:gap-[18px]">
          <p className={`${eyebrow} text-[#8A2E12]`}>
            {GOI.no} · {GOI.kind} · {GOI.place}
          </p>
          <h3 className="m-0 font-display text-[40px] font-normal leading-[.95] tracking-[-0.02em] lg:text-[clamp(40px,5vw,68px)]">
            {GOI.title}
          </h3>
          <p className="m-0 text-[17px] leading-[1.5] lg:text-[19px]">{GOI.intro}</p>
          <p className="m-0 mt-1.5 text-xs font-bold uppercase tracking-[.1em] lg:mt-2 lg:text-[13px]">
            Choose a protein
          </p>
          <div
            role="group"
            aria-label="Choose a protein"
            className="-mt-1 flex flex-wrap gap-1.5 lg:-mt-1.5 lg:gap-2.5"
          >
            {PROTEINS.map((pr, i) => {
              const on = i === prot;
              return (
                <button
                  key={pr.name}
                  type="button"
                  onClick={() => setProt(i)}
                  aria-pressed={on}
                  className={`gl-press gl-pick cursor-pointer whitespace-nowrap rounded-full border-2 border-ink px-2.5 py-2.5 text-[13.5px] font-bold lg:px-[18px] lg:py-[13px] lg:text-[17px] ${
                    on
                      ? "bg-tomato text-white shadow-[3px_3px_0_#1A1A1A]"
                      : "bg-cream text-ink"
                  }`}
                >
                  {pr.name}
                </button>
              );
            })}
          </div>

          {/* phone: photo, then what's inside, then three more photos */}
          <div className="mt-1.5 lg:hidden">{zoomPhoto("aspect-[342/400] max-w-[420px]")}</div>
          <div className="mt-3.5 lg:hidden">{rolledWith}</div>
          <div className="mt-1 grid grid-cols-3 gap-2.5 lg:hidden">
            {[1, 2, 3].map((i) => (
              <PhotoButton
                key={i}
                group="goi"
                index={i}
                label={GOI_PHOTOS[i].cap}
                className="rounded-[14px]"
              >
                <img
                  src={GOI_PHOTOS[i].src}
                  alt={GOI_PHOTOS[i].alt}
                  loading="lazy"
                  className={`${thumb} h-[130px]`}
                  style={{ objectPosition: GOI_PHOTOS[i].pos }}
                />
              </PhotoButton>
            ))}
          </div>

          <div className="hidden lg:block">{rolledWith}</div>
        </div>

        {/* desktop: big photo + a column of three */}
        <div className="hidden min-w-0 flex-[1.3_1_480px] flex-wrap items-start gap-6 lg:flex">
          <div className="w-full max-w-[360px] flex-[0_1_360px]">
            {zoomPhoto("aspect-[360/460]")}
          </div>
          <div className="flex min-w-0 flex-[1_1_150px] flex-col gap-3.5">
            {[1, 2, 3].map((i) => (
              <PhotoButton
                key={i}
                group="goi"
                index={i}
                label={GOI_PHOTOS[i].cap}
                className="gl-pol w-full rounded-2xl"
              >
                <img
                  src={GOI_PHOTOS[i].src}
                  alt={GOI_PHOTOS[i].alt}
                  loading="lazy"
                  className={`${thumb} h-36`}
                  style={{ objectPosition: GOI_PHOTOS[i].pos }}
                />
              </PhotoButton>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
