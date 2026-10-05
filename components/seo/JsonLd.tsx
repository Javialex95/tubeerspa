import { faqs } from "@/components/faq/data";
import { formats } from "@/components/plans/data";
import { site } from "@/lib/site";

// Catálogo de planes como ofertas: una OfferCatalog por formato.
const catalog = formats.map((format) => ({
  "@type": "OfferCatalog",
  name: `Planes ${format.label.toLowerCase()}`,
  description: format.hint,
  itemListElement: format.categories.flatMap((category) =>
    category.plans.flatMap((plan) =>
      plan.prices.map((price) => ({
        "@type": "Offer",
        name: [plan.name, price.label].filter(Boolean).join(" · "),
        price: price.amount,
        priceCurrency: "COP",
        itemOffered: {
          "@type": "Service",
          name: `${category.title}: ${plan.name} (${format.label.toLowerCase()})`,
          description: `Duración ${plan.duration}. Incluye: ${plan.includes.join(", ")}.`,
          provider: { "@id": `${site.url}/#negocio` },
        },
      })),
    ),
  ),
}));

// Datos estructurados (schema.org) para SEO local y para IAs. Server Component.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "DaySpa",
        "@id": `${site.url}/#negocio`,
        name: site.name,
        description: site.description,
        url: site.url,
        image: `${site.url}/opengraph-image`,
        logo: `${site.url}/tubeer_vertical_negativo.png`,
        telephone: site.phone,
        priceRange: site.priceRange,
        currenciesAccepted: "COP",
        areaServed: { "@type": "City", name: site.address.city },
        knowsLanguage: "es",
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          addressCountry: site.address.country,
        },
        geo: { "@type": "GeoCoordinates", ...site.geo },
        openingHoursSpecification: site.hours.map((h) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: h.day,
          opens: h.opens,
          closes: h.closes,
        })),
        hasMap: site.mapUrl,
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: site.rating.value,
          reviewCount: site.rating.count,
          bestRating: 5,
          worstRating: 1,
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Planes y precios de TuBeer Spa",
          itemListElement: catalog,
        },
        sameAs: [site.instagram],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#sitio`,
        url: site.url,
        name: site.name,
        inLanguage: "es-CO",
        publisher: { "@id": `${site.url}/#negocio` },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
