// Datos del negocio compartidos por metadata, JSON-LD, sitemap y manifest.
export const site = {
  name: "TuBeer Spa",
  url: "https://tubeerspa.co",
  title: "TuBeer Spa · Spa cervecero en Tunja",
  description:
    "Spa cervecero en Tunja, Boyacá: jacuzzi espumoso, sauna con esencia cervecera, masajes con aceite de lúpulo y cata de cerveza. Planes para individual, pareja, grupo y familia. Reserva por WhatsApp.",
  keywords: [
    "spa cervecero",
    "spa en Tunja",
    "spa de cerveza",
    "jacuzzi en Tunja",
    "sauna en Tunja",
    "masajes en Tunja",
    "plan de pareja Tunja",
    "cumpleaños spa Tunja",
    "TuBeer Spa",
  ],
  phone: "+573133437824",
  instagram: "https://www.instagram.com/tubeerspa",
  address: {
    street: "Av. Universitaria",
    city: "Tunja",
    region: "Boyacá",
    country: "CO",
  },
  geo: { latitude: 5.5450838, longitude: -73.3477837 },
  // Resumen de opiniones de Google (actualizar cuando cambie).
  rating: { value: 4.9, count: 239 },
  priceRange: "$45.000 - $539.000 COP",
  themeColor: "#14301e",
} as const;
