import { Fragment } from 'react'
import { EXPERIENCE } from '../../data'
import { useShowMore } from '../../hooks'
import { Divider, Section, ShowMoreButton } from '../ui'
import { ExperienceItem } from './ExperienceItem'

export function Experience() {
  const { expanded, toggle, visible, hasMore, hiddenCount } = useShowMore(EXPERIENCE.length)
  const shown = EXPERIENCE.slice(0, visible)

  return (
    <Section id="experience" title="Experience">
      {shown.map((exp, i) => (
        <Fragment key={exp.company}>
          <ExperienceItem {...exp} />
          {i < shown.length - 1 && <Divider />}
        </Fragment>
      ))}

      {hasMore && <ShowMoreButton expanded={expanded} onToggle={toggle} count={hiddenCount} />}
    </Section>
  )
}
