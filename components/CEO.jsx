"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.2, 0.8, 0.2, 1] }
  })
};

export default function CEO() {
  return (
    <section
      id="ceo"
      className="relative overflow-hidden bg-ink-950 py-24 md:py-32 lg:py-40"
    >
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto grid max-w-[1500px] gap-10 lg:gap-20 px-5 sm:px-8 md:px-12 lg:grid-cols-12 items-start">
        {/* Monogram tile */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          custom={0}
          className="lg:col-span-5 lg:sticky lg:top-28"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-sage-700">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-95"
              style={{ backgroundImage: "url('/images/hero-1.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ink-900/85 via-ink-900/55 to-ink-900/85" />
            <div className="grain absolute inset-0" />

            <div className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center">
              <span
                className="display-serif leading-none text-ivory-100/90 tracking-tight"
                style={{ fontSize: "clamp(4rem, 14vw, 9rem)" }}
              >
                MRS
              </span>
              <span className="mt-2 eyebrow text-ivory-100/70">
                Developments
              </span>
              <span className="block mt-8 h-px w-16 bg-ivory-100/30" />
              <span className="mt-4 text-[11px] uppercase tracking-wider-2 text-ivory-200/70 max-w-xs">
                Established by an engineer
                <br /> with a quiet ambition
              </span>
            </div>

            {/* Sign-off */}
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div className="flex flex-col">
                <span className="eyebrow text-ivory-100/55">Office</span>
                <span className="text-[12px] text-ivory-100/85">
                  Trivium Square · Cairo
                </span>
              </div>
              <div className="script-accent text-2xl text-ivory-200 italic">
                S. Mostafa
              </div>
            </div>
          </div>
        </motion.div>

        {/* Letter */}
        <div className="lg:col-span-7">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={0}
            className="flex items-center gap-4"
          >
            <span className="block h-px w-10 bg-ivory-100/40" />
            <span className="eyebrow">A word from the CEO</span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={1}
            className="display-serif mt-7 text-ivory-100"
            style={{
              fontSize: "clamp(2rem, 5.2vw, 4.4rem)",
              lineHeight: 0.98
            }}
          >
            Eng.{" "}
            <span className="script-accent text-ivory-200">Sary</span>{" "}
            Mostafa.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={1.5}
            className="mt-3 text-[11px] uppercase tracking-wider-2 text-ivory-200/55"
          >
            Chief Executive Officer · MRS Developments
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={2}
            className="mt-10 space-y-5 text-[14px] sm:text-[15px] leading-relaxed text-ivory-200/85 max-w-[640px]"
          >
            <p>
              <span className="script-accent text-3xl text-ivory-200 mr-2 align-top">
                &ldquo;
              </span>
              Dear valued stakeholders, at MRS Development, our ambitious
              journey began in the United Arab Emirates — where we delivered
              residential, hospitality, and industrial projects defined by
              elegance, luxury, and uncompromising quality. Each project met
              the highest engineering standards and was completed on time,
              strengthening our reputation for excellence.
            </p>
            <p>
              With Egypt&rsquo;s real-estate development campaign, we proudly
              shifted our investments home — to contribute to the
              nation&rsquo;s urban renaissance. Our vision is to establish
              landmark projects that attract both local and international
              investors, shaping the growth of modern Egypt.
            </p>
            <p>
              What sets us apart is our unwavering commitment to customer
              satisfaction. Guided by a professional management team, we
              continue to expand with distinctive projects that reflect
              innovation and forward-thinking design.
            </p>
            <p>
              We are deeply grateful to our customers, partners, and employees
              for their trust and support as we shape the future of real
              estate — one remarkable project at a time.
              <span className="script-accent text-3xl text-ivory-200 ml-1 align-top">
                &rdquo;
              </span>
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-10%" }}
            custom={3}
            className="mt-10 flex items-center gap-5"
          >
            <div className="h-px w-10 bg-ivory-100/40" />
            <div className="flex flex-col">
              <span className="display-serif text-xl text-ivory-100">
                Eng. Sary Mostafa
              </span>
              <span className="text-[11px] uppercase tracking-wider-2 text-ivory-200/55">
                Founder · 22+ years across the UAE & Egypt
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
