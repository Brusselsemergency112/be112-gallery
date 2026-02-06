import fs from "fs";
import path from "path";
import EventPopup from "./components/EventPopup";

function getWorks() {
  const dir = path.join(process.cwd(), "public", "works");
  if (!fs.existsSync(dir)) return [];

  const allowed = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  return fs
    .readdirSync(dir)
    .filter((f) => allowed.has(path.extname(f).toLowerCase()))
    .sort()
    .map((file, idx) => ({
      id: idx + 1,
      file,
    }));
}

export default function Home() {
  const works = getWorks();
  const featured = works.slice(0, 10);

  return (
    <main className="shell">
      <EventPopup />

      <div className="wrap">
        <header className="topbar">
          <div className="brand">
            <span className="dot" />
            <span>BrusselsEmergency112</span>
          </div>

          <div className="nav">
            <a href="#exposition">Exposition</a>
            <a
              href="https://instagram.com/brusselsemergency112"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </header>

        <section className="hero">
          <p className="kicker">Vernissage virtuel</p>

          <h1 className="h1">
            Rendre visible <span className="dim">l’invisible</span>.
          </h1>

          <p className="sub">
            Une photographie du terrain.
            <br />
            Entre urgence, silence et humanité.
          </p>

          <div className="cta">
            <a className="btn btnPrimary" href="#exposition">
              Entrer dans l’exposition
            </a>
            <a className="btn btnGhost" href="#collection">
              Voir la collection
            </a>
          </div>
        </section>

        <section id="exposition" className="section">
          <div className="sectionHead">
            <h2>Œuvres récentes</h2>
            <a href="#collection">Collection →</a>
          </div>

          <div className="strip">
            {featured.length === 0 ? (
              <p style={{ opacity: 0.7 }}>
                Mets tes photos dans <code>public/works</code> (jpg/png/webp)
              </p>
            ) : (
              featured.map((w) => (
                <a
                  key={w.file}
                  className="tile"
                  href={`/works/${w.file}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={`/works/${w.file}`} alt={w.file} />
                  <div className="shade" />
                  <div className="meta">
                    <span className="tag">ouvrir</span>
                    <span className="cap">{w.file}</span>
                  </div>
                </a>
              ))
            )}
          </div>
        </section>

        <section id="collection" className="section">
          <div className="sectionHead">
            <h2>Collection</h2>
          </div>

          <div className="strip">
            {works.map((w) => (
              <a
                key={w.file}
                className="tile"
                href={`/works/${w.file}`}
                target="_blank"
                rel="noreferrer"
              >
                <img src={`/works/${w.file}`} alt={w.file} />
                <div className="shade" />
                <div className="meta">
                  <span className="tag">{String(w.id).padStart(2, "0")}</span>
                  <span className="cap">{w.file}</span>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} — The Art Of You · Parcours d’Artistes de Saint-Gilles
        </footer>
      </div>
    </main>
  );
}
