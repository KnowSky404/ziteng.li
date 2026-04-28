function ProjectCard({ project }) {
  return (
    <article className="showcase-card" data-testid="project-card">
      <div className="card-meta">
        <span>{project.year}</span>
        <span>{project.status}</span>
      </div>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <ul className="tag-list" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <a href={project.href} target="_blank" rel="noreferrer">
        View project
      </a>
    </article>
  )
}

export default ProjectCard
