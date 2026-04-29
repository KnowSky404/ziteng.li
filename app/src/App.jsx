import AboutSection from './components/AboutSection'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import OnlineServicesSection from './components/OnlineServicesSection'
import ProjectsSection from './components/ProjectsSection'
import {
  aboutItems,
  heroContent,
  onlineServices,
  projects,
  socialLinks,
} from './data/siteContent'

const navigationItems = [
  { label: 'Overview', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
]

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <div className="site-header__brand">
          <span className="site-header__mark" aria-hidden="true">
            ZL
          </span>
          <span className="site-header__title">ziteng.li</span>
        </div>

        <nav aria-label="Primary" className="site-header__nav">
          {navigationItems.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main className="site-main">
        <HeroSection content={heroContent} links={socialLinks} />
        <div className="content-column">
          <AboutSection items={aboutItems} />
          <ProjectsSection projects={projects} />
          <OnlineServicesSection services={onlineServices} />
        </div>
      </main>
      <FooterSection links={socialLinks} />
    </div>
  )
}

export default App
