import { PROJECTS } from "../data/portfolioData.js";
import SectionEyebrow from "./SectionEyebrow.jsx";
import ProjectCard from "./ProjectCard.jsx";

export default function Projects() {
  const featured = PROJECTS.find((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <SectionEyebrow>Featured Projects</SectionEyebrow>
        <h2 className="section__title">What I've shipped</h2>
        <p className="section__lede">
          Four projects, each built to solve a specific, real problem — not a tutorial
          clone.
        </p>

        <div className="projects__grid">
          <ProjectCard project={featured} />
          <div className="projects__grid-secondary">
            {rest.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
