import { site } from "@/lib/site";
import { booking } from "@/components/plans/data";

// El horario sigue siendo de ejemplo: reemplazar con el real.
export const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1985.5739288278053!2d-73.34778365753326!3d5.5450837987055825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e6a7defaa6d37bb%3A0xd0c6a370449d1fa8!2sTuBeer%20Spa!5e0!3m2!1ses!2sco!4v1790630968951!5m2!1ses!2sco";

// Ficha de Google Maps abierta en la pestaña de opiniones.
export const REVIEWS_LINK =
  "https://www.google.com/maps/place/TuBeer+Spa/@5.5449957,-73.3486366,17z/data=!4m8!3m7!1s0x8e6a7defaa6d37bb:0xd0c6a370449d1fa8!8m2!3d5.5449957!4d-73.3486366!9m1!1b1!16s%2Fg%2F11vwr1v26j";

export const MAP_LINK =
  "https://www.google.com/maps/search/?api=1&query=TuBeer+Spa+Tunja";

export const locationInfo: { label: string; value: string; href?: string }[] = [
  {
    label: "Dirección",
    value:
      "Av. Universitaria, Tunja, Boyacá · Fácil acceso desde Carrera 6 y Av. Olímpica",
  },
  { label: "Horario", value: "Martes a domingo · 10:00 a.m. – 9:00 p.m." },
  { label: "WhatsApp", value: booking.phone, href: booking.href },
  { label: "Instagram", value: "@tubeerspa", href: site.instagram },
];
