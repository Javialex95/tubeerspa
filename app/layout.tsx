import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Raleway } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/hero";
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
        <Header />
        <main className="flex-1">
          <Hero />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
