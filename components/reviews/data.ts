export type Review = {
  author: string;
  text: string;
  when: string;
  truncated?: boolean; // en Google se corta con "Más": reemplazar por el texto completo
};

// Reseñas reales de Google (5 estrellas).
export const reviews: Review[] = [
  {
    author: "Elisa Alfonso",
    when: "Hace 2 meses",
    text: "El lugar es hermoso, acogedor, desde que llegas se siente mucha paz, todo el personal es muy amable, excelente servicio, super recomendado para plan con amigas, pareja o sola si quieres regalarte un momento de relax",
    truncated: true,
  },
  {
    author: "Mel Fontav",
    when: "Hace un mes",
    text: "Excelente servicio. Espacios hermosos, limpios, tranquilos, atención personalizada. 20/10 super recomendado. Gracias por todo.",
    truncated: true,
  },
  {
    author: "Lucho Soler",
    when: "Hace 2 meses",
    text: "La experiencia en TuBeer Spa estuvo relajante, espacios agradables, muy cómodos, la atención por parte del personal estuvo excelente, todo lo que necesitas para un día de descanso, para consentirte, para cuidarte, para conocer que si existen espacios donde puedes descansar y vivir increíbles momentos.",
  },
  {
    author: "Stiben Pacheco",
    when: "Hace 7 meses",
    text: "Muy recomendado, atención muy buena, perfecto para venir en pareja y pasar una tarde relajante ok su excelente masaje.",
  },
  {
    author: "Helen Vasquez",
    when: "Hace un mes",
    text: "Servicio fue excelente y el sitio espectacular cuenta con todos los implementos que hacen sentir que sea un momento inolvidable",
  },
];
