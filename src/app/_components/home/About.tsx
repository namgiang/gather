/* eslint-disable @next/next/no-img-element */
import { Hearts } from "./ui";

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t-2 border-ink bg-lilac"
    >
      <img
        src="flower.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[70px] -right-[60px] size-[230px] object-cover opacity-[.85] mix-blend-multiply lg:-bottom-[120px] lg:-right-[70px] lg:size-[560px] lg:-rotate-12 lg:opacity-90"
      />
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-[18px] px-6 pb-[150px] pt-16 lg:gap-7 lg:py-28">
        <Hearts className="hidden lg:block" />
        <p className="m-0 text-[13px] font-bold uppercase tracking-[.1em] lg:text-sm">
          About Gather
        </p>
        <h2 className="m-0 max-w-[820px] font-display text-[40px] font-normal leading-none tracking-[-0.02em] lg:text-[clamp(44px,6vw,84px)]">
          We create dining experiences that connect people.
        </h2>
        <p className="m-0 max-w-[540px] text-[17px] leading-[1.5] lg:text-xl">
          Supper clubs, catering, a pot of curry for the neighbours. Old friends, new
          friends, the neighbours you&apos;ve never met: everyone gets a seat at our
          table.
        </p>
      </div>
    </section>
  );
}
