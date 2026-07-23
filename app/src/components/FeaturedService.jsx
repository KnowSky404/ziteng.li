import { ArrowUpRight } from 'lucide-react'
import { assetPath } from '../assetPath'

function FeaturedService({ content, service }) {
  return (
    <section aria-label={content.label} className="featured-service">
      <div className="page-container">
        <a
          className="featured-service__link"
          href={service.href}
          rel="noreferrer"
          target="_blank"
        >
          <div className="featured-service__media">
            <img alt={content.imageAlt} src={assetPath('media/puretools.png')} />
          </div>
          <div className="featured-service__caption">
            <div>
              <span>{content.label}</span>
              <h2>{content.name}</h2>
            </div>
            <p>{content.description}</p>
            <span className="featured-service__action">
              {content.action}
              <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.8} />
            </span>
          </div>
        </a>
      </div>
    </section>
  )
}

export default FeaturedService
