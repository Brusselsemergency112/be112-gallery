import Link from "next/link";
import { getInstagramMedia } from "./lib/instagram";

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
          une main
