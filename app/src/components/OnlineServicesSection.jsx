import SectionHeading from './SectionHeading'
import ServiceCard from './ServiceCard'

function OnlineServicesSection({ content, services }) {
  return (
    <section className="content-section services-section" id="services">
      <div className="page-container">
        <SectionHeading
          description={content.description}
          index={content.index}
          title={content.title}
        />
        <div className="service-directory">
          {services.map((service, index) => (
            <ServiceCard
              action={content.action}
              index={index}
              key={service.id}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OnlineServicesSection
