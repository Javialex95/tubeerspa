"use client";

import { type MouseEvent, type ReactNode, useRef, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

// Solo controla el drawer; los links llegan renderizados desde el servidor.
export default function MobileMenu({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pendingHash = useRef<string | null>(null);

  // El drawer bloquea el scroll mientras está abierto: cerramos primero y
  // navegamos a la sección cuando termina la animación de salida.
  const onLinkClick = (e: MouseEvent) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!link) return;
    e.preventDefault();
    pendingHash.current = link.hash;
    setOpen(false);
  };

  const onAnimationEnd = (isOpen: boolean) => {
    const hash = pendingHash.current;
    if (isOpen || !hash) return;
    pendingHash.current = null;
    history.pushState(null, "", hash);
    // behavior "auto" respeta el scroll-behavior de CSS (y reduced motion).
    document.querySelector(hash)?.scrollIntoView();
  };

  return (
    <Drawer
      direction="right"
      open={open}
      onOpenChange={setOpen}
      onAnimationEnd={onAnimationEnd}
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
