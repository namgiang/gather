const CHIPS = [
  { href: "#tcm", label: "01 · TCM dinner", bg: "bg-sky" },
  { href: "#goicuon", label: "02 · Gỏi cuốn", bg: "bg-white" },
  { href: "#community", label: "03 · Community", bg: "bg-pink-tint" },
];

export default function GatheringsIndex() {
  return (
    <section
      id="gatherings"
      className="mx-auto max-w-[1280px] border-t-2 border-ink pb-4 pt-6 lg:border-t-0 lg:px-6 lg:pb-6 lg:pt-4"
    >
      <div className="flex flex-col gap-0 lg:flex-row lg:items-end lg:justify-between lg:gap-6 lg:border-b-2 lg:border-ink lg:pb-5">
        <h2 className="m-0 px-6 font-display text-[52px] font-black leading-[.95] tracking-[-0.02em] text-balance lg:px-0 lg:text-[clamp(48px,7vw,96px)]">
          Past
          <br />
          gatherings
        </h2>
        <nav
          aria-label="Jump to a gathering"
          className="gl-strip !gap-2 !pb-2 !pt-[18px] lg:!flex-wrap lg:!gap-2.5 lg:!overflow-visible lg:!p-0"
        >
          {CHIPS.map((c) => (
            <a
              key={c.href}
              href={c.href}
              className={`gl-press gl-pill whitespace-nowrap rounded-[14px] border-2 border-ink px-3.5 py-3 text-[15px] font-bold no-underline lg:px-4 lg:text-base ${c.bg}`}
            >
              {c.label}
              <span className="hidden lg:inline"> ↓</span>
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
