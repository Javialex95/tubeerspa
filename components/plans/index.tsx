import Notice from "./Notice";
import PlansTabs from "./PlansTabs";
import { type Plan, booking, formatPrice, formats, notes } from "./data";

// Fila de carta: nombre ····· precio, y debajo duración e ingredientes.
function PlanRow({ plan }: { plan: Plan }) {
  return (
    <li className="flex flex-col gap-1 py-4">
      <div className="flex items-baseline gap-3">
        <h4 className="text-base">{plan.name}</h4>
        <span aria-hidden className="min-w-4 flex-1 translate-y-[-0.25em] border-b border-dotted border-foam/50" />
        <p className="flex flex-col items-end leading-tight font-semibold! text-foam">
          {plan.prices.map((price) => (
            <span key={price.label ?? "base"} className="whitespace-nowrap">
              {price.label && <span className="text-p-sm mr-2 font-normal">{price.label}</span>}
              {formatPrice(price.amount)}
            </span>
          ))}
        </p>
      </div>
      <p className="text-p-sm text-muted">
        <span className="font-semibold text-malt">{plan.duration}</span>
        <span aria-hidden> · </span>
        {plan.includes.join(" · ")}
      </p>
    </li>
  );
}

// Planes y precios: carta con selector de formato (individual, pareja, grupal, familiar).
export default function Plans() {
  return (
    <section
      data-header-theme="clay"
      aria-label="Planes y precios"
      className="theme-clay py-20 md:hidden"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h5 className="text-muted">Elige tu ritual</h5>
          <span className="divider-malt" />
          <h2>Planes y precios</h2>
        </div>

        <PlansTabs
          label="Formato del plan"
          tabs={formats.map((format) => ({
            key: format.key,
            label: format.label,
            panel: (
              <div className="flex flex-col gap-10">
                <p className="text-p-sm text-center">{format.hint}</p>
                <div className="grid grid-cols-1 gap-x-16 gap-y-10 md:grid-cols-2">
                  {format.categories.map((category) => (
                    <section key={category.title} aria-label={category.title}>
                      <h3 className="text-h4 border-b border-foam/40 pb-3">{category.title}</h3>
                      <ul className="divide-y divide-border">
                        {category.plans.map((plan) => (
                          <PlanRow key={plan.name} plan={plan} />
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </div>
            ),
          }))}
        />

        <div className="flex flex-col items-center gap-6 text-center">
          <ul className="flex flex-col gap-1">
            {notes.map((note) => (
              <li key={note} className="text-p-sm">
                {note}
              </li>
            ))}
          </ul>
          <a
            href={booking.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-forest px-8 py-3 font-semibold tracking-widest text-cream uppercase hover-zoom hover:bg-moss focus-visible:bg-moss"
          >
            {booking.label} · {booking.phone}
          </a>
          <Notice />
        </div>
      </div>
    </section>
  );
}
