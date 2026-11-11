import { CONTACT, QUOTES } from "../../_data/events";
import { Hearts } from "./ui";

const NOTE_COLORS = ["bg-butter", "bg-lilac"];

export default function Book() {
  const hasQuotes = QUOTES.length > 0;
  return (
    <section id="book" className="border-t-2 border-ink bg-white">
      <div className="mx-auto flex max-w-[1180px] flex-col gap-14 px-6 pb-[60px] pt-[52px] lg:flex-row lg:flex-wrap lg:items-center lg:gap-14 lg:py-24">
        <div className="flex min-w-0 flex-col gap-3.5 lg:flex-[1.2_1_420px] lg:gap-5">
          <h2 className="m-0 font-display text-[42px] font-normal leading-[.95] tracking-[-0.02em] lg:text-[clamp(44px,5.6vw,76px)]">
            Want Gather at your table?
          </h2>
          <p className="m-0 max-w-[520px] text-[17px] leading-[1.5] lg:text-xl">
            A supper club, catering for your fair or office, a pot of curry for your
            street. Tell us what you&apos;re planning
            <span className="hidden lg:inline"> and we&apos;ll cook something people talk about</span>.
          </p>
          <div className="mt-[22px] flex flex-col gap-4 lg:mt-1 lg:flex-row lg:flex-wrap">
            <a
              href={`mailto:${CONTACT.email}?subject=Cooking%20for%20our%20event`}
              className="gl-pill gl-press rounded-full border-2 border-ink bg-tomato px-5 py-[15px] text-center text-[17px] font-bold text-white shadow-[4px_4px_0_#1A1A1A] lg:px-6"
            >
              Book us to cook →
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="gl-pill gl-press rounded-full border-2 border-ink bg-cream px-5 py-[15px] text-center text-[17px] font-bold lg:px-6"
            >
              Follow on Instagram for the next dinner
            </a>
          </div>
        </div>

        {hasQuotes ? (
          <div className="flex flex-col gap-[18px] lg:relative lg:block lg:h-[370px] lg:min-w-0 lg:flex-[1_1_340px]">
            {QUOTES.slice(0, 2).map((q, i) => (
              <figure
                key={q.who}
                className={`m-0 p-3.5 pb-4 shadow-[0_8px_18px_rgba(60,40,20,.16)] lg:absolute lg:w-[250px] lg:px-[22px] lg:pb-6 lg:pt-5 lg:shadow-[0_10px_24px_rgba(60,40,20,.16)] ${NOTE_COLORS[i]} ${
                  i === 0
                    ? "mr-11 -rotate-3 lg:left-0 lg:top-0 lg:mr-0 lg:-rotate-4"
                    : "ml-11 rotate-3 lg:right-0 lg:top-[150px] lg:ml-0"
                }`}
              >
                <blockquote className="m-0 font-hand text-[21px] leading-[1.1] lg:text-[27px]">
                  “{q.text}”
                </blockquote>
                <figcaption className="mt-2 text-[11px] font-bold uppercase tracking-[.06em] lg:mt-2.5 lg:text-[13px]">
                  {q.who}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div
            aria-hidden="true"
            className="hidden min-w-0 flex-[1_1_340px] items-center justify-center lg:flex"
          >
            <div className="flex size-[280px] rotate-[8deg] items-center justify-center rounded-full border-2 border-ink bg-blush shadow-[6px_6px_0_#1A1A1A]">
              <Hearts left="#FFF7ED" right="#9CB2F0" width={180} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
