import { site } from "@/lib/site";

// Datos estructurados (schema.org) para SEO local. Server Component.
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
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
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", ...site.geo },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: site.rating.value,
      reviewCount: site.rating.count,
      bestRating: 5,
      worstRating: 1,
    },
    sameAs: [site.instagram],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
