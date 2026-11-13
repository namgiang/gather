import { Hearts } from "./ui";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-clip border-t-2 border-ink bg-cobalt text-cream"
    >
      {/* Swap the photo by replacing public/cooking/about-polaroid.jpg (any size; it is cropped square). */}
      <figure className="absolute bottom-10 right-6 m-0 w-[210px] rotate-3 bg-white p-2.5 pb-9 shadow-[0_10px_24px_rgba(8,40,80,.35)] lg:bottom-auto lg:right-[calc(50%-540px)] lg:top-1/2 lg:w-[340px] lg:-translate-y-1/2 lg:p-3.5 lg:pb-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="cooking/about-polaroid.jpg"
          alt="The Gather crew in the kitchen"
          loading="lazy"
          decoding="async"
          className="block aspect-square w-full object-cover"
        />
        <figcaption className="mt-2 text-center font-hand text-[20px] leading-none text-ink lg:mt-3 lg:text-[28px]">
          the crew, mid-service
        </figcaption>
      </figure>
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-[18px] px-6 pb-[330px] pt-16 lg:gap-7 lg:pb-28 lg:pt-28">
        <Hearts left="#E0301E" right="#F6F1E7" className="hidden lg:block" />
        <p className="m-0 text-[13px] font-bold uppercase tracking-[.1em] lg:text-sm">
          About Gather
        </p>
        <h2 className="m-0 max-w-[820px] font-display text-[40px] font-black leading-none tracking-[-0.02em] text-balance lg:text-[clamp(44px,6vw,84px)]">
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
