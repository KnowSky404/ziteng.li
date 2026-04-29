function FooterSection({ links }) {
  return (
    <footer className="site-footer">
      <p>Built for independent work on the web, with a cleaner GitHub-inspired presentation.</p>
      <nav aria-label="social links">
        {links.map((link) => (
          <a href={link.href} key={link.label} target="_blank" rel="noreferrer">
            {link.label}
          </a>
        ))}
      </nav>
    </footer>
  )
}

export default FooterSection
