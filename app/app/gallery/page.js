import Image from "next/image";
import Link from "next/link";
import { getInstagramMedia } from "../lib/instagram";

export default async function Gallery() {
  const photos = await getInstagramMedia();

  return (
    <main className="min-h-screen bg-[#07080D] text-[#F6F3EF] px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <p className="text-sm text-white/50">Vernissage virtuel</p>
            <h1 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
              Exposition — BrusselsEmergency112
            </h1>
            <p className="mt-4 text-white/65 max-w-2xl leading-relaxed">
              Clique une image. Prends le temps. Ici, tout est lent — parce que l’humain l’est aussi.
            </p>
          </div>

          <Link
            href="/"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 transition"
          >
            Retour
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {photos.map((p) => (
            <Link
              key={p.id}
              href={p.permalink && p.permalink !== "#" ? p.permalink : `/photo/${p.id}`}
              target={p.permalink && p.permalink !== "#" ? "_blank" : undefined}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
            >
              <div className="relative aspect-[4/5]">
                <Image
                  src={p.media_url}
                  alt={p.caption || "BrusselsEmergency112"}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
              <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition">
                <span className="text-xs text-white/90 line-clamp-2">{p.caption}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
