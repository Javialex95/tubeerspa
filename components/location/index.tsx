import BeerMugIcon from "@/components/header/BeerMugIcon";
import { booking } from "@/components/plans/data";
import { MAP_LINK, MAP_SRC, locationInfo } from "./info";

// Ubicación: mapa e información en dos filas (mobile) o dos columnas (md+).
export default function Location() {
  return (
    <section
      id="ubicacion"
      data-header-theme="forest"
      aria-label="Ubicación TuBeer Spa"
      className="theme-forest min-h-screen"
    >
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

        <div className="flex items-center justify-between gap-6">
          <div className="flex flex-col gap-6">
            <h3>Visítanos</h3>
            <span className="divider-malt" />
            <dl className="flex flex-col gap-6">
              {locationInfo.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <dt className="text-h5 text-malt">{item.label}</dt>
                  <dd className="text-p whitespace-pre-line">
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline-offset-4 hover:underline"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={booking.href}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start whitespace-nowrap rounded-full bg-malt px-6 py-3 font-semibold tracking-widest text-forest uppercase hover-zoom hover:bg-honey focus-visible:bg-honey"
              >
                Contactar
              </a>
              <a
                href={MAP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap rounded-full border border-malt px-6 py-3 font-semibold tracking-widest text-malt uppercase hover-zoom hover:bg-malt hover:text-forest focus-visible:bg-malt focus-visible:text-forest"
              >
                Cómo llegar
              </a>
            </div>
          </div>
          {/* <BeerMugIcon className="size-32 shrink-0 sm:size-48 lg:size-64" /> */}
        </div>
      </div>
    </section>
  );
}
