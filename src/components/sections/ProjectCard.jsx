import { Tag } from '../ui'

export function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card__top">
        <p className="project-card__title">{project.title}</p>
        <span className="project-card__year">{project.year}</span>
      </div>

      <p className="project-card__type">{project.type}</p>
      <p className="project-card__description">{project.description}</p>

      <div className="project-card__footer">
        <div className="project-card__tags">
          {project.tags.map((t) => (
            <Tag key={t} label={t} />
          ))}
        </div>

        {project.link && (
          <a
            className="project-card__link"
            href={`https://${project.link}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {project.link} →
          </a>
        )}
      </div>
    </article>
  )
}
