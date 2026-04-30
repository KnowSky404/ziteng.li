function ProjectCard({ project }) {
  return (
    <article className="showcase-card" data-testid="project-card">
      <div className="card-meta">
        <span>{project.status}</span>
        <span>{project.year}</span>
      </div>
      <h3>
        <a href={project.href} target="_blank" rel="noreferrer">
          {project.name}
        </a>
      </h3>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a className="button" href={project.href} target="_blank" rel="noreferrer">
        View repository
      </a>
    </article>
  )
}

export default ProjectCard
