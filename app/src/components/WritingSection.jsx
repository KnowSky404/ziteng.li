import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'

function WritingSection({ content, links }) {
  const writingLinks = links.filter(
    (link) => link.id === 'life-blog' || link.id === 'dev-blog',
  )

  return (
    <section className="content-section writing-section" id="writing">
      <div className="page-container">
        <SectionHeading
          description={content.description}
          index={content.index}
          title={content.title}
        />
        <div className="writing-links">
          {writingLinks.map((link) => (
            <a href={link.href} key={link.id} rel="noreferrer" target="_blank">
              <div>
                <h3>{link.label}</h3>
                <p>{link.description}</p>
              </div>
              <ArrowUpRight aria-hidden="true" size={28} strokeWidth={1.6} />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WritingSection
