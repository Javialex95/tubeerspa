export default function Footer() {
  return (
    <footer data-header-theme="forest" className="theme-forest border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-6 py-10 text-center">
        <p className="text-p-sm">© {new Date().getFullYear()} TuBeer Spa</p>
        <a
          href="/politicas.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-p-sm underline underline-offset-4 hover:text-malt focus-visible:text-malt"
        >
          Políticas de privacidad
        </a>
      </div>
    </footer>
  );
}
