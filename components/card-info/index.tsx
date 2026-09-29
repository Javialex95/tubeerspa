import { beerSpa, experience, plans } from "./cards";

// Tres cards informativas: apiladas en mobile, en fila desde tablet (md).
export default function CardInfo() {
  return (
    <section
      aria-label="Información TuBeer Spa"
      className="mx-auto max-w-6xl px-6 py-20"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <article className="theme-sand flex flex-col gap-6 rounded-2xl p-8">
          <h3>{beerSpa.title}</h3>
          <span className="divider-malt" />
          <p>{beerSpa.intro}</p>
          <ul className="flex flex-col gap-4">
            {beerSpa.items.map((item) => (
              <li key={item.title}>
                <h4 className="text-base">{item.title}</h4>
                <p className="text-p-sm">{item.description}</p>
              </li>
            ))}
          </ul>
        </article>

        <article className="theme-forest flex flex-col gap-6 rounded-2xl p-8">
          <h3>{experience.title}</h3>
          <span className="divider-malt" />
          <ol className="flex flex-col gap-4">
            {experience.steps.map((step, i) => (
              <li key={step.title} className="flex gap-4">
                <span className="text-h4 text-malt">{i + 1}</span>
                <div>
                  <h4 className="text-base">{step.title}</h4>
                  <p className="text-p-sm text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </article>

        <article className="theme-sand flex flex-col gap-6 rounded-2xl p-8">
          <h3>{plans.title}</h3>
          <span className="divider-malt" />
          <ul className="flex flex-col divide-y divide-border">
            {plans.items.map((item) => (
              <li key={item} className="text-p py-2">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-auto flex flex-col items-center gap-2 text-center">
            <p className="text-p-sm">{plans.price.prefix}</p>
            <p className="text-h2 text-barrel">{plans.price.amount}</p>
            <p className="text-p-sm">{plans.price.suffix}</p>
            <p className="text-p-sm mt-4">{plans.booking.label}</p>
            <p className="text-h4 rounded-full bg-malt px-6 py-2 text-forest">
              {plans.booking.phone}
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
