"use client";

import { type MouseEvent, type ReactNode, useEffect, useRef, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const DURATION_MS = 800;
const SETTLE_MS = 500; // sigue corrigiendo por si algo mueve el scroll al terminar
const UNLOCK_TIMEOUT_MS = 1500;

// Scroll animado con easing; el destino se recalcula en cada frame por si la página
// cambia de altura (imágenes lazy) y se cancela si el usuario toca o rueda.
function smoothScrollTo(target: HTMLElement) {
  const offset = parseFloat(getComputedStyle(document.documentElement).scrollPaddingTop) || 0;
  const destination = () =>
    Math.max(0, target.getBoundingClientRect().top + window.scrollY - offset);

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    window.scrollTo({ top: destination(), behavior: "instant" });
    return;
  }

  const from = window.scrollY;
  const start = performance.now();
  let frame = 0;

  const stop = () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("touchstart", stop);
    window.removeEventListener("wheel", stop);
  };
  window.addEventListener("touchstart", stop, { passive: true });
  window.addEventListener("wheel", stop, { passive: true });

  const step = (now: number) => {
    const elapsed = now - start;
    const eased = 1 - Math.pow(1 - Math.min(elapsed / DURATION_MS, 1), 3); // easeOutCubic
    const to = destination();
    // "instant" evita que el scroll-behavior: smooth del CSS pelee con cada frame.
    window.scrollTo({ top: from + (to - from) * eased, behavior: "instant" });
    if (elapsed < DURATION_MS + SETTLE_MS) frame = requestAnimationFrame(step);
    else stop();
  };
  frame = requestAnimationFrame(step);
}

// Vaul bloquea el body (position: fixed / overflow: hidden) mientras el drawer está abierto
// y lo restaura al cerrar; no se puede hacer scroll hasta entonces.
function whenUnlocked(callback: () => void) {
  const deadline = performance.now() + UNLOCK_TIMEOUT_MS;
  const check = () => {
    const body = getComputedStyle(document.body);
    const html = getComputedStyle(document.documentElement);
    const locked =
      body.position === "fixed" || body.overflow === "hidden" || html.overflow === "hidden";
    if (!locked || performance.now() > deadline) callback();
    else requestAnimationFrame(check);
  };
  requestAnimationFrame(check);
}

// Solo controla el drawer; los links llegan renderizados desde el servidor.
export default function MobileMenu({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pendingHash = useRef<string | null>(null);

  // El drawer bloquea el scroll mientras está abierto: cerramos primero y
  // navegamos a la sección cuando termina de cerrarse.
  const onLinkClick = (e: MouseEvent) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    pendingHash.current = link.hash;
    setOpen(false);
  };

  // Vaul no avisa (onAnimationEnd) cuando cerramos desde el estado, así que reaccionamos
  // a `open`: esperamos a que suelte el body y animamos el scroll a mano.
  // Sin history.pushState: el router de Next lo intercepta y hace su propio scroll.
  useEffect(() => {
    const hash = pendingHash.current;
    if (open || !hash) return;
    pendingHash.current = null;
    whenUnlocked(() => {
      const target = document.querySelector<HTMLElement>(hash);
      if (target) smoothScrollTo(target);
    });
  }, [open]);

  return (
    <Drawer
      direction="right"
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger
        aria-label="Abrir menú"
        className="grid size-10 place-items-center rounded-full transition-colors hover:text-malt focus-visible:text-malt group-data-[theme=cream]:hover:text-barrel group-data-[theme=cream]:focus-visible:text-barrel md:hidden"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden className="size-7">
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      </DrawerTrigger>
      <DrawerContent
        aria-describedby={undefined}
        className="theme-forest border-border p-6"
        onClick={onLinkClick}
      >
        <div className="flex items-center justify-between">
          <DrawerTitle className="text-h5 text-malt uppercase tracking-widest">
            Menú
          </DrawerTitle>
          <DrawerClose
            aria-label="Cerrar menú"
            className="grid size-10 place-items-center rounded-full transition-colors hover:text-malt focus-visible:text-malt"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden className="size-6">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </DrawerClose>
        </div>
        {children}
      </DrawerContent>
    </Drawer>
  );
}
