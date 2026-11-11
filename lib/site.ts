// Datos del negocio compartidos por metadata, JSON-LD, sitemap y manifest.
export const site = {
  name: "TuBeer Spa",
  url: "https://tubeerspa.co",
  title: "TuBeer Spa · Spa cervecero en Tunja",
  description:
    "Spa cervecero en Tunja, Boyacá: jacuzzi espumoso, sauna con esencia cervecera, masaje relajante sedativo ritual del lúpulo y cata de cerveza. Planes para individual, pareja, grupo y familia. Reserva por WhatsApp.",
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
  mapUrl:
    "https://www.google.com/maps/place/TuBeer+Spa/@5.5449957,-73.3486366,17z/data=!4m8!3m7!1s0x8e6a7defaa6d37bb:0xd0c6a370449d1fa8!8m2!3d5.5449957!4d-73.3486366",
  geo: { latitude: 5.5450838, longitude: -73.3477837 },
  // Resumen de opiniones de Google (actualizar cuando cambie).
  rating: { value: 4.9, count: 239 },
  priceRange: "Desde $80.000 COP por persona",
  // Horario de atención. Los recargos se muestran en la sección Visítanos.
  hours: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      label: "Lunes a sábado",
      opens: "08:00",
      closes: "20:00",
      text: "8:00 a.m. – 8:00 p.m.",
    },
    {
      days: ["Sunday"],
      label: "Domingos",
      opens: "09:00",
      closes: "17:00",
      text: "9:00 a.m. – 5:00 p.m.",
    },
  ],
  hoursNotes: [
    "Las reservas de lunes a sábado en horarios de 9:00 p. m. y 10:00 p. m. tienen un recargo adicional del 10% sobre el valor del plan.",
    "Los domingos, las reservas en horarios de 6:00 p. m., 7:00 p. m. y 8:00 p. m. tienen un recargo del 10%.",
  ],
  themeColor: "#14301e",
} as const;
