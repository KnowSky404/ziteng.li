import SectionHeading from './SectionHeading'

function AboutSection({ items }) {
  return (
    <section className="section-block" id="about">
      <SectionHeading
        eyebrow="Who I Am"
        title="A calm place for the work behind the screen."
        description="A short editorial snapshot of how I think, build, and choose what is worth putting on the internet."
      />

      <div className="about-grid">
        {items.map((item) => (
          <article className="about-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default AboutSection
