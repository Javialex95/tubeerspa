import { faqs } from "./data";

// Preguntas frecuentes: texto plano en el HTML (también lo leen buscadores e IAs).
export default function Faq() {
  return (
    <section
      id="preguntas"
      data-header-theme="forest"
      aria-label="Preguntas frecuentes"
      className="theme-forest py-20"
    >
      <div className="mx-auto flex max-w-3xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h5 className="text-muted">Resolvemos tus dudas</h5>
          <span className="divider-malt" />
          <h2>Preguntas frecuentes</h2>
        </div>

        <div className="flex flex-col divide-y divide-border border-y border-border">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-h5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-h5">{faq.question}</h3>
                <span
                  aria-hidden
                  className="text-malt transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="pt-3 text-p">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
