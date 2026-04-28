import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'

function OnlineServicesSection({ services }) {
  return (
    <section className="section-block" id="services">
      <SectionHeading
        eyebrow="Public Access"
        title="Online Services"
        description="Live tools, websites, and public-facing experiences that people can open and use right now."
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
