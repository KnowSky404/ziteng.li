import SectionHeading from './SectionHeading'

function AboutSection({ items }) {
  return (
    <section className="section-block" id="about">
      <SectionHeading
        eyebrow="Overview"
        title="Overview"
        description="A quick summary of the product, engineering, and interface principles behind the work on this site."
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
