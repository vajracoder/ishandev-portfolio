import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "../data/portfolioData.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p>Designed and developed by {PROFILE.name}</p>
        <div className="footer__icons">
          <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={17} />
          </a>
          <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={17} />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email">
            <Mail size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
