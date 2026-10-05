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
  mapUrl:
    "https://www.google.com/maps/place/TuBeer+Spa/@5.5449957,-73.3486366,17z/data=!4m8!3m7!1s0x8e6a7defaa6d37bb:0xd0c6a370449d1fa8!8m2!3d5.5449957!4d-73.3486366",
  geo: { latitude: 5.5450838, longitude: -73.3477837 },
  // Resumen de opiniones de Google (actualizar cuando cambie).
  rating: { value: 4.9, count: 239 },
  priceRange: "Desde $90.000 COP por persona",
  // Horario de Google Business Profile. Viernes y sábado: abierto las 24 horas.
  hours: [
    {
      day: "Monday",
      label: "Lunes",
      opens: "09:30",
      closes: "22:00",
      text: "9:30 a.m. – 10:00 p.m.",
    },
    {
      day: "Tuesday",
      label: "Martes",
      opens: "08:00",
      closes: "22:30",
      text: "8:00 a.m. – 10:30 p.m.",
    },
    {
      day: "Wednesday",
      label: "Miércoles",
      opens: "08:00",
      closes: "22:00",
      text: "8:00 a.m. – 10:00 p.m.",
    },
    {
      day: "Thursday",
      label: "Jueves",
      opens: "08:00",
      closes: "22:30",
      text: "8:00 a.m. – 10:30 p.m.",
    },
    {
      day: "Friday",
      label: "Viernes",
      opens: "00:00",
      closes: "23:59",
      text: "Abierto las 24 horas",
    },
    {
      day: "Saturday",
      label: "Sábado",
      opens: "00:00",
      closes: "23:59",
      text: "Abierto las 24 horas",
    },
    {
      day: "Sunday",
      label: "Domingo",
      opens: "09:30",
      closes: "18:00",
      text: "9:30 a.m. – 6:00 p.m.",
    },
  ],
  themeColor: "#14301e",
} as const;
