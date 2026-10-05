import Image from "next/image";
import BeerMugIcon from "./BeerMugIcon";
import HeaderShell from "./HeaderShell";
import MobileMenu from "./MobileMenu";
import { booking } from "@/components/plans/data";

// Links a las secciones de la landing (ids definidos en cada componente).
const sections = [
  { href: "#experiencia", label: "Experiencia" },
  { href: "#planes", label: "Planes" },
  { href: "#espacios", label: "Espacios" },
  { href: "#opiniones", label: "Reseñas" },
  { href: "#ubicacion", label: "Ubicación" },
];

const contactClass =
  "whitespace-nowrap rounded-full bg-malt px-4 py-2 font-semibold tracking-widest text-forest uppercase hover-zoom hover:bg-honey focus-visible:bg-honey";

// Server Component: renderiza el menú; HeaderShell solo sigue el tema de la sección visible.
export default function Header() {
  return (
    <HeaderShell>
      <nav className="mx-auto flex h-(--header-h) max-w-6xl items-center justify-between gap-4 px-6">
        <a
          href="#inicio"
          aria-label="TuBeer Spa, ir al inicio"
          className="relative shrink-0"
        >
          <Image
            src="/tubeer_horizontal_negativo.png"
            alt="TuBeer Spa"
            width={2917}
            height={1655}
            preload
            sizes="10rem"
            className="h-16 w-auto opacity-100 transition-opacity duration-500 group-data-[theme=cream]:opacity-0 md:h-20"
          />
          <Image
            src="/tubeer_horizontal_positivo.png"
            alt=""
            width={2917}
            height={1655}
            sizes="10rem"
            className="absolute inset-0 h-16 w-auto opacity-0 transition-opacity duration-500 group-data-[theme=cream]:opacity-100 md:h-20"
          />
        </a>
        <ul className="hidden items-center gap-8 text-sm font-normal md:flex tracking-widest uppercase">
          {sections.map((s) => (
            <li key={s.href}>
              <a
                href={s.href}
                className="whitespace-nowrap transition-colors hover:text-malt focus-visible:text-malt group-data-[theme=cream]:hover:text-barrel group-data-[theme=cream]:focus-visible:text-barrel"
              >
                {s.label}
              </a>
            </li>
          ))}
          <li className="flex items-center gap-1">
            <a
              href={booking.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${contactClass} group-data-[theme=cream]:bg-forest group-data-[theme=cream]:text-cream group-data-[theme=cream]:hover:bg-moss group-data-[theme=cream]:focus-visible:bg-moss md:px-5`}
            >
              Contactar
            </a>

            <BeerMugIcon className="size-12 transition-colors duration-500" />
          </li>
        </ul>

        {/* Mobile: jarra + hamburguesa que abre el drawer */}
        <div className="flex items-center gap-1 md:hidden">
          <BeerMugIcon className="size-10 transition-colors duration-500" />
          <MobileMenu>
            <ul className="mt-10 flex flex-col gap-6">
              {sections.map((s) => (
                <li key={s.href}>
                  <a
                    href={s.href}
                    className="text-h4 font-normal! transition-colors hover:text-malt focus-visible:text-malt"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={booking.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${contactClass} mt-auto text-center text-xs`}
            >
              Contactar
            </a>
          </MobileMenu>
        </div>
      </nav>
    </HeaderShell>
  );
}
