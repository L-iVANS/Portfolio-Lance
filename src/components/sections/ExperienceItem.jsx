export function ExperienceItem({ role, company, period, bullets }) {
  return (
    <div className="experience-item">
      <div className="experience-item__header">
        <div>
          <p className="experience-item__role">{role}</p>
          <p className="experience-item__company">{company}</p>
        </div>
        <p className="experience-item__period">{period}</p>
      </div>

      <ul className="experience-item__bullets">
        {bullets.map((b, i) => (
          <li key={i} className="experience-item__bullet">
            <span className="experience-item__dash" aria-hidden="true">
              —
            </span>
            <p className="experience-item__text">{b}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
