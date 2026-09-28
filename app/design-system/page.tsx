const primary = [
  { name: "forest", hex: "#14301e", className: "bg-forest" },
  { name: "malt", hex: "#fabc61", className: "bg-malt" },
  { name: "cream", hex: "#f9ebd3", className: "bg-cream" },
];

const secondary = [
  { name: "foam", hex: "#fbf1e0", className: "bg-foam" },
  { name: "barrel", hex: "#7c6240", className: "bg-barrel" },
  { name: "honey", hex: "#f0bd6b", className: "bg-honey" },
  { name: "ale", hex: "#7a2e1c", className: "bg-ale" },
  { name: "moss", hex: "#28352a", className: "bg-moss" },
];

const essence = [
  { title: "Ritual", text: "Cada experiencia diseñada como un ritual privado y guiado." },
  { title: "Sensorial", text: "Aromas, texturas, temperaturas y sabores que despiertan los sentidos." },
  { title: "Exclusividad", text: "Espacios privados, íntimos y no masivos." },
  { title: "Bienestar", text: "Equilibrio entre cuerpo, mente y espíritu." },
];

export default function DesignSystem() {
  return (
    <main className="theme-sand flex-1">
      <section className="mx-auto max-w-6xl px-6 py-16 space-y-16">
        <header className="space-y-4">
          <h5>Nuestra esencia</h5>
          <span className="divider-malt" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {essence.map((e) => (
              <div key={e.title} className="space-y-2 text-center">
                <h5 className="tracking-[0.15em]">{e.title}</h5>
                <p className="text-p-sm">{e.text}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="space-y-6">
          <h5>Paleta de color principal</h5>
          <div className="flex flex-wrap gap-6">
            {primary.map((c) => (
              <Swatch key={c.name} {...c} size="size-32" />
            ))}
          </div>
          <h5>Paleta de color secundarios</h5>
          <div className="flex flex-wrap gap-6">
            {secondary.map((c) => (
              <Swatch key={c.name} {...c} size="size-20" />
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h5>Jerarquía tipográfica</h5>
          <div className="space-y-6 border-l border-border pl-6">
            <h1>Bienestar inspirado</h1>
            <h2>En la cerveza</h2>
            <h3>Circuito de hidromasaje</h3>
            <h4>Malta • Lúpulo • Levadura</h4>
            <h5>Nuestra esencia</h5>
            <p className="max-w-xl">
              Ingredientes naturales para piel y relajación. Cada experiencia
              diseñada como un ritual privado y guiado.
            </p>
            <p className="text-p-sm max-w-xl">Texto de apoyo pequeño (text-p-sm).</p>
            <p className="text-display-thin text-3xl">Raleway thin (text-display-thin)</p>
          </div>
        </div>
      </section>

      <section className="theme-forest">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center space-y-6">
          <h1>Bienestar inspirado en la cerveza</h1>
          <h4 className="text-accent">Malta • Lúpulo • Levadura</h4>
          <span className="divider-malt mx-auto" />
          <p className="text-accent">Ingredientes naturales para piel y relajación.</p>
          <div className="pt-8">
            <h5 className="text-muted">Frase de marca</h5>
            <p className="font-display text-2xl">Sumérgete. Vive el ritual.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

function Swatch({
  name,
  hex,
  className,
  size,
}: {
  name: string;
  hex: string;
  className: string;
  size: string;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className={`${className} ${size} rounded-full ring-1 ring-border`} />
      <span className="text-h5 tracking-[0.15em]">{name}</span>
      <span className="text-p-sm">{hex}</span>
    </div>
  );
}
