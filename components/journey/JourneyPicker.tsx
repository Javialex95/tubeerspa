"use client";

import { type ReactNode, useState } from "react";
import type { FormatData, StationKey } from "./stations";

const MAX_MINUTES = 180;
const TICKS = [0, 60, 120, 180];

type Props = {
  stations: { key: StationKey; label: string }[];
  formats: FormatData[];
  booking: { href: string; label: string };
  notice: ReactNode; // renderizado en el servidor
};

const chip = (active: boolean) =>
  `rounded-full border px-4 py-1.5 text-sm transition-colors ${
    active
      ? "border-malt bg-malt text-forest"
      : "border-border text-foreground hover:border-malt"
  }`;

export default function JourneyPicker({ stations, formats, booking, notice }: Props) {
  const [formatIndex, setFormatIndex] = useState(0);
  const [planIndex, setPlanIndex] = useState(0);

  const format = formats[formatIndex];
  const plan = format.plans[planIndex];
  const categories = [...new Set(format.plans.map((p) => p.category))];
  const lit = stations.map((s) => plan.stations.includes(s.key));
  const message = `Hola, me interesa el plan ${plan.name} (${plan.category}, ${format.label.toLowerCase()}) de TuBeer Spa.`;

  return (
    <div className="flex flex-col gap-12">
      {/* Selector: formato y plan */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
          {formats.map((f, i) => (
            <button
              key={f.key}
              type="button"
              aria-pressed={i === formatIndex}
              onClick={() => {
                setFormatIndex(i);
                setPlanIndex(0);
              }}
              className={`text-h5 border-b pb-1 transition-colors ${
                i === formatIndex ? "border-malt text-malt" : "border-transparent hover:text-malt"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
        <p className="text-p-sm text-center text-muted">{format.hint}</p>

        <div className="flex flex-col gap-4">
          {categories.map((category) => (
            <div key={category} className="flex flex-wrap items-center justify-center gap-2">
              <span className="text-h5 w-full text-center text-muted md:w-auto md:pr-3">{category}</span>
              {format.plans.map((p, i) =>
                p.category === category ? (
                  <button
                    key={p.name}
                    type="button"
                    aria-pressed={i === planIndex}
                    onClick={() => setPlanIndex(i)}
                    className={chip(i === planIndex)}
                  >
                    {p.name}
                  </button>
                ) : null,
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Ruta: las estaciones incluidas se encienden en orden */}
      <ol className="grid grid-cols-3 gap-y-10 md:grid-cols-6">
        {stations.map((station, i) => {
          const on = lit[i];
          const reached = on && lit.slice(0, i).some(Boolean);
          const delay = { transitionDelay: `${i * 70}ms` };
          return (
            <li key={station.key} className="relative flex flex-col items-center gap-3">
              {i > 0 && (
                <span
                  aria-hidden
                  style={delay}
                  className={`absolute top-6 right-1/2 hidden h-px w-full transition-colors duration-500 md:block ${
                    reached ? "bg-malt" : "border-t border-dashed border-cream/20"
                  }`}
                />
              )}
              <span
                style={delay}
                className={`text-h5 relative z-10 grid size-12 place-items-center rounded-full border transition-all duration-500 ${
                  on
                    ? "border-malt bg-malt text-forest shadow-[0_0_24px_var(--color-malt)]/40"
                    : "border-dashed border-cream/30 bg-forest text-cream/40"
                }`}
              >
                {i + 1}
              </span>
              <span
                style={delay}
                className={`text-h5 transition-colors duration-500 ${on ? "text-cream" : "text-cream/40"}`}
              >
                {station.label}
                <span className="sr-only">{on ? " (incluido)" : " (no incluido)"}</span>
              </span>
            </li>
          );
        })}
      </ol>

      {/* Resumen del plan */}
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
        <div>
          <div className="h-2 overflow-hidden rounded-full bg-cream/10">
            <div
              className="h-full rounded-full bg-malt transition-[width] duration-700 ease-out"
              style={{ width: `${Math.min(plan.minutes / MAX_MINUTES, 1) * 100}%` }}
            />
          </div>
          <div aria-hidden className="text-p-sm mt-2 flex justify-between text-muted">
            {TICKS.map((t) => (
              <span key={t}>{t === 0 ? "0" : `${t / 60} h`}</span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h3 className="text-h3">{plan.name}</h3>
            <p className="text-p-sm text-muted">Duración: {plan.duration}</p>
          </div>
          <p className="flex flex-col items-end leading-tight font-semibold!">
            {plan.prices.map((price) => (
              <span key={price.label ?? "base"} className="text-h4 text-malt whitespace-nowrap">
                {price.label && <span className="text-p-sm mr-2 text-muted">{price.label}</span>}
                {price.text}
              </span>
            ))}
          </p>
        </div>

        <p className="text-p-sm border-t border-border pt-4 text-muted">
          {plan.includes.join(" · ")}
        </p>

        <a
          href={`${booking.href}?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="self-center rounded-full bg-malt px-8 py-3 font-semibold tracking-widest text-forest uppercase hover-zoom hover:bg-honey focus-visible:bg-honey"
        >
          {booking.label}
        </a>

        {notice}
      </div>
    </div>
  );
}
