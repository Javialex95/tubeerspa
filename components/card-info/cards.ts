export type Item = {
  title: string;
  description?: string;
};

export const beerSpa = {
  title: "¿Qué es un Beer Spa?",
  intro:
    "TubeerSpa transforma ingredientes naturales como malta, lúpulo y levadura en una experiencia privada de bienestar diseñada para relajar cuerpo y mente.",
  items: [
    {
      title: "Jacuzzi privado",
      description: "Relajación profunda en un ambiente íntimo.",
    },
    {
      title: "Ingredientes naturales",
      description:
        "Malta, lúpulo y levadura que nutre tu piel y revitaliza.",
    },
    {
      title: "Experiencia sensorial",
      description:
        "Aromas, texturas y temperaturas que despierten los sentidos.",
    },
    {
      title: "Espacio exclusivo",
      description: "Privacidad total para desconectar y disfrutar.",
    },
  ] satisfies Item[],
};

export const experience = {
  title: "Tu experiencia",
  steps: [
    {
      title: "Bienvenida",
      description: "Recepción y preparación para tu ritual.",
    },
    {
      title: "Jacuzzi de cerveza",
      description: "Sumérgete en aguas cálidas con ingredientes naturales.",
    },
    {
      title: "Momento social",
      description: "Disfruta tu cerveza artesanal y snacks seleccionados.",
    },
    {
      title: "Sauna & descanso",
      description: "Purifica, relaja y renueva tu energía.",
    },
    {
      title: "Cierre",
      description: "Hidratación y despedida de tu experiencia.",
    },
  ] satisfies Item[],
};

export const plans = {
  title: "Experiencias",
  items: [
    "Plan Amigos",
    "Plan individual",
    "Plan familiar",
    "Plan Pareja",
    "Cheers Experience",
    "Circuito Cervecero",
    "Masajes relajantes",
  ],
  price: {
    prefix: "Desde",
    amount: "$90.000",
    suffix: "por persona",
  },
  booking: {
    label: "Reserva por WhatsApp",
    phone: "+57 313 343 7824",
  },
};
