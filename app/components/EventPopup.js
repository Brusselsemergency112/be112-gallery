"use client";

import { useEffect, useState } from "react";

export default function EventPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem("be112-event-seen");
    if (!seen) setOpen(true);
  }, []);

  if (!open) return null;

  const close = () => {
    localStorage.setItem("be112-event-seen", "true");
    setOpen(false);
  };

  return (
    <div className="popupOverlay" role="dialog" aria-modal="true">
      <div className="popup">
        <button className="popupClose" onClick={close} aria-label="Fermer">
          ×
        </button>

        <p className="popupKicker">Vernissage · Exposition</p>
        <h2 className="popupTitle">The Art Of You</h2>

        <p className="popupText">
          <strong>Parcours d’Artistes de Saint-Gilles</strong>
          <br />
          La Ruche Citoyenne — Parvis de Saint-Gilles
        </p>

        <p className="popupDates">
          <strong>Samedi 11</strong> & <strong>Dimanche 12</strong> avril
          <br />
          <strong>Samedi 18</strong> & <strong>Dimanche 19</strong> avril
          <br />
          Atelier de l’artiste · Mouvement
        </p>

        <button className="popupButton" onClick={close}>
          Entrer dans l’exposition
        </button>
      </div>
    </div>
  );
}
