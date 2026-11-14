/* eslint-disable @next/next/no-img-element */
import { CONTACT } from "../../_data/events";

export default function SiteFooter() {
  return (
    <footer
      id="contact"
      className="bg-ink text-cream pb-[env(safe-area-inset-bottom,0px)]"
    >
      <div className="mx-auto flex max-w-[1280px] flex-col gap-2 px-6 py-8 lg:flex-row lg:flex-wrap lg:items-end lg:justify-between lg:gap-10 lg:py-[88px]">
        <div className="flex flex-col gap-1.5 lg:gap-3.5">
          <p className="m-0 text-sm font-semibold text-[#B3AFA8] lg:text-lg">Contact us</p>
          <a
            href={`mailto:${CONTACT.email}`}
            className="break-words font-display text-[18px] font-black no-underline sm:text-[22px] lg:text-[clamp(22px,4vw,44px)]"
          >
            {CONTACT.email}
          </a>
          <a
            href={CONTACT.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-base font-bold text-sky lg:text-xl"
          >
            Instagram {CONTACT.handle}
          </a>
        </div>
        <img
          src="logo-white.svg"
          alt="Gather"
          className="mt-1 h-auto w-[56px] lg:mt-0 lg:w-24"
        />
      </div>
    </footer>
  );
}
