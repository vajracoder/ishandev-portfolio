import { Github, Linkedin, Mail, Download, MapPin, ArrowRight } from "lucide-react";
import { PROFILE } from "../data/portfolioData.js";
import SignalField from "./SignalField.jsx";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <SignalField />
      <div className="hero__inner">
        <p className="hero__kicker">
          <span className="dot" /> Open to internships &amp; placements
        </p>
        <h1 className="hero__name">{PROFILE.name}</h1>
        <p className="hero__tagline">{PROFILE.tagline}</p>
        <p className="hero__sub">{PROFILE.subtagline}</p>
        <p className="hero__intro">{PROFILE.intro}</p>

        <div className="hero__actions">
          <a
            href="#projects"
            className="btn btn--primary"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View Projects <ArrowRight size={16} />
          </a>
          <a href={PROFILE.resumeUrl} className="btn btn--outline">
            <Download size={16} /> Download Resume
          </a>
          <a
            href="#contact"
            className="btn btn--text"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Contact Me
          </a>
        </div>

        <div className="hero__socials">
          <a href={PROFILE.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github size={19} />
          </a>
          <a href={PROFILE.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin size={19} />
          </a>
          <a href={`mailto:${PROFILE.email}`} aria-label="Email">
            <Mail size={19} />
          </a>
          <span className="hero__location">
            <MapPin size={14} /> {PROFILE.location}
          </span>
        </div>
      </div>
    </section>
  );
}
