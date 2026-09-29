import type { SVGProps } from "react";

// Ilustración "ondas de agua" (public/files/04-ondas-de-agua.svg) en línea para animarla:
// el centro flota y cada onda se expande hacia afuera, una tras otra (solo si el usuario no pide reducir movimiento).
// Todas escalan desde el centro del viewBox (256, 256), no desde su propia caja.
const ORIGIN = { transformBox: "view-box", transformOrigin: "256px 256px" } as const;

const rings = [
  { d: "M321.5 280.2 A85 38 0 1 1 338.3 265.5", stroke: "#14301E", width: 8 },
  { d: "M350.8 295.7 A130 58 0 1 1 383.7 266.9", stroke: "#916C52", width: 7 },
  { d: "M375.8 312.9 A175 78 0 1 1 429.6 265.8", stroke: "#14301E", width: 6 },
  { d: "M393.0 331.5 A215 98 0 1 1 470.6 262.2", stroke: "#14301E", width: 5 },
];

export default function WaterRipples(props: SVGProps<SVGSVGElement>) {
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
      {rings.map((ring, i) => (
        <path
          key={ring.d}
          d={ring.d}
          stroke={ring.stroke}
          strokeWidth={ring.width}
          className="motion-safe:animate-ripple"
          style={{ ...ORIGIN, animationDelay: `${i * 1}s` }}
        />
      ))}
      <ellipse
        cx="256"
        cy="256"
        rx="40"
        ry="18"
        fill="#FABC61"
        stroke="#14301E"
        strokeWidth="9"
        className="motion-safe:animate-float"
        style={ORIGIN}
      />
    </svg>
  );
}
