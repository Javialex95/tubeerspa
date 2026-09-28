import Image from "next/image";
import HeroCarousel from "./HeroCarousel";
import { slides } from "./slides";

// Server Component: renderiza imágenes y textos; HeroCarousel solo controla el estado.
export default function Hero() {
  return (
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
          className="flex flex-col items-center gap-6 text-center"
        >
          <h5 className="text-malt">{s.eyebrow}</h5>
          <span className="divider-malt" />
          <h1>{s.title}</h1>
          <p className="text-h4 text-display-thin">{s.subtitle}</p>
        </div>
      ))}
    />
  );
}
