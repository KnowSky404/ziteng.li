import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'

function OnlineServicesSection({ services }) {
  return (
    <section className="section-block" id="services">
      <SectionHeading
        eyebrow="Services"
        title="Public Services"
        description="Live tools and web experiences that are available to open, test, and use right now."
      />

      <div className="card-grid services-grid">
        {services.map((service) => (
          <ServiceCard key={service.name} service={service} />
        ))}
      </div>
    </section>
  )
}

export default OnlineServicesSection
