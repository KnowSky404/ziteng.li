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

function App() {
  return (
    <>
      <HeroSection content={heroContent} />
      <main>
        <AboutSection items={aboutItems} />
        <ProjectsSection projects={projects} />
        <OnlineServicesSection services={onlineServices} />
      </main>
      <FooterSection links={socialLinks} />
    </>
  )
}

export default App
