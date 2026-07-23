import ProjectCard from './ProjectCard'
import SectionHeading from './SectionHeading'

function ProjectsSection({ content, projects }) {
  return (
    <section className="content-section" id="projects">
      <div className="page-container">
        <SectionHeading
          description={content.description}
          index={content.index}
          title={content.title}
        />
        <div className="project-grid">
          {projects.map((project, index) => (
            <ProjectCard
              action={content.action}
              index={index}
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
