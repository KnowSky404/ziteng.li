function FooterSection({ links }) {
  return (
    <footer className="site-footer">
      <p>Built as a personal digital presence for independent work on the web.</p>
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
