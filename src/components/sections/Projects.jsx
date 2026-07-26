import { PROJECTS } from '../../data'
import { useShowMore } from '../../hooks'
import { Section, ShowMoreButton } from '../ui'
import { ProjectCard } from './ProjectCard'

export function Projects() {
  const { expanded, toggle, visible, hasMore, hiddenCount } = useShowMore(PROJECTS.length)

  return (
    <Section id="projects" title="Projects">
      <div className="projects__list">
        {PROJECTS.slice(0, visible).map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      {hasMore && <ShowMoreButton expanded={expanded} onToggle={toggle} count={hiddenCount} />}
    </Section>
  )
}
