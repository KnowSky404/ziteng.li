function SectionHeading({ eyebrow, title, description }) {
  return (
    <header className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </header>
  )
}

export default SectionHeading
