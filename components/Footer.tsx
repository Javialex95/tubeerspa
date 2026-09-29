export default function Footer() {
  return (
    <footer data-header-theme="forest" className="theme-forest border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center">
        <p className="text-p-sm">© {new Date().getFullYear()} TuBeer Spa</p>
      </div>
    </footer>
  );
}
