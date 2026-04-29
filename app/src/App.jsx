import { useEffect, useState } from 'react'
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

const THEME_STORAGE_KEY = 'ziteng.li.theme'
const LANGUAGE_STORAGE_KEY = 'ziteng.li.language'
const THEME_OPTIONS = ['system', 'light', 'dark']

const utilityLabels = {
  en: {
    language: 'English',
    theme: 'Theme preference',
    system: 'System',
    light: 'Light',
    dark: 'Dark',
    useSystem: 'Use system theme',
    useLight: 'Use light theme',
    useDark: 'Use dark theme',
  },
  'zh-CN': {
    language: '简体中文',
    theme: 'Theme preference',
    system: '系统',
    light: '浅色',
    dark: '深色',
    useSystem: '使用系统主题',
    useLight: '使用浅色主题',
    useDark: '使用深色主题',
  },
}

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
    const nextTheme = readStoredPreference(THEME_STORAGE_KEY, 'system')
    return THEME_OPTIONS.includes(nextTheme) ? nextTheme : 'system'
  })
  const [systemTheme, setSystemTheme] = useState(getSystemTheme)
  const [language, setLanguage] = useState(() => {
    const nextLanguage = readStoredPreference(LANGUAGE_STORAGE_KEY, 'en')
    return nextLanguage === 'zh-CN' ? 'zh-CN' : 'en'
  })

  const resolvedTheme =
    themePreference === 'system' ? systemTheme : themePreference

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', resolvedTheme)

    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, themePreference)
    } catch {
      // Ignore persistence failures and continue with in-memory state.
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
    try {
      window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    } catch {
      // Ignore persistence failures and continue with in-memory state.
    }
  }, [language])

  const labels = utilityLabels[language]

  function handleLanguageToggle() {
    setLanguage((current) => (current === 'en' ? 'zh-CN' : 'en'))
  }

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

        <div className="site-header__utilities">
          <div
            aria-label={labels.theme}
            className="theme-toggle"
            role="group"
          >
            <button
              aria-pressed={themePreference === 'system'}
              className={themePreference === 'system' ? 'is-active' : undefined}
              onClick={() => setThemePreference('system')}
              type="button"
            >
              <span className="sr-only">{labels.useSystem}</span>
              {labels.system}
            </button>
            <button
              aria-pressed={themePreference === 'light'}
              className={themePreference === 'light' ? 'is-active' : undefined}
              onClick={() => setThemePreference('light')}
              type="button"
            >
              <span className="sr-only">{labels.useLight}</span>
              {labels.light}
            </button>
            <button
              aria-pressed={themePreference === 'dark'}
              className={themePreference === 'dark' ? 'is-active' : undefined}
              onClick={() => setThemePreference('dark')}
              type="button"
            >
              <span className="sr-only">{labels.useDark}</span>
              {labels.dark}
            </button>
          </div>

          <button
            aria-label={`Language: ${labels.language}`}
            className="language-toggle"
            onClick={handleLanguageToggle}
            type="button"
          >
            {language === 'en' ? 'EN' : '中文'}
          </button>
        </div>
      </header>

      <main className="site-main" data-resolved-theme={resolvedTheme}>
        <nav aria-label="Mobile sections" className="mobile-section-nav">
          {navigationItems.map((item) => (
            <a
              aria-label={`Go to ${item.label}`}
              href={item.href}
              key={`mobile-${item.href}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

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
