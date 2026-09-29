import { MAP_SRC, locationInfo } from "./info";

// Ubicación: mapa e información en dos filas (mobile) o dos columnas (md+).
export default function Location() {
  return (
    <section aria-label="Ubicación TuBeer Spa" className="theme-forest">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-20 md:grid-cols-2">
        <div className="aspect-4/3 w-full overflow-hidden rounded-2xl">
          <iframe
            src={MAP_SRC}
            title="Mapa de ubicación de TuBeer Spa"
            className="h-full w-full border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </div>

        <div className="flex flex-col gap-6">
          <h3>Visítanos</h3>
          <span className="divider-malt" />
          <dl className="flex flex-col gap-6">
            {locationInfo.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <dt className="text-h5 text-malt">{item.label}</dt>
                <dd className="text-p">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
