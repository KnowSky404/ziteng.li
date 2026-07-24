import { ArrowUpRight } from 'lucide-react'

function ProjectCard({ action, index, project }) {
  return (
    <article className="project-card" data-testid="project-card">
      <a href={project.href} rel="noreferrer" target="_blank">
        {project.image ? (
          <div className="project-card__media">
            <img
              alt={project.imageAlt}
              loading="lazy"
              src={project.image}
            />
          </div>
        ) : null}
        <div className="project-card__body">
          <div className="project-card__meta">
            <span>{String(index + 1).padStart(2, '0')}</span>
            <span>{project.tags.join(' / ')}</span>
          </div>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <span className="project-card__action">
            {action}
            <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </span>
        </div>
      </a>
    </article>
  )
}

export default ProjectCard
