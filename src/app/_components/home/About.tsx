import { Hearts, Sticker, StickerLayer } from "./ui";

export default function About() {
  return (
    <section
      id="about"
      className="relative isolate overflow-clip border-t-2 border-ink bg-cobalt text-cream"
    >
      <StickerLayer>
        <Sticker
          src="leaves/leaf-bunch.webp"
          m={{ right: -6, bottom: -34, w: 215, rot: 10 }}
          d={{ right: "calc(50% - 610px)", top: "calc(50% - 309px)", w: 420, rot: 12 }}
        />
      </StickerLayer>
      <div className="relative mx-auto flex max-w-[1280px] flex-col gap-[18px] px-6 pb-[340px] pt-16 lg:gap-7 lg:pb-28 lg:pt-28">
        <Hearts left="#E0301E" right="#F6F1E7" className="hidden lg:block" />
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
