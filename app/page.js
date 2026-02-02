import Link from "next/link";
import { getInstagramMedia } from "./lib/instagram.js";

export default async function Home() {
  const items = await getInstagramMedia();
  const featured = (items || []).slice(0, 8);

  return (
    <main className="home">
      {/* top bar */}
      <header className="topbar">
        <div className="brand">
          <span className="brandDot" />
          <span>BrusselsEmergency112</span>
        </div>

        <nav className="nav">
          <Link href="/gallery" className="navLink">Exposition</Link>
          <a
            href="https://instagram.com/brusselsemergency112"
            target="_blank"
            rel="noreferrer"
            className="navLink"
          >
            Instagram
          </a>
        </nav>
      </header>

      {/* hero */}
      <section className="hero">
        <p className="kicker">Vernissage virtuel</p>

        <h1 className="title font-serif">
          Rendre visible <span className="dim">l’invisible</span>.
        </h1>

        <p className="sub">
          La nuit n’est jamais vide. Derrière chaque sirène : un silence, une attente,
          une main posée sur une épaule. Ici, l’image parle doucement.
        </p>

        <div className="ctaRow">
          <Link href="/gallery" className="btnPrimary">
            Entrer dans l’exposition
          </Link>
          <Link href="/gallery" className="btnGhost">
            Voir la collection
          </Link>
        </div>

        <p className="hint">Défile ↓</p>
      </section>

      {/* preview */}
      <section className="preview">
        <div className="previewHead">
          <h2 className="previewTitle">Œuvres récentes</h2>
          <Link href="/gallery" className="previewLink">Tout voir →</Link>
        </div>

        <div className="strip" aria-label="Aperçu des photos">
          {featured.map((p) => {
            const href = p.permalink && p.permalink !== "#" ? p.permalink : `/photo/${p.id}`;
            const external = p.permalink && p.permalink !== "#";

            return (
              <a
                key={p.id}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noreferrer" : undefined}
                className="tile"
                title={p.caption || "Ouvrir"}
              >
                <img className="tileImg" src={p.media_url} alt={p.caption || "BrusselsEmergency112"} />
                <div className="tileShade" />
                <div className="tileMeta">
                  <span className="tileTag">ouvrir</span>
                  <span className="tileCap">{p.caption || "—"}</span>
                </div>
              </a>
            );
          })}
        </div>

        <div className="values">
          <div className="valueCard">
            <p className="valueK">Intention</p>
            <p className="valueT">Montrer l’humain derrière l’urgence. Sans bruit. Sans spectacle.</p>
          </div>
          <div className="valueCard">
            <p className="valueK">Rythme</p>
            <p className="valueT">Une exposition lente. On regarde, on respire, on comprend.</p>
          </div>
          <div className="valueCard">
            <p className="valueK">Signature</p>
            <p className="valueT">Bruxelles, terrain. — BrusselsEmergency112</p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} — Ce que la ville oublie, je le montre.</span>
      </footer>
    </main>
  );
}
