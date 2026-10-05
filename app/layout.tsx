import type { Metadata, Viewport } from "next";
import { Montserrat, Playfair_Display, Raleway } from "next/font/google";
import Faq from "@/components/faq";
import Footer from "@/components/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { site } from "@/lib/site";
import Header from "@/components/header";
import CardInfo from "@/components/card-info";
import Hero from "@/components/hero";
import Journey from "@/components/journey";
import Location from "@/components/location";
import Plans from "@/components/plans";
import Reviews from "@/components/reviews";
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
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s · ${site.name}` },
  description: site.description,
  keywords: [...site.keywords],
  applicationName: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "/",
    siteName: site.name,
    title: site.title,
    description: site.description,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: site.themeColor };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${raleway.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
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
          <Reviews />
          <Faq />
          <Location />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
