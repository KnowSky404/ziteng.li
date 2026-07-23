import { useEffect, useState } from 'react'
import FeaturedService from './components/FeaturedService'
import FooterSection from './components/FooterSection'
import HeroSection from './components/HeroSection'
import OnlineServicesSection from './components/OnlineServicesSection'
import ProjectsSection from './components/ProjectsSection'
import SiteHeader from './components/SiteHeader'
import WritingSection from './components/WritingSection'
import { getSiteContent, THEME_OPTIONS } from './data/siteContent'

const THEME_STORAGE_KEY = 'ziteng.li.theme'
const LANGUAGE_STORAGE_KEY = 'ziteng.li.language'

function readStoredPreference(key, fallback) {
  try {
    return window.localStorage.getItem(key) ?? fallback
  } catch {
    return fallback
  }
}

function getSystemTheme() {
  if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function App() {
  const [themePreference, setThemePreference] = useState(() => {
    const storedTheme = readStoredPreference(THEME_STORAGE_KEY, 'system')
    return THEME_OPTIONS.includes(storedTheme) ? storedTheme : 'system'
  })
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)
  const [language, setLanguage] = useState(() => {
    const storedLanguage = readStoredPreference(LANGUAGE_STORAGE_KEY, 'zh-CN')
    return storedLanguage === 'en' ? 'en' : 'zh-CN'
  })

  const resolvedTheme =
    themePreference === 'system' ? systemTheme : themePreference
  const content = getSiteContent(language)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme)

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, themePreference)
    } catch {
      // The selected theme still works when persistence is unavailable.
    }
  }, [resolvedTheme, themePreference])

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    function syncTheme(event) {
      setSystemTheme(event.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', syncTheme)
    return () => mediaQuery.removeEventListener('change', syncTheme)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language

    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
      // The selected language still works when persistence is unavailable.
    }
  }, [language])

  function toggleLanguage() {
    setLanguage((currentLanguage) =>
      currentLanguage === 'zh-CN' ? 'en' : 'zh-CN',
    )
  }

  return (
    <div className="site-shell">
      <SiteHeader
        content={content}
        onLanguageToggle={toggleLanguage}
        onThemeChange={setThemePreference}
        themePreference={themePreference}
      />

      <main id="main-content">
        <HeroSection
          content={content.hero}
          quickNavigationLabel={content.controls.quickNavigation}
        />
        <FeaturedService content={content.featured} service={content.services[0]} />
        <ProjectsSection
          content={content.sections.projects}
          projects={content.projects}
        />
        <OnlineServicesSection
          content={content.sections.services}
          services={content.services}
        />
        <WritingSection
          content={content.sections.writing}
          links={content.personalLinks}
        />
      </main>

      <FooterSection content={content.footer} links={content.personalLinks} />
    </div>
  )
}

export default App
