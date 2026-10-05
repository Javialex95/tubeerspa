import { REVIEWS_LINK } from "@/components/location/info";
import { site } from "@/lib/site";
import { reviews } from "./data";

const stars = (n: number) => "★".repeat(n);

// Opiniones de Google: resumen y reseñas destacadas. Todo se renderiza en el servidor.
export default function Reviews() {
  return (
    <section
      id="opiniones"
      data-header-theme="clay"
      aria-label="Opiniones de nuestros clientes"
      className="theme-clay py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          <h5 className="text-muted">Lo que dicen de nosotros</h5>
          <span className="divider-malt" />
          <h2>Opiniones de nuestros clientes</h2>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-p">
            <span className="text-h3 text-malt">
              {site.rating.value.toString().replace(".", ",")}
            </span>
            <span aria-hidden className="text-malt tracking-widest">
              {stars(5)}
            </span>
            <span>{site.rating.count} opiniones en Google</span>
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <li key={review.author} className="flex">
              <figure className="theme-forest flex w-full flex-col gap-4 rounded-2xl p-6 shadow-xl">
                <div className="flex items-center justify-between gap-4">
                  <figcaption className="text-h5">{review.author}</figcaption>
                  <span className="text-p-sm">{review.when}</span>
                </div>
                <p
                  role="img"
                  aria-label="5 de 5 estrellas"
                  className="text-malt tracking-widest"
                >
                  {stars(5)}
                </p>
                <blockquote className="text-p">
                  “{review.text}
                  {review.truncated ? "…" : ""}”
                </blockquote>
              </figure>
            </li>
          ))}
        </ul>

        <div className="flex justify-center">
          <a
            href={REVIEWS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-malt px-8 py-3 font-semibold tracking-widest text-forest uppercase hover-zoom hover:bg-honey focus-visible:bg-honey"
          >
            Ver todas en Google
          </a>
        </div>
      </div>
    </section>
  );
}
