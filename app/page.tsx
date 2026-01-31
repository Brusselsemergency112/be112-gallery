import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07080D] text-[#F6F3EF] flex items-center justify-center px-6">
      <div className="max-w-3xl w-full">
        <div className="mb-8">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#E11D48] shadow-[0_0_20px_#E11D48]" />
            <span className="text-sm tracking-wide text-white/80">BrusselsEmergency112</span>
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight">
          Rendre visible <span className="text-white/60">l’invisible</span>.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-white/70 leading-relaxed">
          La nuit n’est jamais vide. Derrière chaque sirène, il y a une attente, une peur, une main,
          un regard. Ce site est un vernissage virtuel — une trace de ce que la ville ne regarde pas.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            href="/gallery"
            className="rounded-2xl bg-[#E11D48] px-6 py-4 text-center font-medium text-white hover:opacity-90 transition"
          >
            Entrer dans l’exposition
          </Link>

          <a
            href="https://instagram.com/brusselsemergency112"
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-center font-medium text-white/85 hover:bg-white/10 transition"
          >
            Ouvrir Instagram
          </a>
        </div>

        <p className="mt-10 text-sm text-white/45">
          © {new Date().getFullYear()} BrusselsEmergency112 — “Ce que la ville oublie, je le montre.”
        </p>
      </div>
    </main>
  );
}
