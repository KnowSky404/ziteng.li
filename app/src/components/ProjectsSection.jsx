import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function ProjectsSection({ projects }) {
  return (
    <section className="section-block" id="projects">
      <SectionHeading
        eyebrow="Pinned Repositories"
        title="Pinned"
        description="A small set of repository-style entries used here as profile-aligned project data."
      />

      <div className="card-grid">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
