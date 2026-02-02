import Link from "next/link";

export default function Home() {
  return (
    <main className="museum px-6">
      <div className="mx-auto max-w-6xl py-10 md:py-16">
        <header className="flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#E11D48] shadow-[0_0_20px_#E11D48]" />
            <span className="text-sm tracking-wide text-white/80">BrusselsEmergency112</span>
          </div>

          <a
            href="https://instagram.com/brusselsemergency112"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/70 hover:text-white/90 transition"
          >
            Instagram →
          </a>
        </header>

        <section className="mt-12 md:mt-16">
          <div className="card p-7 md:p-10">
            <p className="small-muted tracking-wide uppercase text-xs">Vernissage virtuel</p>

            <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
              Rendre visible <span className="text-white/60">l’invisible</span>.
            </h1>

            <p className="mt-6 text-lg md:text-xl muted leading-relaxed max-w-3xl">
              La nuit n’est jamais vide. Derrière chaque sirène, il y a un silence, une attente,
              une main posée sur une épaule. Ici, les images deviennent des preuves poétiques.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <Link href="/gallery" className="btn-primary text-center">
                Entrer dans l’exposition
              </Link>

              <Link href="/gallery" className="btn-ghost text-center">
                Voir les œuvres
              </Link>
            </div>

            <div className="mt-10 hr" />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
              <div className="card p-5">
                <p className="text-xs small-muted tracking-wide uppercase">Intention</p>
                <p className="mt-2 text-white/85 leading-relaxed">
                  Montrer l’humain derrière l’urgence.
                  <br />
                  Sans bruit. Sans spectacle.
                </p>
              </div>

              <div className="card p-5 slow-float">
                <p className="text-xs small-muted tracking-wide uppercase">Rythme</p>
                <p className="mt-2 text-white/85 leading-relaxed">
                  Une exposition lente.
                  <br />
                  On regarde, on respire, on comprend.
                </p>
              </div>

              <div className="card p-5">
                <p className="text-xs small-muted tracking-wide uppercase">Signature</p>
                <p className="mt-2 text-white/85 leading-relaxed">
                  Bruxelles, terrain.
                  <br />— BrusselsEmergency112
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="mt-10 md:mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-sm small-muted">
            © {new Date().getFullYear()} — “Ce que la ville oublie, je le montre.”
          </p>

          <div className="text-sm text-white/60 flex gap-4">
            <Link className="hover:text-white/85 transition" href="/gallery">
              Exposition
            </Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
