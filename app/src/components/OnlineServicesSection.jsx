import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'

function OnlineServicesSection({ services }) {
  return (
    <section className="section-block" id="services">
      <SectionHeading
        eyebrow="Links And Services"
        title="Elsewhere"
        description="Public links and live references that support the profile-readme style overview."
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
