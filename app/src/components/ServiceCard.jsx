import { ArrowUpRight } from 'lucide-react'

function ServiceCard({ action, index, service }) {
  return (
    <article className="service-row" data-testid="service-card">
      <a href={service.href} rel="noreferrer" target="_blank">
        <span className="service-row__index">
          {String(index + 1).padStart(2, '0')}
        </span>
        <div className="service-row__content">
          <div className="service-row__title-line">
            <h3>{service.name}</h3>
            <span>{service.type}</span>
          </div>
          <p>{service.description}</p>
          <span className="service-row__domain">{service.domain}</span>
        </div>
        <span className="service-row__action" title={action}>
          <ArrowUpRight aria-hidden="true" size={20} strokeWidth={1.8} />
        </span>
      </a>
    </article>
  )
}

export default ServiceCard
