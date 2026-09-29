import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="theme-forest">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 ">
        <Link href="/" aria-label="TuBeer Spa, ir al inicio">
          <Image
            src="/tubeer_horizontal_negativo.png"
            alt="TuBeer Spa"
            width={2917}
            height={1655}
            preload
            sizes="10rem"
            className="h-16 w-auto md:h-20"
          />
        </Link>
      </nav>
    </header>
  );
}
