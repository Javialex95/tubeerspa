import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Raleway } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/header";
import CardInfo from "@/components/card-info";
import Hero from "@/components/hero";
import Journey from "@/components/journey";
import Location from "@/components/location";
import Plans from "@/components/plans";
import Spaces from "@/components/spaces";
import Splash from "@/components/splash";
import "./globals.css";

// Títulos principales (sustituto web de "Alta")
const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

// Títulos finos / subtítulos (Raleway Thin – Light)
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

// Texto de apoyo / contenido (Montserrat ExtraLight – Light)
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TuBeer Spa",
  description: "Bienestar inspirado en la cerveza. Sumérgete, vive el ritual.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${raleway.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Splash />
        <Header />
        <main className="flex-1">
          <Hero />
          <CardInfo />
          {/* Móvil: carta de planes · tablet y escritorio: recorrido */}
          <div id="planes">
            <Plans />
            <Journey />
          </div>
          <Spaces />
          <Location />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
