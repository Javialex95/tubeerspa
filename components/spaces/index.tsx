import Image from "next/image";
import SpacesSlider from "./SpacesSlider";
import { type Group, type Photo, groups } from "./groups";

// La foto grande ocupa todo el ancho; el resto llena la altura disponible y su ancho
// sale de la proporción de sus fotos. El max-h (88vw ÷ proporción) evita recortes en pantallas angostas.
const GROUP_CLASS: Record<Group["layout"], string> = {
  single: "grid w-full",
  trio: "aspect-[29/20] max-h-[60.7vw] grid grid-rows-2 gap-3",
  duo: "aspect-2/1 max-h-[44vw] grid grid-cols-2 gap-3",
};

const SIZES: Record<Group["layout"], string> = {
  single: "100vw",
  trio: "(min-width: 1280px) 580px, 55vw",
  duo: "(min-width: 1280px) 640px, 44vw",
};

function Cell({
  photo,
  sizes,
  className = "rounded-2xl",
}: {
  photo: Photo;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes={sizes}
        draggable={false}
        className="object-cover transition-transform duration-1000 ease-out hover:scale-105 motion-reduce:transition-none"
      />
    </div>
  );
}

function GroupView({ group }: { group: Group }) {
  const sizes = SIZES[group.layout];

  if (group.layout === "trio") {
    const [portrait, ...landscapes] = group.photos;
    return (
      <div
        className={`${GROUP_CLASS.trio} h-full max-w-[88vw] ${
          group.reverse ? "grid-cols-[14fr_9fr]" : "grid-cols-[9fr_14fr]"
        }`}
      >
        <Cell
          photo={portrait}
          sizes="(min-width: 1280px) 360px, 35vw"
          className={`rounded-2xl row-span-2 ${group.reverse ? "col-start-2 row-start-1" : ""}`}
        />
        {landscapes.map((photo) => (
          <Cell key={photo.src} photo={photo} sizes={sizes} />
        ))}
      </div>
    );
  }

  if (group.layout === "single") {
    return (
      <div className={`${GROUP_CLASS.single} h-full`}>
        <Cell photo={group.photos[0]} sizes={sizes} className="" />
      </div>
    );
  }

  return (
    <div className={`${GROUP_CLASS.duo} h-full max-w-[88vw]`}>
      {group.photos.map((photo) => (
        <Cell key={photo.src} photo={photo} sizes={sizes} />
      ))}
    </div>
  );
}

// Slider de espacios: una foto grande, luego tres, luego dos… cada grupo es una diapositiva.
export default function Spaces() {
  return (
    <section id="espacios" data-header-theme="black" aria-label="Nuestros espacios" className="theme-black flex h-svh min-h-140 flex-col py-12 md:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
        <h5 className="text-muted">Conoce TuBeer Spa</h5>
        <span className="block h-px w-12 bg-accent" />
        <h2>Nuestros espacios</h2>
      </div>

      <SpacesSlider
        label="Galería de espacios"
        slides={groups.map((group) => ({
          key: group.photos[0].src,
          fullWidth: group.layout === "single",
          content: <GroupView group={group} />,
        }))}
      />
    </section>
  );
}
