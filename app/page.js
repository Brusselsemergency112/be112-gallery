import Link from "next/link";

export default function Home() {
  return (
    <main className="museum px-6">
      <div className="mx-auto max-w-6xl py-10 md:py-16">
        {/* Top bar minimal */}
        <header className="flex items-center justify-between">
          <div className="label">
            <span className="dot" />
            <span>BrusselsEmergency112</span>
          </div>

          <a
            href="https://instagram.com/brusselsemergency112"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-white/55 hover:text-white/80 transition"
          >
            Instagram →
          </a>
        </header>

        {/* Mur / panneau */}
        <section className="mt-12 md:mt-16 panel p-7 md:p-12">
          <p className="small">Vernissage virtuel</p>

          <h1 className="mt-4 font-serif text-4xl md:text-6xl leading-[1.05] tracking-tight">
            Rendre visible{" "}
            <span className="text-white/55">l’invisible.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl muted leading-relaxed max-w-3xl">
            La nuit n’est jamais vide. Derrière chaque sirène, il y a un silence,
            une attente — et l’humain. Ici, l’image parle doucement.
          </p>

          {/* Boutons musées (pas marketing) */}
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/gallery" className="btn btn-primary">
              Entrer dans l’exposition <span aria-hidden>→</span>
            </Link>

            <Link href="/gallery" className="btn btn-ghost">
              Parcourir la collection
            </Link>
          </div>

          {/* Cartels */}
          <div className="mt-10 hr" />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="panel p-5">
              <p className="small" style={{ letterSpacing: ".16em", textTransform: "uppercase" }}>
                Intention
              </p>
              <p className="mt-2 text-white/85 leading-relaxed">
                Montrer l’humain derrière l’urgence.
                <br />
                Sans bruit. Sans spectacle.
              </p>
            </div>

            <div className="panel p-5">
              <p className="small" style={{ letterSpacing: ".16em", textTransform: "uppercase" }}>
                Rythme
              </p>
              <p className="mt-2 text-white/85 leading-relaxed">
                Une exposition lente.
                <br />
                On regarde, on respire, on comprend.
              </p>
            </div>

            <div className="panel p-5">
              <p className="small" style={{ letterSpacing: ".16em", textTransform: "uppercase" }}>
                Signature
              </p>
              <p className="mt-2 text-white/85 leading-relaxed">
                Bruxelles, terrain.
                <br />— BrusselsEmergency112
              </p>
            </div>
          </div>
        </section>

        {/* Footer très discret */}
        <footer className="mt-10 md:mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="small">
            © {new Date().getFullYear()} — “Ce que la ville oublie, je le montre.”
          </p>
          <Link href="/gallery" className="text-sm text-white/55 hover:text-white/80 transition">
            Exposition
          </Link>
        </footer>
      </div>
    </main>
  );
}
