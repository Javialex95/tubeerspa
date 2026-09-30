import type { Plan } from "@/components/plans/data";

export type StationKey = "cata" | "masaje" | "sauna" | "jacuzzi" | "bebidas" | "comida";

export const STATIONS: { key: StationKey; label: string; test: RegExp }[] = [
  { key: "cata", label: "Cata", test: /cata/i },
  { key: "masaje", label: "Masaje", test: /masaje/i },
  { key: "sauna", label: "Sauna", test: /sauna/i },
  { key: "jacuzzi", label: "Jacuzzi", test: /jacuzzi/i },
  { key: "bebidas", label: "Bebidas", test: /bebida|cerveza|malteada/i },
  { key: "comida", label: "Comida", test: /comida/i },
];

// Las estaciones se deducen de lo que incluye cada plan en los PDFs.
export const stationsOf = (plan: Plan): StationKey[] =>
  STATIONS.filter((s) => plan.includes.some((item) => s.test.test(item))).map((s) => s.key);

// "3:00 h" → 180 · "60 min" → 60
export const toMinutes = (duration: string): number => {
  const hours = duration.match(/^(\d+):(\d+)/);
  if (hours) return Number(hours[1]) * 60 + Number(hours[2]);
  return parseInt(duration, 10);
};

export type PlanData = {
  category: string;
  name: string;
  duration: string;
  minutes: number;
  stations: StationKey[];
  includes: string[];
  prices: { label?: string; text: string }[];
};

export type FormatData = {
  key: string;
  label: string;
  hint: string;
  plans: PlanData[];
};
