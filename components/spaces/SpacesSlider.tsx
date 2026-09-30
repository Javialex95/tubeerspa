"use client";

import { type ReactNode, useCallback, useEffect, useRef, useState } from "react";
import { Chevron, PauseIcon, PlayIcon } from "../hero/icons";

const INTERVAL_MS = 5000;

type Slide = {
  key: string;
  content: ReactNode;
  fullWidth?: boolean;
};

type Props = {
  label: string;
  slides: Slide[];
};

// Carril con scroll-snap: avanza solo, swipe nativo en móvil, flechas y puntos en escritorio.
export default function SpacesSlider({ label, slides }: Props) {
  const total = slides.length;
  const rootRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      const slide = track?.children[(index + total) % total];
      if (!track || !(slide instanceof HTMLElement)) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      track.scrollTo({
        left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2,
        behavior: reduced ? "auto" : "smooth",
      });
    },
    [total],
  );

  // La diapositiva activa es la más cercana al centro del carril.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const center = track.scrollLeft + track.clientWidth / 2;
        let closest = 0;
        let best = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const el = child as HTMLElement;
          const distance = Math.abs(el.offsetLeft + el.clientWidth / 2 - center);
          if (distance < best) {
            best = distance;
            closest = i;
          }
        });
        setCurrent(closest);
      });
    };
    track.addEventListener("scroll", update, { passive: true });
    return () => {
      track.removeEventListener("scroll", update);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  // Solo avanza mientras la galería está en pantalla.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), {
      threshold: 0.5,
    });
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const autoplay = !paused && !hovering && visible && !reducedMotion;

  useEffect(() => {
    if (!autoplay) return;
    const id = setTimeout(() => goTo(current + 1), INTERVAL_MS);
    return () => clearTimeout(id);
  }, [autoplay, current, goTo]);

  return (
    <div
      role="region"
      aria-roledescription="carrusel"
      aria-label={label}
      ref={rootRef}
      className="relative mt-10 flex min-h-0 flex-1 flex-col"
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      onFocus={() => setHovering(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setHovering(false);
      }}
    >
      <div
        ref={trackRef}
        tabIndex={0}
        aria-live={autoplay ? "off" : "polite"}
        className="scrollbar-none flex min-h-0 flex-1 snap-x snap-mandatory gap-3 overflow-x-auto outline-none max-md:px-[6vw]"
      >
        {slides.map((slide, i) => (
          <div
            key={slide.key}
            role="group"
            aria-roledescription="diapositiva"
            aria-label={`${i + 1} de ${total}`}
            className={`flex h-full shrink-0 snap-center items-center ${
              slide.fullWidth ? "w-full" : ""
            }`}
          >
            {slide.content}
          </div>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 px-6 md:gap-6">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Espacio anterior"
          className="rounded-full border border-border p-3 transition-colors hover:border-accent hover:bg-accent hover:text-background"
        >
          <Chevron direction="left" />
        </button>

        <p aria-hidden className="text-p-sm min-w-12 text-center text-muted md:hidden">
          {current + 1} / {total}
        </p>

        <div className="flex items-center gap-3 max-md:hidden">
          {slides.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Ir al espacio ${i + 1}`}
              aria-current={i === current}
              className="group py-3"
            >
              <span
                className={`block h-px transition-all duration-500 ${
                  i === current
                    ? "w-10 bg-accent"
                    : "w-5 bg-foreground/40 group-hover:bg-foreground"
                }`}
              />
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Espacio siguiente"
          className="rounded-full border border-border p-3 transition-colors hover:border-accent hover:bg-accent hover:text-background"
        >
          <Chevron direction="right" />
        </button>

        <button
          type="button"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? "Reanudar galería" : "Pausar galería"}
          className="text-muted transition-colors hover:text-accent"
        >
          {paused ? <PlayIcon /> : <PauseIcon />}
        </button>
      </div>
    </div>
  );
}
