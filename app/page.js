import fs from "fs";
import path from "path";
import EventPopup from "./components/EventPopup";

function getWorks() {
  const dir = path.join(process.cwd(), "public", "works");
  if (!fs.existsSync(dir)) return [];

  const allowed = new Set([".jpg", ".jpeg", ".png", ".webp"]);
  const files = fs
    .readdirSync(dir)
    .filter((f) => allowed.has(path.extname(f).toLowerCase()))
    .sort();

  return files.map((file, idx) => ({
    id: idx + 1,
    file,
    src: `/works/${file}`,
  }));
}

export default function Home() {
  const works = getWorks();

  return (
    <main className="shell">
      <EventPopup />

      <div className="wrap">
        <header className="topbar">
          <div className="brand">
            <span className="pip" />
            <span>BrusselsEmergency112</span>
          </div>

          <div className="nav">
            <a href="#expo">Exposition</a>
            <a href="#works">Œuvres</a>
            <a
              href="https://instagram.com/brusselsemergency112"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </header>

        <section className="hero" id="expo">
          <p className="kicker">Vernissage virtuel</p>
          <h1 className="h1">
            The Art Of You <span className="dim">— rendre visible l’invisible</span>.
          </h1>
          <p className="sub">
            Bruxelles, terrain. Une exposition vivante — mouvement, urgence, humanité.
            <br />
            <span style={{ opacity: 0.9 }}>
              11–12 & 18–19 avril · La Ruche Citoyenne · Parvis de Saint-Gilles
            </span>
          </p>

          <div className="cta">
            <a className="btn btnPrimary" href="#works">
              Entrer dans l’exposition <span aria-hidden>→</span>
            </a>
            <a className="btn btnGhost" href="https://instagram.com/brusselsemergency112" target="_blank" rel="noreferrer">
              Suivre le projet
            </a>
          </div>
        </section>

        <section className="section" id="works">
          <div className="sectionHead">
            <h2>Œuvres</h2>
            <a href="#expo">Haut ↑</a>
          </div>

          {works.length === 0 ? (
            <p style={{ opacity: 0.7 }}>
              Ajoute tes images dans <code>public/works</code> (jpg/png/webp), puis Vercel redeploy.
            </p>
          ) : (
            <div className="grid">
              {works.map((w, i) => {
                const big = i % 9 === 0; // rythme visuel
                return (
                  <a
                    key={w.file}
                    className={`tile ${big ? "big" : ""}`}
                    href={w.src}
                    target="_blank"
                    rel="noreferrer"
                    title={w.file}
                  >
                    <img src={w.src} alt={w.file} />
                    <div className="shade" />
                    <div className="meta">
                      <span className="tag">{String(w.id).padStart(2, "0")} · œuvre</span>
                      <span className="cap">{w.file}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          )}
        </section>

        <footer className="footer">
          © {new Date().getFullYear()} — BrusselsEmergency112 · Parcours d’Artistes de Saint-Gilles
        </footer>
      </div>
    </main>
  );
}
