import { ArrowUpRight } from 'lucide-react'

const currentYear = new Date().getFullYear()

function FooterSection({ content, links }) {
  const contactLinks = links.filter(
    (link) => link.id === 'telegram' || link.id === 'email',
  )
  const githubLink = links.find((link) => link.id === 'github')

  return (
    <footer className="site-footer" id="contact">
      <div className="page-container site-footer__inner">
        <div className="site-footer__intro">
          <h2>{content.title}</h2>
          <p>{content.description}</p>
        </div>
        <div className="site-footer__contacts">
          {contactLinks.map((link) => (
            <a href={link.href} key={link.id} rel="noreferrer" target="_blank">
              <span>{link.label}</span>
              <span>{link.id === 'email' ? 'pm@ziteng.li' : '@celery_pm_bot'}</span>
              <ArrowUpRight aria-hidden="true" size={22} strokeWidth={1.7} />
            </a>
          ))}
        </div>
        <div className="site-footer__bottom">
          <span>© {currentYear} {content.copyright}</span>
          {githubLink ? (
            <a href={githubLink.href} rel="noreferrer" target="_blank">
              GitHub
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
          ) : null}
        </div>
      </div>
    </footer>
  )
}

export default FooterSection
