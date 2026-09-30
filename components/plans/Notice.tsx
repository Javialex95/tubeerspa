import { notice } from "./data";

// Aviso de consentimiento; hereda los colores del tema de la sección donde se use.
export default function Notice() {
  return (
    <aside
      aria-label={notice.title}
      className="mx-auto flex w-full max-w-xl flex-col gap-3 rounded-2xl border border-border p-6 text-center"
    >
      <h5 className="text-malt">{notice.title}</h5>
      <p className="text-p-sm">{notice.intro}</p>
      <ul className="flex flex-col gap-1">
        {notice.items.map((item) => (
          <li key={item} className="text-p-sm">
            {item}
          </li>
        ))}
      </ul>
      <a
        href={notice.form.href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-p-sm self-center font-semibold underline underline-offset-4 transition-colors hover:text-malt focus-visible:text-malt"
      >
        {notice.form.label}
      </a>
      <p className="text-p-sm">{notice.outro}</p>
    </aside>
  );
}
