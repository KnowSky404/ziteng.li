function ServiceCard({ service }) {
  return (
    <article className="showcase-card service-card" data-testid="service-card">
      <div className="card-meta">
        <span>{service.kind}</span>
        <span>{service.state}</span>
      </div>
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <a href={service.href} target="_blank" rel="noreferrer">
        {service.action}
      </a>
    </article>
  )
}

export default ServiceCard
