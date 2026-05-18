"use client";

import { motion } from "framer-motion";

const items = [
  "Residential",
  "Hospitality",
  "Industrial",
  "Mixed-Use",
  "Master-Planned",
  "On Time",
  "Twenty-Two Years",
  "UAE · Egypt"
];

export default function Marquee() {
  const row = [...items, ...items];
  return (
    <section
      className="relative border-y border-ivory-100/10 bg-ink-950"
      aria-hidden="true"
    >
      <div className="ticker-track py-5 md:py-7 overflow-hidden">
        <motion.div
          className="flex w-max items-center gap-10 md:gap-14 whitespace-nowrap will-change-transform"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 48, repeat: Infinity, ease: "linear" }}
        >
          {row.map((t, i) => (
            <div key={i} className="flex items-center gap-10 md:gap-14">
              <span className="display-serif text-2xl sm:text-3xl md:text-5xl text-ivory-100/80">
                {t}
              </span>
              <span className="text-ivory-200/40 text-xl">✦</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
