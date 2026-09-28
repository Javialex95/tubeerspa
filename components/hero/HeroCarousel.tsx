"use client";

import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Chevron, PauseIcon, PlayIcon } from "./icons";

const INTERVAL_MS = 6000;
const SWIPE_THRESHOLD = 50;

type Props = {
  label: string;
  images: ReactNode[];
  captions: ReactNode[];
};


export default function HeroCarousel({ label, images, captions }: Props) {
  const total = images.length;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pointerStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => setCurrent((index + total) % total),
    [total],
  );
  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const autoplay = !paused && !hovering && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(next, INTERVAL_MS);
    return () => clearTimeout(id);
  }, [autoplay, next]);

  return (
    <section
      aria-roledescription="carrusel"
      aria-label={label}
      className="theme-forest relative h-[88svh] min-h-140 w-full overflow-hidden select-none"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHovering(false);
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") next();
        if (e.key === "ArrowLeft") prev();
      }}
      onPointerDown={(e) => {
        pointerStartX.current = e.clientX;
      }}
      onPointerUp={(e) => {
        if (pointerStartX.current === null) return;
        const delta = e.clientX - pointerStartX.current;
        pointerStartX.current = null;
        if (delta > SWIPE_THRESHOLD) prev();
        if (delta < -SWIPE_THRESHOLD) next();
      }}
    >
      {images.map((image, i) => (
        <div
          key={i}
          role="group"
          aria-roledescription="diapositiva"
          aria-label={`${i + 1} de ${total}`}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`absolute inset-0 transition-transform duration-7000 ease-out motion-reduce:transition-none ${
              i === current ? "scale-105" : "scale-100"
            }`}
          >
            {image}
          </div>
        </div>
      ))}

      {/* Velo para legibilidad del texto */}
      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-forest-deep/85 via-forest-deep/35 to-forest-deep/20" />

      <div
        aria-live={autoplay ? "off" : "polite"}
        className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-6"
      >
        {captions.map((caption, i) => (
          <div key={i} className={i === current ? "animate-fade-up" : "hidden"}>
            {caption}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prev}
        aria-label="Diapositiva anterior"
        className="absolute left-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-border p-3 text-cream transition-colors hover:border-malt hover:text-malt sm:block"
      >
        <Chevron direction="left" />
      </button>
      <button
        type="button"
        onClick={next}
        aria-label="Diapositiva siguiente"
        className="absolute right-4 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-border p-3 text-cream transition-colors hover:border-malt hover:text-malt sm:block"
      >
        <Chevron direction="right" />
      </button>

      <div className="absolute inset-x-0 bottom-8 z-20 flex items-center justify-center gap-4">
        <div className="flex items-center gap-3">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir a la diapositiva ${i + 1}`}
              aria-current={i === current}
              className="group py-3"
            >
              <span
                className={`block h-px transition-all duration-500 ${
                  i === current ? "w-10 bg-malt" : "w-5 bg-cream/50 group-hover:bg-cream"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Reanudar carrusel" : "Pausar carrusel"}
          className="text-cream/70 transition-colors hover:text-malt"
        >
          {paused ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>
    </section>
  );
}
