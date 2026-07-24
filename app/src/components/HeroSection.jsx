import { ArrowDownRight } from 'lucide-react'
import { assetPath } from '../assetPath'

function HeroSection({ content, quickNavigationLabel = 'Page shortcuts' }) {
  return (
    <section aria-labelledby="hero-title" className="hero-section" id="top">
      <div className="page-container hero-section__inner">
        <div className="hero-section__identity">
          <div className="hero-section__copy">
            <h1 id="hero-title">{content.name}</h1>
            <p className="hero-section__role">{content.role}</p>
          </div>
          <figure className="hero-section__avatar">
            <img alt={content.avatarAlt} src={assetPath('media/avatar.png')} />
          </figure>
        </div>

        <p className="hero-section__summary">{content.summary}</p>
        <blockquote className="hero-section__signature">
          <p>{content.signature}</p>
        </blockquote>

        <nav aria-label={quickNavigationLabel} className="hero-section__shortcuts">
          {content.quickLinks.map((link) => (
            <a href={link.href} key={link.href}>
              <span>{link.label}</span>
              <ArrowDownRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
          ))}
        </nav>
      </div>
    </section>
  )
}

export default HeroSection
