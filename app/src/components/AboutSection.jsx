import SectionHeading from './SectionHeading'

function AboutSection({ items }) {
  return (
    <section className="section-block" id="about">
      <SectionHeading
        eyebrow="Profile README"
        title="README"
        description="A minimal profile-style overview written more like a GitHub README than a traditional landing-page feature grid."
      />

      <div className="readme-shell">
        <div className="readme-intro">
          <p>Hi, I&apos;m Ziteng.</p>
          <p>
            I build small web products, interface systems, and public tools with
            a preference for clarity over noise.
          </p>
        </div>

        <div className="about-grid readme-grid">
        {items.map((item) => (
          <article className="about-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            {item.points ? (
              <ul className="readme-list">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
        </div>

        <pre className="readme-codeblock" aria-label="profile readme snippet">
          <code>{`const profile = {
  handle: 'KnowSky404',
  focus: ['web products', 'AI-assisted tools', 'clean UI'],
  current: 'github-inspired personal homepage',
}`}</code>
        </pre>
      </div>
    </section>
  )
}

export default AboutSection
