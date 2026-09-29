"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";

// Cada sección declara su fondo con `data-header-theme`; el header lo copia.
type HeaderTheme = "forest" | "black" | "cream";

const themeClass: Record<HeaderTheme, string> = {
  forest: "theme-forest",
  black: "theme-black",
  cream: "bg-background text-foreground",
};

// Solo detecta el tema; los hijos reaccionan vía `group-data-[theme=...]`.
export default function HeaderShell({ children }: { children: ReactNode }) {
  const headerRef = useRef<HTMLElement>(null);
  const [theme, setTheme] = useState<HeaderTheme>("forest");

  useEffect(() => {
    let frame = 0;

    // Toma el tema de la sección que está justo debajo del header.
    const update = () => {
      frame = 0;
      const header = headerRef.current;
      if (!header) return;
      const y = header.getBoundingClientRect().bottom + 1;
      const targets = document.querySelectorAll<HTMLElement>("[data-header-theme]");
      for (const el of targets) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= y && rect.bottom > y) {
          setTheme(el.dataset.headerTheme as HeaderTheme);
          return;
        }
      }
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header
      ref={headerRef}
      data-theme={theme}
      className={`${themeClass[theme]} group sticky top-0 z-50 transition-colors duration-500`}
    >
      {children}
    </header>
  );
}
