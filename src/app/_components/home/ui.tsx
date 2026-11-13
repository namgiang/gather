"use client";

/* eslint-disable @next/next/no-img-element */
import type { CSSProperties, ReactNode } from "react";
import type { GroupKey, Photo } from "../../_data/events";
import { useLightbox } from "./Lightbox";

/** A button that opens the photo viewer on a given photo. */
export function PhotoButton({
  group,
  index,
  label,
  className = "",
  style,
  children,
}: {
  group: GroupKey;
  index: number;
  label: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}) {
  const { open } = useLightbox();
  return (
    <button
      type="button"
      onClick={() => open(group, index)}
      aria-label={`View photo larger: ${label}`}
      className={`gl-pbtn ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}

/** White-bordered photo with a handwritten caption. */
export function Polaroid({
  group,
  index,
  photo,
  className = "",
  rotate = 0,
  imgClassName = "h-[170px]",
  captionClassName = "text-[20px] lg:text-[22px]",
  padClassName = "p-[9px] pb-[30px] lg:p-2.5 lg:pb-[34px]",
  eager = false,
}: {
  group: GroupKey;
  index: number;
  photo: Photo;
  className?: string;
  rotate?: number;
  imgClassName?: string;
  captionClassName?: string;
  padClassName?: string;
  eager?: boolean;
}) {
  return (
    <PhotoButton
      group={group}
      index={index}
      label={photo.cap}
      className={`gl-pol bg-white shadow-[0_8px_18px_rgba(60,40,20,.16)] lg:shadow-[0_10px_24px_rgba(60,40,20,.16)] ${padClassName} ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <img
        src={photo.src}
        alt={photo.alt}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
        className={`block w-full object-cover ${imgClassName}`}
        style={{ objectPosition: photo.pos }}
      />
      <span
        className={`mt-1.5 block text-center font-hand lg:mt-2 ${captionClassName}`}
      >
        {photo.cap}
      </span>
    </PhotoButton>
  );
}

const HEART =
  "M14 26S2 18.4 2 10.2C2 6.2 5 3 8.8 3c2.2 0 4.1 1.1 5.2 2.9C15.1 4.1 17 3 19.2 3 23 3 26 6.2 26 10.2 26 18.4 14 26 14 26z";

/** Two hearts that lean in toward each other (hover on desktop, scroll on touch). */
export function Hearts({
  left = "#E0301E",
  right = "#0F66B8",
  className = "",
  width = 64,
}: {
  left?: string;
  right?: string;
  className?: string;
  width?: number;
}) {
  return (
    <svg
      className={`gl-hearts ${className}`}
      width={width}
      height={(width * 44) / 64}
      viewBox="0 0 64 44"
      aria-hidden="true"
    >
      <g className="hl">
        <path
          transform="translate(2 6) rotate(-14 14 14)"
          d={HEART}
          fill={left}
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      <g className="hr">
        <path
          transform="translate(34 6) rotate(14 14 14)"
          d={HEART}
          fill={right}
          stroke="#1A1A1A"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

/** Dashed line, two hearts, dashed line. */
export function HeartsDivider({
  left,
  right,
  className = "",
}: {
  left?: string;
  right?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={`gl-hearts mx-auto flex max-w-[1280px] items-center justify-center gap-3.5 px-6 lg:gap-5 ${className}`}
    >
      <Hearts left={left} right={right} width={56} className="lg:hidden" />
      <Hearts left={left} right={right} width={64} className="hidden lg:block" />
    </div>
  );
}

/** Small round "expand" affordance on big photos. */
export function ExpandBadge({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute right-3 top-3 grid size-9 place-items-center rounded-full border-2 border-ink bg-cream ${className}`}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#1A1A1A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
      </svg>
    </span>
  );
}

export const eyebrow =
  "m-0 text-[13px] font-bold uppercase tracking-[.1em] lg:text-sm";

export type Place = {
  left?: number | string;
  right?: number | string;
  top?: number | string;
  bottom?: number | string;
  /** width in px */
  w: number;
  /** rotation in degrees */
  rot?: number;
  /** mirror horizontally */
  flip?: boolean;
};

const styleFor = (p: Place): CSSProperties => ({
  position: "absolute",
  left: p.left,
  right: p.right,
  top: p.top,
  bottom: p.bottom,
  width: p.w,
  height: "auto",
  transform: `${p.flip ? "scaleX(-1) " : ""}rotate(${p.rot ?? 0}deg)`,
});

/**
 * A decorative die-cut sticker (banana leaf, lotus). Give it a phone placement
 * (`m`) and a desktop one (`d`). Put it inside a `relative isolate` parent: it
 * sits behind the content (-z-10) and is hidden from assistive tech.
 */
export function Sticker({
  src,
  m,
  d,
}: {
  src: string;
  m: Place;
  d?: Place;
}) {
  return (
    <>
      <img
        src={src}
        alt=""
        aria-hidden="true"
        decoding="async"
        className="gl-sticker max-w-none lg:hidden"
        style={styleFor(m)}
      />
      {d && (
        <img
          src={src}
          alt=""
          aria-hidden="true"
          decoding="async"
          className="gl-sticker hidden max-w-none lg:block"
          style={styleFor(d)}
        />
      )}
    </>
  );
}

/** Clips decorative stickers to their section so they never cause scrolling. */
export function StickerLayer({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {children}
    </div>
  );
}
