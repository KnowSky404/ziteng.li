import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function ProjectsSection({ projects }) {
  return (
    <section className="section-block" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Pinned Projects"
        description="A GitHub-style selection of products, systems, and experiments that reflect the way I build and ship."
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
