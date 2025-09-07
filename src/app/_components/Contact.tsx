"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";

export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white px-4 py-16 md:py-24">
      <div className="w-full max-w-[400px] mx-auto space-y-10 md:space-y-12">
        <div className="md:text-center">
          <h3 className="text-lg md:text-xl font-semibold text-neutral-400 tracking-tight">
            Contact us:
          </h3>
          <p className="mt-3 text-xl md:text-2xl font-bold leading-snug break-words">
            <Link
              href="mailto:gather.amsterdam@gmail.com"
              className="no-underline relative transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7C5A3]"
            >
              <span className="bg-gradient-to-r from-white to-white bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] hover:bg-[length:100%_2px] focus:bg-[length:100%_2px] transition-[background-size] duration-300 ease-out [background-position:0_100%]">
                gather.amsterdam@gmail.com
              </span>
            </Link>
          </p>
        </div>
        <div className="flex flex-col items-start md:items-center md:text-center gap-6 pt-1 text-lg md:text-xl font-semibold">
          <motion.a
            whileHover={{ x: 4 }}
            href="https://instagram.com/gather.ams"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative no-underline flex items-center gap-1 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B7C5A3]"
          >
            <span className="bg-gradient-to-r from-[#B7C5A3] to-[#B7C5A3] bg-[length:0%_2px] bg-left-bottom bg-no-repeat group-hover:bg-[length:100%_2px] hover:bg-[length:100%_2px] focus:bg-[length:100%_2px] transition-[background-size] duration-300 ease-out [background-position:0_100%]">
              Instagram
            </span>
          </motion.a>
          <div className="pt-2 w-full flex justify-start md:justify-center">
            <Image
              src="logo-white.svg"
              alt="Gather logo"
              width={160}
              height={126}
              priority={false}
              className="opacity-90 hover:opacity-100 transition-opacity w-16 h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
