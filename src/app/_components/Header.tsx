"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href: string; // e.g. "#studio"
};

export interface HeaderProps {
  items?: NavItem[];
  sticky?: boolean;
}

/**
 * Site header: left-aligned "Gather" wordmark, right-aligned section links.
 * The default navigation includes Studio and Work anchors. CONTACT is intentionally not included.
 */
export default function Header({
  items = [
    // { label: "Studio", href: "#studio" },
    // { label: "Contact", href: "#contact" },
  ],
  sticky = true,
}: HeaderProps) {
  const [hash, setHash] = useState<string>("");

  useEffect(() => {
    const update = () => setHash(window.location.hash || "");
    update();
    window.addEventListener("hashchange", update);
    return () => window.removeEventListener("hashchange", update);
  }, []);

  return (
    <header
      className={[
        sticky ? "sticky top-0 z-50" : "relative",
        "w-full bg-white text-black",
      ].join(" ")}
    >
      <div className="w-full px-4 py-3 flex items-center justify-between">
        {/* Left: Logo / Wordmark */}
        <div className="shrink-0">
          <Link href="/" aria-label="Gather home" className="block select-none">
            <span className="text-xl font-extrabold tracking-tight uppercase text-black">
              Gather
            </span>
          </Link>
        </div>

        {/* Right: Navigation */}
        <nav aria-label="Primary" className="hidden sm:block">
          <ul className="flex items-center gap-8">
            {items.map(({ label, href }) => {
              const active = hash === href;
              return (
                <li key={href}>
                  <a
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "text-xl font-semibold tracking-wider uppercase text-black",
                      "hover:underline underline-offset-4",
                      active ? "underline" : "no-underline",
                    ].join(" ")}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile: compact menu (simple inline for now) */}
        {/* <nav aria-label="Primary" className="sm:hidden">
          <select
            aria-label="Navigate to section"
            className="rounded-md border border-black/10 bg-white px-2 py-1 text-sm text-black"
            onChange={(e) => {
              const to = e.target.value;
              if (to) window.location.hash = to;
            }}
            value={hash || items[0]?.href}
          >
            {items.map(({ label, href }) => (
              <option key={href} value={href} className="text-black">
                {label}
              </option>
            ))}
          </select>
        </nav> */}
      </div>
    </header>
  );
}
