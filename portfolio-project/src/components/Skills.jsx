import { SKILLS } from "../data/portfolioData.js";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section__inner">
        <SectionEyebrow>Skills &amp; Technologies</SectionEyebrow>
        <h2 className="section__title">The stack I build with</h2>

        <div className="skills__grid">
          {Object.entries(SKILLS).map(([group, items]) => (
            <div className="skills__group" key={group}>
              <h3 className="skills__group-title">{group}</h3>
              <div className="skills__chips">
                {items.map((s) => (
                  <span className="skill-chip" key={s}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
