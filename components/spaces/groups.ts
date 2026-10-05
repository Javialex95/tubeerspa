export type Photo = {
  src: string;
  alt: string;
  orientation: "landscape" | "portrait";
};

// single: una foto grande · trio: una vertical + dos horizontales apiladas · duo: dos en fila.
// `reverse` pone la foto vertical del trío a la derecha.
export type Group =
  | { layout: "single"; photos: [Photo] }
  | { layout: "trio"; reverse?: boolean; photos: [Photo, Photo, Photo] }
  | { layout: "duo"; photos: [Photo, Photo] };

export const groups: Group[] = [
  {
    layout: "single",
    photos: [
      {
        src: "/fotos/foto1.jpg",
        alt: "Jacuzzi con burbujas junto a una tabla de quesos, copas de cerveza y vista nocturna de la ciudad",
        orientation: "landscape",
      },
    ],
  },
  {
    layout: "trio",
    photos: [
      {
        src: "/fotos/foto3.jpg",
        alt: "Letrero de Feliz Aniversario junto al jacuzzi, grifos de cerveza y velas encendidas",
        orientation: "portrait",
      },
      {
        src: "/fotos/foto2.jpg",
        alt: "Jacuzzi con espuma iluminado con velas y letras luminosas HBD, copa de cerveza en primer plano",
        orientation: "landscape",
      },
      {
        src: "/fotos/foto4.jpg",
        alt: "Jacuzzi decorado para cumpleaños con letras luminosas HBD y un letrero de felicitación",
        orientation: "landscape",
      },
    ],
  },
  {
    layout: "duo",
    photos: [
      {
        src: "/fotos/foto5.jpg",
        alt: "Sauna de madera con vapor, luz cálida, toallas TuBeer y dos copas de cerveza",
        orientation: "landscape",
      },
      {
        src: "/fotos/foto7.jpg",
        alt: "Toallas TuBeer Spa, copa de cerveza y reloj de arena sobre la banca de un sauna de madera",
        orientation: "landscape",
      },
    ],
  },
  {
    layout: "trio",
    reverse: true,
    photos: [
      {
        src: "/fotos/foto9.jpg",
        alt: "Brindis con cerveza junto al jacuzzi y un letrero de Futura Novia",
        orientation: "portrait",
      },
      {
        src: "/fotos/foto8.jpg",
        alt: "Copa de cerveza en mano dentro del jacuzzi con vista a la ciudad de noche",
        orientation: "landscape",
      },
      {
        src: "/fotos/foto6.jpg",
        alt: "Manos con espuma sobre el jacuzzi junto a toallas TuBeer y una copa de cerveza",
        orientation: "landscape",
      },
    ],
  },
  {
    layout: "duo",
    photos: [
      {
        src: "/fotos/foto10.jpg",
        alt: "Sala de masajes para dos con camillas y muro de bambú iluminado",
        orientation: "landscape",
      },
      {
        src: "/fotos/foto11.jpg",
        alt: "Camillas de masaje con mantas cafés frente a un muro de bambú y vegetación",
        orientation: "landscape",
      },
    ],
  },
];
