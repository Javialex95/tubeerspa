"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

// Tiempo mínimo que se ve el logo antes de revelar la página.
const MIN_VISIBLE_MS = 1600;

// Pantalla de carga: fondo verde con el logo; al terminar se desliza hacia abajo.
// Se renderiza en el servidor, así que cubre la página desde el primer pintado.
export default function Splash() {
  const [leaving, setLeaving] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    root.style.overflow = "hidden";

    const loaded = new Promise<void>((resolve) => {
      if (document.readyState === "complete") resolve();
      else window.addEventListener("load", () => resolve(), { once: true });
    });
    const minDelay = new Promise((resolve) => setTimeout(resolve, MIN_VISIBLE_MS));

    let cancelled = false;
    Promise.all([loaded, minDelay]).then(() => {
      if (!cancelled) setLeaving(true);
    });

    return () => {
      cancelled = true;
      root.style.overflow = "";
    };
  }, []);

  useEffect(() => {
    if (done) document.documentElement.style.overflow = "";
  }, [done]);

  if (done) return null;

  return (
    <div
      aria-hidden
      onTransitionEnd={(e) => {
        if (leaving && e.target === e.currentTarget) setDone(true);
      }}
      className={`theme-forest fixed inset-0 z-[1000] flex items-center justify-center transition-[translate,opacity] duration-1000 ease-in-out ${
        leaving
          ? "translate-y-full motion-reduce:translate-y-0 motion-reduce:opacity-0"
          : ""
      }`}
    >
      <Image
        src="/tubeer_horizontal_negativo.png"
        alt=""
        width={2917}
        height={1655}
        preload
        sizes="(min-width: 768px) 24rem, 70vw"
        className="w-[70vw] max-w-sm animate-fade-up"
      />
    </div>
  );
}
