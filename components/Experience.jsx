"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.05, 1.01, 1.05]);

  return (
    <section
      id="experience"
      ref={ref}
      className="relative w-full overflow-hidden bg-ink-950"
    >
      <div className="relative min-h-[640px] md:min-h-[720px] lg:min-h-[820px] py-24 md:py-32 lg:py-40 flex items-center">
        {/* Parallax background */}
        <motion.div
          style={{ y: bgY, scale }}
          className="absolute inset-0 -z-10 will-change-transform"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-1.png')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink-950/60 via-ink-950/40 to-ink-950/80" />
          <div className="grain absolute inset-0" />
          <div className="vignette absolute inset-0" />
        </motion.div>

        <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-8 md:px-12">
          <div className="flex flex-col items-center text-center">
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9 }}
              className="eyebrow"
            >
              Your Chosen Partner
            </motion.span>

            <div className="mt-6 overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 1, ease: [0.2, 0.8, 0.2, 1] }}
                className="display-serif text-ivory-100"
                style={{
                  fontSize: "clamp(2.2rem, 7.5vw, 6.5rem)",
                  lineHeight: 0.98
                }}
              >
                Not just building —
              </motion.h2>
            </div>
            <div className="overflow-hidden">
              <motion.h2
                initial={{ y: "100%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{
                  duration: 1,
                  delay: 0.1,
                  ease: [0.2, 0.8, 0.2, 1]
                }}
                className="display-serif"
                style={{
                  fontSize: "clamp(2.2rem, 7.5vw, 6.5rem)",
                  lineHeight: 0.98
                }}
              >
                <span className="script-accent text-ivory-200">elevating.</span>
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-10 max-w-xl text-[14px] sm:text-[15px] leading-relaxed text-ivory-200/80"
            >
              MRS Developments&rsquo; diverse portfolio has strengthened its
              expertise as a professional developer — spanning residential
              communities, hospitality facilities, and industrial
              establishments. Throughout its journey, the company has remained
              focused on the highest engineering standards, agreed timeframes,
              and quiet, uncompromising quality.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: 0.45 }}
              className="mt-10 flex flex-wrap items-center justify-center gap-4"
            >
              <a href="#projects" className="luxe-btn-solid">
                See the portfolio
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
              <a href="#contact" className="luxe-btn">
                Start a conversation
              </a>
            </motion.div>

            {/* Stat strip */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.9, delay: 0.6 }}
              className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-y-6 sm:grid-cols-4 border-t border-ivory-100/10 pt-8"
            >
              {[
                ["22+", "Years"],
                ["31", "UAE projects"],
                ["20", "Egypt projects"],
                ["2,436", "Units delivered"]
              ].map(([n, l]) => (
                <div key={l} className="flex flex-col items-center gap-1">
                  <span className="display-serif text-3xl sm:text-4xl text-ivory-100 leading-none">
                    {n}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider-2 text-ivory-200/60">
                    {l}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
