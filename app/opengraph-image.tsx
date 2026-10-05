import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "TuBeer Spa, spa cervecero en Tunja";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Imagen al compartir el enlace: logo sobre fondo verde (liviana, para que WhatsApp la muestre).
export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/tubeer_horizontal_negativo.png"));
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#14301e" }}>
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 24,
            background: "radial-gradient(circle at 50% 40%, #1d4a2e, #0c1f13)",
          }}
        >
          <img src={logoSrc} alt="" width={520} height={295} />
          <div style={{ display: "flex", color: "#f9ebd3", fontSize: 38, letterSpacing: 4 }}>
            Bienestar inspirado en la cerveza · Tunja
          </div>
        </div>
      </div>
    ),
    size,
  );
}
