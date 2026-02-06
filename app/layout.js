import "./globals.css";

export const metadata = {
  title: "BrusselsEmergency112 — Vernissage virtuel",
  description: "Exposition photo — The Art Of You — Parcours d’Artistes de Saint-Gilles",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
