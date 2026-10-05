import Image from "next/image";
import HeroCarousel from "./HeroCarousel";
import { slides } from "./slides";

// Server Component: renderiza imágenes y textos; HeroCarousel solo controla el estado.
export default function Hero() {
  return (
    <>
      {/* h1 fijo con la palabra clave; los títulos de cada slide son párrafos. */}
      <h1 className="sr-only">TuBeer Spa, spa cervecero en Tunja</h1>
      <HeroCarousel
        label="Experiencias TuBeer Spa"
        images={slides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={s.alt}
            fill
            sizes="100vw"
            preload={i === 0}
            draggable={false}
            className="object-cover"
          />
        ))}
        captions={slides.map((s) => (
          <div
            key={s.src}
            className="flex flex-col items-center gap-6 text-center text-shadow-lg text-shadow-black/60"
          >
            {/* <h5 className="text-malt">{s.eyebrow}</h5> */}
            <span className="divider-malt" />
            <p className="text-h1">{s.title}</p>
            <p className="text-h4 text-display-thin">{s.subtitle}</p>
          </div>
        ))}
      />
    </>
  );
}
