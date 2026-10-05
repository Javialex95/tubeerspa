import { faqs } from "@/components/faq/data";
import { formatPrice, formats } from "@/components/plans/data";
import { reviews } from "@/components/reviews/data";
import { site } from "@/lib/site";

// Resumen en texto plano para asistentes de IA (convención llms.txt).
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "## Datos del negocio",
    `- Tipo: spa cervecero (day spa)`,
    `- Dirección: ${site.address.street}, ${site.address.city}, ${site.address.region}, Colombia`,
    `- Coordenadas: ${site.geo.latitude}, ${site.geo.longitude}`,
    `- WhatsApp / reservas: ${site.phone}`,
    `- Instagram: ${site.instagram}`,
    `- Sitio web: ${site.url}`,
    `- Calificación en Google: ${site.rating.value} de 5 (${site.rating.count} opiniones)`,
    `- Horario: ${site.hours.map((h) => `${h.label} ${h.text}`).join("; ")}`,
    `- Precios: ${site.priceRange}`,
    "",
    "## Planes y precios (COP)",
  ];

  for (const format of formats) {
    lines.push("", `### ${format.label} (${format.hint})`);
    for (const category of format.categories) {
      for (const plan of category.plans) {
        const price = plan.prices
          .map((p) =>
            p.label
              ? `${p.label} ${formatPrice(p.amount)}`
              : formatPrice(p.amount),
          )
          .join(" / ");
        lines.push(
          `- ${category.title} · ${plan.name} (${plan.duration}): ${price}. Incluye: ${plan.includes.join(", ")}.`,
        );
      }
    }
  }

  lines.push("", "## Preguntas frecuentes");
  for (const faq of faqs) lines.push("", `**${faq.question}**`, faq.answer);

  lines.push("", "## Opiniones destacadas de Google");
  for (const r of reviews)
    lines.push(`- ${r.author} (5/5): "${r.text}${r.truncated ? "…" : ""}"`);

  return new Response(lines.join("\n") + "\n", {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
