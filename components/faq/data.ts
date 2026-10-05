import { site } from "@/lib/site";
import {
  booking,
  formatPrice,
  formats,
  notes,
  notice,
} from "@/components/plans/data";

export type Faq = { question: string; answer: string };

const circuito = formats[0].categories[0].plans[0];

// Respuestas factuales (salen de los datos del sitio). Las usan la sección visible, el JSON-LD y llms.txt.
export const faqs: Faq[] = [
  {
    question: "¿Qué es un Beer Spa?",
    answer:
      "TuBeer Spa, en Tunja, Boyacá, transforma ingredientes naturales como malta, lúpulo y levadura en una experiencia privada de bienestar pensada para relajar cuerpo y mente. Combina masajes con aceite de lúpulo, sauna con esencia cervecera, jacuzzi espumoso y cata de cerveza.",
  },
  {
    question: "¿Cómo es la experiencia en TuBeer Spa?",
    answer:
      "Empieza con la bienvenida y la preparación de tu ritual; sigue con el jacuzzi de cerveza, un momento social con cerveza artesanal y snacks, sauna y descanso, y cierra con hidratación y despedida. Todo en un espacio privado y exclusivo.",
  },
  {
    question: "¿Dónde queda TuBeer Spa en Tunja?",
    answer:
      "Estamos en la Av. Universitaria, Tunja, Boyacá, cerca de Unicentro Tunja y Macro, con fácil acceso desde la Carrera 6 y la Av. Olímpica.",
  },
  {
    question: "¿Cuál es el horario de atención?",
    answer: site.hours.map((h) => `${h.label} ${h.text}`).join("; ") + ".",
  },
  {
    question: "¿Cómo reservo?",
    answer: `Reserva por WhatsApp al ${booking.phone}. También puedes escribirnos por Instagram en @tubeerspa.`,
  },
  {
    question: "¿Cuánto cuestan los planes?",
    answer: `Las experiencias empiezan desde ${formatPrice(90000)} por persona. El precio final depende del formato (individual, pareja, grupal o familiar), la duración y los servicios incluidos.`,
  },
  {
    question: "¿Qué formatos de plan tienen?",
    answer:
      formats.map((f) => `${f.label} (${f.hint.toLowerCase()})`).join("; ") +
      ".",
  },
  {
    question: "¿Qué incluye el Circuito Cervecero?",
    answer: `Dura ${circuito.duration.replace(" h", " horas")} e incluye: ${circuito.includes.join(", ").toLowerCase()}. Para una persona cuesta ${formatPrice(circuito.prices[0].amount)} COP.`,
  },
  {
    question: "¿Tengo que llenar algún formulario antes de ir?",
    answer: `Sí. ${notice.items.join(" ")}`,
  },
  {
    question: "¿Puedo celebrar una ocasión especial o ampliar mi plan?",
    answer: notes.join(" "),
  },
  {
    question: "¿Hay ascensor?",
    answer:
      "Sí, contamos con un ascensor al fondo de la entrada para tu comodidad.",
  },
];
