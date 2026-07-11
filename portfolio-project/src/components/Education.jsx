import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../data/portfolioData.js";
import SectionEyebrow from "./SectionEyebrow.jsx";

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="section__inner education__inner">
        <div className="education__mark">
          <GraduationCap size={26} strokeWidth={1.5} />
        </div>
        <div>
          <SectionEyebrow>Education</SectionEyebrow>
          <h2 className="section__title education__degree">{EDUCATION.degree}</h2>
          <p className="education__school">{EDUCATION.school}</p>
          <p className="education__grad">{EDUCATION.grad}</p>
        </div>
      </div>
    </section>
  );
}
