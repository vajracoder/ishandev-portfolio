import { EXPERIENCE } from "../data/portfolioData.js";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section__inner experience__inner">
        <div>
          <SectionEyebrow>Experience &amp; Leadership</SectionEyebrow>
          <h2 className="section__title">{EXPERIENCE.role}</h2>
          <p className="experience__org">{EXPERIENCE.org}</p>
          <p className="experience__period">{EXPERIENCE.period}</p>
        </div>
        <ul className="experience__list">
          {EXPERIENCE.points.map((point, i) => (
            <li key={i}>
              <span className="experience__marker" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
