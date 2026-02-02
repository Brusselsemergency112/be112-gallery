import Image from "next/image";
import Link from "next/link";

export default function PhotoPage({ params }) {
  const id = params.id;
  const src = `/gallery/${id}.jpg`;

  return (
    <main className="min-h-screen bg-[#07080D] text-[#F6F3EF]">
      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="flex items-center justify-between">
          <Link
            href="/gallery"
            className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm text-white/80 hover:bg-white/10 transition"
          >
            ← Retour à l’exposition
          </Link>
          <div className="text-sm text-white/60">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#E11D48]" />
              Photo {id}
            </span>
          </div>
        </div>

        <div className="mt-6 relative overflow-hidden rounded-3xl border border-white/10 bg-black/30">
          <div className="relative aspect-[16/10]">
            <Image src={src} alt={`Photo ${id}`} fill className="object-contain" sizes="100vw" priority />
          </div>
        </div>
      </div>
    </main>
  );
}
