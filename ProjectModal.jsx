"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  const open = !!project;
  const images = project?.gallery?.length ? project.gallery : project?.image ? [project.image] : [];
  const [idx, setIdx] = useState(0);

  // Reset slide when modal opens for a new project.
  useEffect(() => {
    if (project) setIdx(0);
  }, [project]);

  // Lock body scroll when open + handle keyboard.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, images.length]);

  const next = () => setIdx((i) => (images.length ? (i + 1) % images.length : 0));
  const prev = () =>
    setIdx((i) => (images.length ? (i - 1 + images.length) % images.length : 0));

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          className="fixed inset-0 z-[80] bg-ink-950/95 backdrop-blur-2xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={project?.name}
        >
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close gallery"
            className="absolute top-5 right-5 md:top-7 md:right-7 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-ivory-100/25 bg-ink-950/60 text-ivory-100 backdrop-blur-md transition-all hover:border-ivory-100 hover:bg-ivory-100/10"
          >
            <X className="h-4 w-4" strokeWidth={1.5} />
          </button>

          <div
            className="relative mx-auto flex h-full max-w-[1400px] flex-col lg:flex-row items-stretch gap-0 lg:gap-12 px-4 sm:px-6 md:px-10 py-16 md:py-20"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image side */}
            <motion.div
              key={`img-${project?.id}-${idx}`}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative flex-1 min-h-[40vh] lg:min-h-0 overflow-hidden rounded-md bg-ink-800"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${images[idx] || ""}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 to-transparent" />
              <div className="grain absolute inset-0" />

              {/* Counter */}
              {images.length > 1 && (
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full border border-ivory-100/25 bg-ink-950/50 px-3 py-1 backdrop-blur">
                  <span className="text-[10px] uppercase tracking-wider-2 text-ivory-100/85">
                    {idx + 1} / {images.length}
                  </span>
                </div>
              )}

              {/* Prev / Next */}
              {images.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    aria-label="Previous image"
                    className="group absolute left-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-ivory-100/25 bg-ink-950/50 text-ivory-100 backdrop-blur-md transition-all hover:border-ivory-100"
                  >
                    <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next image"
                    className="group absolute right-4 top-1/2 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-ivory-100/25 bg-ink-950/50 text-ivory-100 backdrop-blur-md transition-all hover:border-ivory-100"
                  >
                    <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </>
              )}
            </motion.div>

            {/* Details side */}
            <motion.aside
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
              className="relative w-full lg:w-[420px] xl:w-[460px] flex flex-col py-6 lg:py-0 lg:justify-center"
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="display-serif text-xl text-ivory-200/55">
                  {project?.accent}
                </span>
                <span className="block h-px w-7 bg-ivory-100/30" />
                <span className="eyebrow text-ivory-100/70">{project?.type}</span>
              </div>

              <h3
                className="display-serif text-ivory-100"
                style={{
                  fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                  lineHeight: 1.02
                }}
              >
                {project?.name}
              </h3>

              <div className="mt-4 inline-flex items-center gap-2 text-[12px] uppercase tracking-wider-2 text-ivory-200/70">
                <MapPin className="h-3.5 w-3.5" strokeWidth={1.5} />
                {project?.location}
              </div>

              <div className="mt-5 inline-flex w-fit items-center gap-2 rounded-full border border-ivory-100/20 bg-ink-900/40 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-ivory-200" />
                <span className="text-[10px] uppercase tracking-wider-2 text-ivory-100/85">
                  {project?.status}
                </span>
              </div>

              <p className="mt-7 text-[14px] sm:text-[15px] leading-relaxed text-ivory-200/85">
                {project?.description}
              </p>

              {project?.facts?.length > 0 && (
                <ul className="mt-8 grid grid-cols-2 gap-x-4 gap-y-5 border-t border-ivory-100/10 pt-6">
                  {project.facts.map((f) => (
                    <li key={f.label} className="flex flex-col gap-1">
                      <span className="display-serif text-2xl text-ivory-100 leading-none">
                        {f.value}
                      </span>
                      <span className="text-[10px] uppercase tracking-wider-2 text-ivory-200/55">
                        {f.label}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              <a
                href="#contact"
                onClick={onClose}
                className="mt-9 luxe-btn-solid w-fit"
              >
                Enquire about this project
                <ArrowUpRight className="h-4 w-4" strokeWidth={1.5} />
              </a>
            </motion.aside>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
