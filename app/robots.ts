import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Rastreadores de IA permitidos de forma explícita (búsqueda y respuestas generativas).
const aiBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: "/design-system" },
      { userAgent: aiBots, allow: "/", disallow: "/design-system" },
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
