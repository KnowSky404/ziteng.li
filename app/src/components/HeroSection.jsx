function HeroSection({ content }) {
  return (
    <header className="hero-shell">
      <div className="hero-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.role}</h1>
        <p className="hero-name">{content.name}</p>
        <p className="hero-summary">{content.summary}</p>
        <ul className="hero-signals" aria-label="focus areas">
          {content.signals.map((signal) => (
            <li key={signal}>{signal}</li>
          ))}
        </ul>
      </div>

      <div className="hero-portrait" aria-label="portrait placeholder">
        <div className="portrait-frame">
          <div className="portrait-glow"></div>
          <div className="portrait-card">
            <p>Portrait</p>
            <span>Life-style photo area</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default HeroSection
