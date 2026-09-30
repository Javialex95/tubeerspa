"use client";

import { type KeyboardEvent, type ReactNode, useRef, useState } from "react";

type Tab = {
  key: string;
  label: string;
  panel: ReactNode;
};

// Solo alterna pestañas: todos los paneles llegan renderizados desde el servidor.
export default function PlansTabs({ label, tabs }: { label: string; tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);

  const select = (index: number) => {
    const next = (index + tabs.length) % tabs.length;
    setActive(next);
    buttons.current[next]?.focus();
  };

  const onKeyDown = (event: KeyboardEvent, index: number) => {
    const target =
      event.key === "ArrowRight" ? index + 1
      : event.key === "ArrowLeft" ? index - 1
      : event.key === "Home" ? 0
      : event.key === "End" ? tabs.length - 1
      : null;
    if (target === null) return;
    event.preventDefault();
    select(target);
  };

  return (
    <div className="flex flex-col gap-10">
      <div
        role="tablist"
        aria-label={label}
        className="mx-auto grid w-full max-w-md grid-cols-2 gap-2 sm:flex sm:max-w-none sm:justify-center"
      >
        {tabs.map((tab, i) => (
          <button
            key={tab.key}
            ref={(el) => {
              buttons.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`plans-tab-${tab.key}`}
            aria-selected={i === active}
            aria-controls={`plans-panel-${tab.key}`}
            tabIndex={i === active ? 0 : -1}
            onClick={() => setActive(i)}
            onKeyDown={(e) => onKeyDown(e, i)}
            className={`text-h5 rounded-full border px-6 py-2.5 transition-colors sm:min-w-36 ${
              i === active
                ? "border-foam bg-foam text-forest"
                : "border-border text-foreground hover:border-foam"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {tabs.map((tab, i) => (
        <div
          key={tab.key}
          role="tabpanel"
          id={`plans-panel-${tab.key}`}
          aria-labelledby={`plans-tab-${tab.key}`}
          hidden={i !== active}
          className="motion-safe:animate-fade-up"
        >
          {tab.panel}
        </div>
      ))}
    </div>
  );
}
