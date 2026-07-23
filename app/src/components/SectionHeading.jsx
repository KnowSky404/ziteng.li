function SectionHeading({ description, index, title }) {
  return (
    <header className="section-heading">
      <span aria-hidden="true" className="section-heading__index">
        {index}
      </span>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </header>
  )
}

export default SectionHeading
