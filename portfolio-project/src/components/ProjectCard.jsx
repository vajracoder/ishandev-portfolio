import { Github, ArrowUpRight } from "lucide-react";
import ProjectVisual from "./ProjectVisual.jsx";

export default function ProjectCard({ project }) {
  const Icon = project.icon;
  return (
    <article className={`project-card ${project.featured ? "project-card--featured" : ""}`}>
      <ProjectVisual glyph={project.glyph} Icon={Icon} featured={project.featured} />
      <div className="project-card__body">
        {project.featured && <span className="featured-tag">Primary build</span>}
        <h3 className="project-card__title">{project.name}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        <p className="project-card__desc">{project.description}</p>
        <div className="tech-row">
          {project.tech.map((t) => (
            <span className="tech-chip" key={t}>
              {t}
            </span>
          ))}
        </div>
        <div className="project-card__actions">
          <a href={project.live} className="btn btn--ghost btn--sm" target="_blank" rel="noopener noreferrer">
            Live Demo <ArrowUpRight size={15} />
          </a>
          <a href={project.repo} className="btn btn--text btn--sm" target="_blank" rel="noopener noreferrer">
            <Github size={15} /> Repository
          </a>
        </div>
      </div>
    </article>
  );
}
