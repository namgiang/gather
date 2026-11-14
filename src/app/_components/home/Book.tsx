import { CONTACT, QUOTES } from "../../_data/events";

const NOTE_COLORS = ["bg-white", "bg-sky"];

export default function Book() {
  const hasQuotes = QUOTES.length > 0;
  return (
    <section id="book" className="relative isolate overflow-clip border-t-2 border-ink bg-white">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-14 px-6 pb-[60px] pt-[52px] lg:flex-row lg:flex-wrap lg:items-center lg:gap-14 lg:py-24">
        <div className="flex min-w-0 -rotate-[0.6deg] flex-col gap-3.5 rounded-[22px] border-2 border-ink bg-cream p-5 lg:max-w-[590px] lg:flex-[1.3_1_460px] lg:gap-5 lg:rounded-[28px] lg:p-8">
          <h2 className="m-0 font-display text-[42px] font-black leading-[.95] tracking-[-0.02em] text-balance lg:text-[clamp(40px,4.6vw,68px)]">
            <span className="block">Want Gather</span>
            <span className="block">at your table?</span>
          </h2>
          <p className="m-0 max-w-[520px] text-[17px] leading-[1.5] lg:text-xl">
            A curated dinner, catering for your event or office, a community event?
            Tell us what you&apos;re planning and we&apos;ll cook something you
            won&apos;t forget.
          </p>
          <div className="mt-[22px] flex flex-col gap-4 lg:mt-1 lg:flex-row lg:flex-wrap">
            <a
              href={`mailto:${CONTACT.email}?subject=Cooking%20for%20our%20event`}
              className="gl-pill gl-press rounded-full border-2 border-ink bg-tomato px-5 py-[15px] text-center text-[17px] font-bold text-white shadow-[4px_4px_0_#1A1A1A] lg:px-6"
            >
              Plan a dinner with us →
            </a>
            <a
              href={CONTACT.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="gl-pill gl-press rounded-full border-2 border-ink bg-white px-3 py-[15px] text-center text-[14.5px] font-bold lg:px-6 lg:text-[17px]"
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
          <div className="relative flex min-w-0 flex-[1_1_340px] items-center justify-center pb-6 lg:justify-end lg:pb-0">
            {/* phone: gingham ribbon behind the photo */}
            <div
              aria-hidden="true"
              className="gl-gingham absolute left-1/2 top-[14%] -z-10 h-[72%] w-screen -translate-x-1/2 border-y-2 border-ink lg:hidden"
            />
            <div className="relative w-full max-w-[420px] lg:max-w-[460px]">
            {/* desktop: gingham runner running top to bottom behind the photo */}
            <div
              aria-hidden="true"
              className="gl-gingham absolute -bottom-[400px] -top-[400px] left-1/2 -z-10 hidden w-[62%] -translate-x-1/2 border-x-2 border-ink lg:block"
            />
            <figure className="relative m-0 w-full rotate-[2deg] rounded-[22px] border-2 border-ink bg-white p-2.5 shadow-[6px_8px_0_#1A1A1A] lg:rounded-[28px] lg:p-3.5 lg:shadow-[10px_12px_0_#1A1A1A]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="cooking/plating-1000.jpg"
                alt="Two cooks topping glass cups of dessert with rose crumbs and edible flowers in the kitchen"
                loading="lazy"
                decoding="async"
                className="block aspect-[4/3.4] w-full rounded-[12px] object-cover lg:rounded-[16px]"
                style={{ objectPosition: "50% 35%" }}
              />
              <figcaption className="absolute -bottom-6 -left-3 w-[170px] -rotate-6 bg-sky px-3.5 pb-3.5 pt-3 font-hand text-[22px] leading-[1.05] text-cobalt-deep shadow-[0_8px_18px_rgba(60,40,20,.18)] lg:-left-[130px] lg:bottom-[2%] lg:w-[220px] lg:-rotate-[5deg] lg:text-[26px]">
                tell us what you&apos;re planning ♡
              </figcaption>
            </figure>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
