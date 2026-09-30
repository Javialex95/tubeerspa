export type Price = {
  label?: string;
  amount: number; // COP
};

export type Plan = {
  name: string;
  includes: string[];
  duration: string;
  prices: Price[];
};

export type Category = {
  title: string;
  plans: Plan[];
};

export type Format = {
  key: "individual" | "pareja" | "grupal" | "familiar";
  label: string;
  hint: string;
  categories: Category[];
};

// Servicios que se repiten en casi todos los planes.
const S = {
  cata: "Cata cervecera",
  masaje: "Masaje relajante ritual del lúpulo",
  capilar: "Masaje capilar",
  zen: "Zen volcánico",
  sensorial: "Relajación sensorial",
  mascarilla: "Mascarilla facial",
  sauna: "Sauna con esencia cervecera",
  jacuzzi: "Jacuzzi espumoso",
  cervezaIlimitada: "Cerveza ilimitada",
  comida: "Comida a elección",
  bebida1: "1 bebida a elección",
  bebidas2: "2 bebidas a elección",
  bebidas2Persona: "2 bebidas a elección por persona",
  bebida1Persona: "1 bebida a elección por persona",
} as const;

const cuerpo = [S.masaje, S.capilar, S.zen, S.sensorial, S.mascarilla];
const circuitoCompleto = [S.cata, ...cuerpo, S.sauna, S.jacuzzi, S.cervezaIlimitada, S.comida];

const one = (amount: number): Price[] => [{ amount }];

export const formats: Format[] = [
  {
    key: "individual",
    label: "Individual",
    hint: "Precio por persona",
    categories: [
      {
        title: "Circuitos",
        plans: [
          { name: "Circuito Cervecero", includes: circuitoCompleto, duration: "3:00 h", prices: one(286000) },
          { name: "Plan Relax", includes: [...cuerpo, S.sauna, S.jacuzzi, "2 bebidas a elección"], duration: "1:30 h", prices: one(253000) },
        ],
      },
      {
        title: "Circuitos parciales",
        plans: [
          { name: "Opción 1", includes: [...cuerpo, S.jacuzzi, S.bebidas2Persona], duration: "2:00 h", prices: one(199000) },
          { name: "Opción 2", includes: [...cuerpo, S.sauna, S.bebida1Persona], duration: "1:20 h", prices: one(165000) },
          { name: "Opción 3", includes: [S.sauna, S.jacuzzi, S.bebidas2], duration: "1:40 h", prices: one(143000) },
        ],
      },
      {
        title: "Corta duración",
        plans: [
          { name: "Opción A", includes: [...cuerpo, S.sauna, S.jacuzzi, S.cervezaIlimitada], duration: "1:35 h", prices: one(200000) },
          { name: "Opción B", includes: [...cuerpo, S.sauna, S.jacuzzi, "2 bebidas"], duration: "1:40 h", prices: one(176000) },
          { name: "Opción C", includes: [...cuerpo, S.jacuzzi, S.cervezaIlimitada], duration: "1:20 h", prices: one(190000) },
          { name: "Opción D", includes: [...cuerpo, S.jacuzzi, S.bebidas2], duration: "1:20 h", prices: one(165000) },
        ],
      },
      {
        title: "Planes parciales",
        plans: [
          { name: "Plan 1", includes: ["Masaje zen con piedras volcánicas, cuerpo completo, aceite de lúpulo", "Bebida"], duration: "60 min", prices: one(95000) },
          { name: "Plan 2", includes: ["Masaje zen con piedras volcánicas, cuello y espalda, aceite de lúpulo", "Bebida"], duration: "40 min", prices: one(80000) },
          { name: "Plan 3", includes: ["Sauna", "Bebida"], duration: "30 min", prices: one(80000) },
          { name: "Plan 4", includes: [S.jacuzzi, "Bebida ilimitada"], duration: "60 min", prices: one(130000) },
          { name: "Plan 5", includes: [S.jacuzzi, "2 bebidas por persona"], duration: "60 min", prices: one(90000) },
        ],
      },
    ],
  },
  {
    key: "pareja",
    label: "Pareja",
    hint: "Precio por pareja",
    categories: [
      {
        title: "Circuitos",
        plans: [
          { name: "Circuito Cervecero", includes: circuitoCompleto, duration: "3:00 h", prices: one(539000) },
          { name: "Plan Pareja", includes: [...cuerpo, S.sauna, S.jacuzzi, S.cervezaIlimitada, S.comida], duration: "2:40 h", prices: one(517000) },
          { name: "Plan Duo Cheers", includes: [...cuerpo, S.sauna, S.jacuzzi, S.bebidas2Persona], duration: "2:40 h", prices: one(385000) },
          { name: "Plan Relax Pareja", includes: [S.sauna, S.jacuzzi, S.cervezaIlimitada], duration: "1:30 h", prices: one(290000) },
        ],
      },
      {
        title: "Circuitos parciales",
        plans: [
          { name: "Opción 1", includes: [...cuerpo, S.jacuzzi, S.bebidas2Persona], duration: "2:00 h", prices: one(352000) },
          { name: "Opción 2", includes: [...cuerpo, S.sauna, S.bebida1Persona], duration: "1:20 h", prices: one(297000) },
          { name: "Opción 3", includes: [S.sauna, S.jacuzzi, S.bebidas2Persona], duration: "1:40 h", prices: one(248000) },
        ],
      },
      {
        title: "Corta duración",
        plans: [
          { name: "Opción A", includes: [...cuerpo, S.sauna, S.jacuzzi, S.cervezaIlimitada], duration: "1:35 h", prices: one(352000) },
          { name: "Opción B", includes: [...cuerpo, S.sauna, S.jacuzzi, "2 bebidas"], duration: "1:40 h", prices: one(308000) },
          { name: "Opción C", includes: [...cuerpo, S.jacuzzi, S.cervezaIlimitada], duration: "1:20 h", prices: one(308000) },
          { name: "Opción D", includes: [...cuerpo, S.jacuzzi, S.bebidas2], duration: "1:20 h", prices: one(259000) },
        ],
      },
      {
        title: "Planes parciales",
        plans: [
          { name: "Plan 1", includes: ["Masaje zen con piedras volcánicas, cuerpo completo, aceite de lúpulo", "Bebida"], duration: "60 min", prices: one(190000) },
          { name: "Plan 2", includes: ["Masaje zen con piedras volcánicas, cuello y espalda, aceite de lúpulo", "Bebida"], duration: "40 min", prices: one(120000) },
          { name: "Plan 3", includes: ["Sauna para dos", "Bebida"], duration: "30 min", prices: one(100000) },
          { name: "Plan 4", includes: [S.jacuzzi, "Bebida ilimitada"], duration: "60 min", prices: one(190000) },
          { name: "Plan 5", includes: [S.jacuzzi, "2 bebidas por persona"], duration: "60 min", prices: one(150000) },
        ],
      },
    ],
  },
  {
    key: "grupal",
    label: "Grupal",
    hint: "3 o más personas · precio por persona",
    categories: [
      {
        title: "Circuitos",
        plans: [
          { name: "Circuito Cervecero", includes: circuitoCompleto, duration: "3:00 h", prices: one(260000) },
          { name: "Plan Amigos", includes: [...cuerpo, S.sauna, S.jacuzzi, S.cervezaIlimitada, S.comida], duration: "2:40 h", prices: one(250000) },
          { name: "Plan Cheers Amigos", includes: [...cuerpo, S.sauna, S.jacuzzi, S.bebidas2Persona], duration: "2:40 h", prices: one(180000) },
          { name: "Plan Relax Amigos", includes: [S.sauna, S.jacuzzi, S.cervezaIlimitada], duration: "1:30 h", prices: one(130000) },
        ],
      },
      {
        title: "Circuitos parciales",
        plans: [
          { name: "Opción 1", includes: [...cuerpo, S.jacuzzi, S.bebidas2Persona], duration: "2:00 h", prices: one(165000) },
          { name: "Opción 2", includes: [...cuerpo, S.sauna, S.bebida1Persona], duration: "1:20 h", prices: one(138000) },
          { name: "Opción 3", includes: [S.sauna, S.jacuzzi, S.bebidas2Persona], duration: "1:40 h", prices: one(100000) },
        ],
      },
      {
        title: "Corta duración",
        plans: [
          { name: "Opción A", includes: [...cuerpo, S.sauna, S.jacuzzi, S.cervezaIlimitada], duration: "1:35 h", prices: one(165000) },
          { name: "Opción B", includes: [...cuerpo, S.sauna, S.jacuzzi, "2 bebidas"], duration: "1:40 h", prices: one(148000) },
          { name: "Opción C", includes: [...cuerpo, S.jacuzzi, S.cervezaIlimitada], duration: "1:20 h", prices: one(143000) },
          { name: "Opción D", includes: [S.masaje, S.capilar, S.zen, S.mascarilla, S.jacuzzi, S.bebidas2], duration: "1:20 h", prices: one(120000) },
        ],
      },
      {
        title: "Planes parciales",
        plans: [
          { name: "Plan 1", includes: ["Masaje zen volcánico, cuerpo completo, aceite de lúpulo"], duration: "50 min", prices: one(95000) },
          { name: "Plan 2", includes: ["Masaje zen volcánico, cuello y espalda, aceite de lúpulo"], duration: "40 min", prices: one(60000) },
          { name: "Plan 3", includes: ["Sauna", "Bebida"], duration: "30 min", prices: one(60000) },
          { name: "Plan 4", includes: [S.jacuzzi, "Bebida ilimitada"], duration: "60 min", prices: one(90000) },
          { name: "Plan 5", includes: [S.jacuzzi, "2 bebidas por persona"], duration: "60 min", prices: one(70000) },
        ],
      },
    ],
  },
  {
    key: "familiar",
    label: "Familiar",
    hint: "3 o más personas con menores de 14 años",
    categories: [
      {
        title: "Planes familiares",
        plans: [
          {
            name: "Plan Familiar",
            includes: ["Masaje relajante cuerpo completo / masaje infantil", S.capilar, S.zen, S.sensorial, S.jacuzzi, "1 bebida por persona (malteada o jugo para niños)"],
            duration: "2:30 h",
            prices: [{ label: "Adulto", amount: 165000 }, { label: "Menor", amount: 90000 }],
          },
        ],
      },
      {
        title: "Corta duración",
        plans: [
          {
            name: "Express Familiar",
            includes: [S.masaje, S.capilar, S.zen, S.sensorial, S.jacuzzi, "1 bebida por persona (malteada o jugo para niños)"],
            duration: "1:30 h",
            prices: [{ label: "Adulto", amount: 120000 }, { label: "Menor", amount: 70000 }],
          },
          {
            name: "Jacuzzi",
            includes: [S.jacuzzi, "1 bebida por persona (malteada o jugo para niños)"],
            duration: "1:00 h",
            prices: [{ label: "Adulto", amount: 90000 }, { label: "Menor", amount: 45000 }],
          },
        ],
      },
    ],
  },
];

export const formatPrice = (amount: number) => `$${amount.toLocaleString("es-CO")}`;

export const notes = [
  "Puedes ampliar el plan en número de personas, duración y servicios en el momento que quieras.",
  "Si celebras una ocasión especial, la decoración no tiene costo adicional (excepto despedidas de solter@).",
];

export const booking = {
  label: "Reserva por WhatsApp",
  phone: "+57 313 343 7824",
  href: "https://wa.me/573133437824",
};

export const notice = {
  title: "Importante",
  intro: "Les recordamos que:",
  items: [
    "Es indispensable leer las políticas de TuBeer Spa.",
    "Cada asistente debe diligenciar el formulario de consentimiento antes de su visita.",
  ],
  form: {
    label: "Formulario de consentimiento",
    href: "https://forms.gle/2inFxgbYSptHjHxx5",
  },
  outro: "Además, contamos con un ascensor al fondo de la entrada para su comodidad.",
};
