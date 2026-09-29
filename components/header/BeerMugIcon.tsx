import type { SVGProps } from "react";

// Icono de marca "jarra de cerveza" (public/files/iconos-marca/09-jarra-cerveza.svg) en línea.
// El contorno usa currentColor para seguir el color de texto del tema del header.
// La espuma y las burbujas se animan (solo si el usuario no pide reducir movimiento).
export default function BeerMugIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <path
        d="M340 190 L380 190 Q420 190 420 240 L420 320 Q420 370 380 370 L340 370"
        stroke="currentColor"
        strokeWidth="19"
      />
      <path
        d="M130 170 L150 440 Q152 456 170 456 L320 456 Q338 456 340 440 L360 170Z"
        fill="#FABC61"
        stroke="currentColor"
        strokeWidth="11"
      />
      <path
        d="M160 240 L175 436 L315 436 L330 240Z"
        fill="#954A24"
        opacity=".35"
      />
      <path
        d="M200 220 L202 420"
        stroke="#F9EBD3"
        strokeWidth="7"
        opacity=".7"
      />
      <path
        d="M245 220 L247 420"
        stroke="#F9EBD3"
        strokeWidth="7"
        opacity=".7"
      />
      <path
        d="M290 220 L292 420"
        stroke="#F9EBD3"
        strokeWidth="7"
        opacity=".7"
      />
      <path
        d="M118 190 C95 150 130 110 170 125 C180 80 250 70 270 110 C300 80 360 100 355 145 C390 160 380 205 350 205 L130 205 C118 205 112 198 118 190Z"
        fill="#F9EBD3"
        stroke="currentColor"
        strokeWidth="9"
        className="motion-safe:animate-foam"
        style={{ transformBox: "fill-box", transformOrigin: "50% 100%" }}
      />
      <circle
        cx="210"
        cy="300"
        r="8"
        stroke="#F9EBD3"
        strokeWidth="3"
        className="motion-safe:animate-bubble"
        style={{ animationDelay: "0s" }}
      />
      <circle
        cx="260"
        cy="340"
        r="6"
        stroke="#F9EBD3"
        strokeWidth="3"
        className="motion-safe:animate-bubble"
        style={{ animationDelay: "0.6s" }}
      />
      <circle
        cx="230"
        cy="380"
        r="5"
        stroke="#F9EBD3"
        strokeWidth="3"
        className="motion-safe:animate-bubble"
        style={{ animationDelay: "1.2s" }}
      />
      <circle
        cx="290"
        cy="280"
        r="7"
        stroke="#F9EBD3"
        strokeWidth="3"
        className="motion-safe:animate-bubble"
        style={{ animationDelay: "1.8s" }}
      />
    </svg>
  );
}
