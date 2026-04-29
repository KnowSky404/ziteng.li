function HeroSection({ content, links }) {
  const primaryLink = links.find((link) => link.label === 'GitHub') ?? links[0]
  const secondaryLink = links.find((link) => link.label === 'Email') ?? links[1]

  return (
    <aside className="profile-sidebar" aria-label="Profile summary">
      <div className="hero-shell">
        <div className="hero-profile__avatar" aria-hidden="true">
          <span>ZL</span>
        </div>
        <div className="hero-profile__meta">
          <p className="hero-name">{content.eyebrow}</p>
          <span className="hero-handle">@knowsky404</span>
        </div>

        <div className="hero-copy">
          <h1 id="hero-title">{content.role}</h1>
          <p className="hero-summary">{content.summary}</p>
        </div>

        <div className="hero-actions hero-actions--stacked">
          <a
            className="button button--primary"
            href={primaryLink?.href}
            target="_blank"
            rel="noreferrer"
          >
            View GitHub profile
          </a>
          <a
            className="button"
            href={secondaryLink?.href}
            target="_blank"
            rel="noreferrer"
          >
            Contact me
          </a>
        </div>

        <ul className="hero-signals" aria-label="focus areas">
          {content.signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </div>

      <div className="hero-highlights">
        <div className="hero-highlight-card">
          <span className="hero-highlight-card__label">Focus</span>
          <strong>Product engineering with clean UX and maintainable systems.</strong>
        </div>
        <div className="hero-highlight-card">
          <span className="hero-highlight-card__label">Status</span>
          <strong>Open to shipping tools, experiments, and public web products.</strong>
        </div>
      </div>
    </aside>
  )
}

export default HeroSection
