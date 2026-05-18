"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const stats = [
  { value: "22", suffix: "yrs", label: "Regional heritage" },
  { value: "31", suffix: "", label: "UAE developments" },
  { value: "2,256", suffix: "", label: "Units delivered · UAE" },
  { value: "20", suffix: "", label: "Egypt projects · 180 units" }
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }
  })
};

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-5%", "8%"]);

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-ink-950 py-24 md:py-32 lg:py-40"
    >
      <div className="absolute inset-0 bg-ivory-gradient opacity-40 pointer-events-none" />
      <div className="mx-auto grid max-w-[1500px] gap-12 lg:gap-20 px-5 sm:px-8 md:px-12 lg:grid-cols-12 items-start">
        {/* Left — image */}
        <div className="relative lg:col-span-6 lg:sticky lg:top-28">
          <motion.div
            style={{ y: yImg }}
            className="relative aspect-[4/5] w-full overflow-hidden rounded-sm will-change-transform"
          >
            <motion.div
              initial={{ scale: 1.12 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 1.4, ease: [0.2, 0.8, 0.2, 1] }}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/atelier.jpg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ink-950/70" />
            <div className="grain absolute inset-0" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3">
              <span className="display-serif text-6xl text-ivory-100/90 leading-none">
                m.
              </span>
              <span className="block h-px w-10 bg-ivory-100/40" />
              <span className="eyebrow text-ivory-100/70">
                Atelier · Trivium Square
              </span>
            </div>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="hidden lg:flex absolute -bottom-8 -right-8 glass rounded-md px-5 py-4 flex-col gap-1"
          >
            <span className="eyebrow text-ivory-200/55">Years of</span>
            <span className="display-serif text-3xl text-ivory-100 leading-none">
              Experience
            </span>
            <span className="text-[11px] uppercase tracking-wider-2 text-ivory-200/70 mt-1">
              Since 2004 · UAE & Egypt
            </span>
          </motion.div>
        </div>

        {/* Right — copy */}
        <div className="relative lg:col-span-6 lg:pl-4">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={0}
            className="flex items-center gap-4"
          >
            <span className="block h-px w-10 bg-ivory-100/40" />
            <span className="eyebrow">Who We Are</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={1}
            className="display-serif mt-7 text-ivory-100"
            style={{
              fontSize: "clamp(2.2rem, 6.5vw, 5rem)",
              lineHeight: 0.98
            }}
          >
            We don&rsquo;t wait
            <br />
            for tomorrow.
            <br />
            <span className="script-accent text-ivory-200">
              We head toward
            </span>{" "}
            it.
          </motion.h2>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={2}
            className="mt-8 space-y-5 text-[14px] sm:text-[15px] leading-relaxed text-ivory-200/80 max-w-xl"
          >
            <p>
              MRS Developments is a leading Egyptian real-estate developer
              bringing over twenty-two years of regional experience from the UAE
              into Egypt&rsquo;s evolving urban landscape — translating regional
              expertise into lasting local impact.
            </p>
            <p>
              Guided by a commitment to contribute to Egypt&rsquo;s urban
              renaissance, the company has delivered a diverse portfolio
              spanning residential, hospitality, and industrial developments —
              including 31 projects with 2,256 units in the UAE and 20 projects
              with 180 units in Egypt.
            </p>
            <p>
              This journey reflects a disciplined approach rooted in engineering
              excellence, timely delivery, and uncompromising quality — shaping
              a future defined by a vision set in stone.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={3}
            className="mt-12 grid grid-cols-2 gap-x-5 gap-y-8 border-t border-ivory-100/10 pt-10 sm:grid-cols-4"
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col gap-2">
                <span className="display-serif text-3xl sm:text-[2.25rem] text-ivory-100 leading-none">
                  {s.value}
                  {s.suffix && (
                    <span className="text-ivory-200/55 text-base ml-1">
                      {s.suffix}
                    </span>
                  )}
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-wider-2 text-ivory-200/60">
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
