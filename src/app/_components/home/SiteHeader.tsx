/* eslint-disable @next/next/no-img-element */
export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-20 border-b-2 border-ink bg-cream">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-2.5 md:px-6 md:py-3.5">
        <a href="#top" aria-label="Gather home" className="block leading-[0]">
          <img src="logo.svg" alt="Gather" className="h-[30px] w-auto md:h-9" />
        </a>
        <nav aria-label="Primary" className="flex items-center gap-2">
          <a
            href="#gatherings"
            className="gl-pill hidden rounded-full border-2 border-ink bg-white px-4 py-2.5 text-[15px] font-bold sm:block"
          >
            Gatherings
          </a>
          <a
            href="#about"
            className="gl-pill hidden rounded-full border-2 border-ink bg-white px-4 py-2.5 text-[15px] font-bold sm:block"
          >
            About
          </a>
          <a
            href="#book"
            className="gl-pill gl-press rounded-full border-2 border-ink bg-tomato px-[18px] py-[11px] text-[15px] font-bold text-white md:py-2.5"
          >
            Book us
          </a>
        </nav>
      </div>
    </header>
  );
}
