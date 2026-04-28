import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function ProjectsSection({ projects }) {
  return (
    <section className="section-block" id="projects">
      <SectionHeading
        eyebrow="Selected Work"
        title="Selected Projects"
        description="A quick-scan collection of products, experiments, and systems that reflect how I build."
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
