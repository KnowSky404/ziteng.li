import { Languages, Menu, Moon, Sun, X } from 'lucide-react'
import { useState } from 'react'

function ThemeControl({ controls, onChange, resolvedTheme }) {
  const nextTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
  const Icon = nextTheme === 'dark' ? Moon : Sun

  return (
    <button
      aria-label={controls[nextTheme]}
      className="icon-button"
      onClick={() => onChange(nextTheme)}
      title={controls[nextTheme]}
      type="button"
    >
      <Icon aria-hidden="true" size={17} strokeWidth={1.8} />
    </button>
  )
}

function SiteHeader({
  content,
  onLanguageToggle,
  onThemeChange,
  resolvedTheme,
}) {
  const [menuOpen, setMenuOpen] = useState(false)
  const controls = content.controls

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        {controls.skipContent}
      </a>
      <div className="site-header__inner">
        <a aria-label={controls.home} className="site-brand" href="#top">
          <span aria-hidden="true" className="site-brand__mark">
            ZT
          </span>
          <span className="site-brand__name">{content.hero.name}</span>
        </a>

        <nav
          aria-label={controls.primaryNavigation}
          className="desktop-navigation"
        >
          {content.navigation.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <ThemeControl
            controls={controls}
            onChange={onThemeChange}
            resolvedTheme={resolvedTheme}
          />
          <button
            aria-label={controls.switchLanguage}
            className="icon-button"
            onClick={onLanguageToggle}
            title={controls.switchLanguage}
            type="button"
          >
            <Languages aria-hidden="true" size={17} strokeWidth={1.8} />
          </button>
          <button
            aria-expanded={menuOpen}
            aria-label={menuOpen ? controls.closeMenu : controls.openMenu}
            aria-controls="mobile-navigation"
            className="menu-button icon-button"
            onClick={() => setMenuOpen((open) => !open)}
            type="button"
          >
            {menuOpen ? (
              <X aria-hidden="true" size={20} strokeWidth={1.8} />
            ) : (
              <Menu aria-hidden="true" size={20} strokeWidth={1.8} />
            )}
          </button>
        </div>
      </div>

      <nav
        aria-label={controls.mobileNavigation}
        className="mobile-navigation"
        hidden={!menuOpen}
        id="mobile-navigation"
      >
        {content.navigation.map((item) => (
          <a href={item.href} key={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  )
}

export default SiteHeader
