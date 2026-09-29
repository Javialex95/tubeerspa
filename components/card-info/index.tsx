import WaterRipples from "./WaterRipples";
import { beerSpa, experience, plans } from "./cards";

// Tres cards informativas: apiladas en mobile, en fila desde tablet (md).
// Cada card tiene unas ondas de agua animadas que asoman por debajo (detrás de la card).
export default function CardInfo() {
  return (
    <section
      id="experiencia"
      data-header-theme="cream"
      aria-label="Información TuBeer Spa"
      className="relative isolate overflow-hidden py-20"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-6 md:grid-cols-3">
        <article className="theme-sand relative flex max-h-[80vh] flex-col gap-4 rounded-2xl p-6 shadow-xl lg:p-8">
          <h4>{beerSpa.title}</h4>
          <span className="divider-malt" />
          <p className="text-p-sm">{beerSpa.intro}</p>
          <ul className="flex flex-col gap-3">
            {beerSpa.items.map((item) => (
              <li key={item.title}>
                <h4 className="text-sm">{item.title}</h4>
                <p className="text-p-sm">{item.description}</p>
              </li>
            ))}
          </ul>
          <WaterRipples className="pointer-events-none absolute top-full left-1/2 -z-10 w-[115%] -translate-x-1/2 -translate-y-1/2" />
        </article>

        <article className="theme-forest relative flex max-h-[80vh] flex-col gap-4 rounded-2xl p-6 shadow-xl lg:p-8">
          <h4>{experience.title}</h4>
          <span className="divider-malt" />
          <ol className="flex flex-col gap-3">
            {experience.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="text-h4 text-malt">{i + 1}</span>
                <div>
                  <h4 className="text-sm">{step.title}</h4>
                  <p className="text-p-sm text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <WaterRipples className="pointer-events-none absolute top-full left-1/2 -z-10 w-[115%] -translate-x-1/2 -translate-y-1/2" />
        </article>

        <article className="theme-sand relative flex max-h-[80vh] flex-col gap-4 rounded-2xl p-6 shadow-xl lg:p-8">
          <h4>{plans.title}</h4>
          <span className="divider-malt" />
          <ul className="flex flex-col divide-y divide-border">
            {plans.items.map((item) => (
              <li key={item} className="text-p-sm py-1.5">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col items-center gap-1 text-center">
            <p className="text-p-sm">{plans.price.prefix}</p>
            <p className="text-h3 text-barrel">{plans.price.amount}</p>
            <p className="text-p-sm">{plans.price.suffix}</p>
            <p className="text-p-sm mt-3">{plans.booking.label}</p>
            <p className="text-p-sm rounded-full bg-malt px-5 py-1.5 text-forest">
              {plans.booking.phone}
            </p>
          </div>
          <WaterRipples className="pointer-events-none absolute top-full left-1/2 -z-10 w-[115%] -translate-x-1/2 -translate-y-1/2" />
        </article>
      </div>
    </section>
  );
}
