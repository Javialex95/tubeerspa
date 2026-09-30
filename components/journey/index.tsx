import { booking, formatPrice, formats } from "@/components/plans/data";
import Notice from "@/components/plans/Notice";
import JourneyPicker from "./JourneyPicker";
import { type FormatData, STATIONS, stationsOf, toMinutes } from "./stations";

const data: FormatData[] = formats.map((format) => ({
  key: format.key,
  label: format.label,
  hint: format.hint,
  plans: format.categories.flatMap((category) =>
    category.plans.map((plan) => ({
      category: category.title,
      name: plan.name,
      duration: plan.duration,
      minutes: toMinutes(plan.duration),
      stations: stationsOf(plan),
      includes: plan.includes,
      prices: plan.prices.map((p) => ({ label: p.label, text: formatPrice(p.amount) })),
    })),
  ),
}));

// Recorrido: cada plan como una ruta por estaciones; al elegirlo se encienden las que incluye.
export default function Journey() {
  return (
    <section
      data-header-theme="forest"
      aria-label="Recorrido de cada plan"
      className="theme-forest hidden py-20 md:block"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h5 className="text-muted">Tu recorrido</h5>
          <span className="divider-malt" />
          <h2>Elige tu plan y mira el camino</h2>
        </div>

        <JourneyPicker
          stations={STATIONS.map(({ key, label }) => ({ key, label }))}
          formats={data}
          booking={{ href: booking.href, label: booking.label }}
          notice={<Notice />}
        />
      </div>
    </section>
  );
}
