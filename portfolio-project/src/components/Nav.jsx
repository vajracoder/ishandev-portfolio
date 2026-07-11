import { useState } from "react";
import { Menu, X, Download } from "lucide-react";
import { PROFILE, NAV_LINKS } from "../data/portfolioData.js";

export default function Nav({ active }) {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="nav">
      <div className="nav__inner">
        <a
          href="#top"
          className="nav__brand"
          onClick={(e) => {
            e.preventDefault();
            handleClick("top");
          }}
        >
          <span className="nav__brand-mark">{PROFILE.initials}</span>
          <span className="nav__brand-name">{PROFILE.name}</span>
        </a>

        <nav className="nav__links" aria-label="Primary">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav__link ${active === l.id ? "is-active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                handleClick(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav__cta">
          <a href={PROFILE.resumeUrl} className="btn btn--outline btn--sm">
            <Download size={14} /> Resume
          </a>
        </div>

        <button
          className="nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="nav__mobile">
          {NAV_LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="nav__mobile-link"
              onClick={(e) => {
                e.preventDefault();
                handleClick(l.id);
              }}
            >
              {l.label}
            </a>
          ))}
          <a href={PROFILE.resumeUrl} className="btn btn--outline btn--sm nav__mobile-resume">
            <Download size={14} /> Resume
          </a>
        </div>
      )}
    </header>
  );
}
