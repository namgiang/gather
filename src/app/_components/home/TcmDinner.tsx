"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { TCM, TCM_COURSES, TCM_PHOTOS } from "../../_data/events";
import { useLightbox } from "./Lightbox";
import { ExpandBadge, Polaroid, eyebrow } from "./ui";

export default function TcmDinner() {
  const [sel, setSel] = useState(0);
  const { open } = useLightbox();
  const course = TCM_COURSES[sel];
  const photo = TCM_PHOTOS[course.photo];

  const mainPhoto = (className: string, badge: boolean) => (
    <button
      type="button"
      onClick={() => open("tcm", course.photo)}
      aria-label={`View ${course.stage} photo larger`}
      className={`gl-pbtn relative w-full overflow-hidden border-2 border-ink bg-[#E9D2AE] shadow-[6px_8px_0_#1A1A1A] lg:shadow-[8px_10px_0_#1A1A1A] ${className}`}
    >
      <img
        key={course.n}
        src={photo.src}
        srcSet={`${photo.src} 800w, ${photo.full} 1600w`}
        sizes="(min-width: 1024px) 640px, 90vw"
        alt={photo.alt}
        className="gl-fade block size-full object-cover"
        style={{ objectPosition: photo.pos }}
      />
      {badge && <ExpandBadge />}
    </button>
  );

  return (
    <section id="tcm" className="mx-auto max-w-[1280px] px-0 pb-0 pt-8 lg:px-6 lg:pb-24 lg:pt-14">
      <div className="flex flex-col gap-14 lg:flex-row lg:items-start lg:gap-14">
        {/* text + picker */}
        <div className="flex min-w-0 flex-col gap-3.5 px-6 lg:flex-1 lg:basis-[380px] lg:gap-5 lg:px-0">
          <p className={`${eyebrow} text-cobalt`}>
            {TCM.no} · {TCM.kind} · {TCM.date}
          </p>
          <h3 className="m-0 font-display text-[38px] font-black leading-[.98] tracking-[-0.02em] lg:text-[clamp(44px,5.4vw,76px)] lg:leading-[.95]">
            {TCM.title}
          </h3>
          <p className="m-0 text-[17px] leading-[1.5] lg:text-xl">
            {TCM.intro} <strong>{TCM.introStrong}</strong>. {TCM.where}
          </p>

          {/* phone: the course photo sits between the intro and the picker */}
          <div className="mt-1 lg:hidden">
            {mainPhoto("h-80 rounded-[20px]", true)}
          </div>

          <p className="m-0 mt-1 text-xs font-bold uppercase tracking-[.1em] lg:mt-2 lg:text-[13px]">
            The menu · <span className="lg:hidden">tap</span>
            <span className="hidden lg:inline">pick</span> a course
          </p>
          <div
            role="group"
            aria-label="Courses"
            className="-mt-1 flex justify-between lg:-mt-1.5 lg:justify-start lg:gap-3.5"
          >
            {TCM_COURSES.map((c, i) => {
              const on = i === sel;
              return (
                <button
                  key={c.n}
                  type="button"
                  onClick={() => setSel(i)}
                  aria-pressed={on}
                  aria-label={c.stage}
                  className={`gl-plate size-[58px] cursor-pointer rounded-full border-[3px] border-ink p-0 font-display text-[17px] font-black lg:size-[76px] lg:text-[22px] ${
                    on
                      ? "bg-tomato text-white shadow-[0_6px_12px_rgba(60,40,20,.22)] lg:shadow-[0_8px_14px_rgba(60,40,20,.22)]"
                      : "bg-white text-ink"
                  }`}
                  style={{ translate: on ? "0 -3px" : "0 0" }}
                >
                  {c.n}
                </button>
              );
            })}
          </div>

          {/* All five cards share one grid cell, so the box is always as tall as the
              longest description and the content below never jumps when you switch. */}
          <div className="grid rounded-2xl border-2 border-ink bg-white p-[18px] lg:rounded-[18px] lg:px-6 lg:py-[22px]">
            {TCM_COURSES.map((c, i) => (
              <div
                key={c.n}
                aria-hidden={i !== sel}
                className={`[grid-area:1/1] ${i === sel ? "" : "invisible"}`}
              >
                <p className="m-0 text-xs font-bold uppercase tracking-[.1em] text-cobalt lg:text-[13px]">
                  {c.n} · {c.stage}
                </p>
                <p className="m-0 mt-1.5 font-display text-[22px] font-black leading-[1.15] lg:text-[28px] lg:leading-[1.1]">
                  {c.name}
                </p>
                <p className="m-0 mt-2 text-base leading-[1.5] lg:text-[17px]">{c.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-1.5 flex items-center gap-3 lg:mt-1 lg:gap-3.5">
            <span className="inline-block -rotate-8 rounded-[10px] border-[3px] border-tomato px-3 py-[5px] font-display text-lg font-black text-tomato lg:px-3.5 lg:py-1.5 lg:text-[22px]">
              SOLD OUT
            </span>
            <span className="font-hand text-[22px] lg:text-2xl">{TCM.guests}</span>
          </div>
        </div>

        {/* desktop collage */}
        <div className="relative hidden min-h-[760px] min-w-0 flex-[1.3_1_520px] lg:block">
          {mainPhoto("h-[440px] rotate-[1deg] rounded-[22px]", false)}
          <Polaroid
            group="tcm"
            index={6}
            photo={TCM_PHOTOS[6]}
            rotate={-5}
            className="absolute -left-[3%] top-[410px] w-[min(220px,36%)]"
            imgClassName="h-[200px]"
          />
          <Polaroid
            group="tcm"
            index={8}
            photo={TCM_PHOTOS[8]}
            rotate={3}
            className="absolute left-[35%] top-[470px] w-[min(200px,31%)]"
            imgClassName="h-[210px]"
          />
          <Polaroid
            group="tcm"
            index={9}
            photo={TCM_PHOTOS[9]}
            rotate={-3}
            className="absolute -right-[1%] top-[420px] w-[min(190px,29%)]"
            imgClassName="h-[190px]"
          />
        </div>
      </div>

      {/* phone: swipe strip of moments from the night */}
      <p className="m-0 mt-7 px-6 text-xs font-bold uppercase tracking-[.1em] lg:hidden">
        From the night
      </p>
      <div className="gl-strip !pb-12 lg:hidden">
        {[
          { i: 6, w: "w-[230px]", r: -3 },
          { i: 7, w: "w-[180px]", r: 2 },
          { i: 8, w: "w-[200px]", r: -2 },
          { i: 9, w: "w-[200px]", r: 3 },
        ].map(({ i, w, r }) => (
          <Polaroid
            key={i}
            group="tcm"
            index={i}
            photo={TCM_PHOTOS[i]}
            rotate={r}
            className={w}
          />
        ))}
      </div>
    </section>
  );
}
