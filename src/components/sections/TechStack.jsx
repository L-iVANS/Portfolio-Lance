import { TECH_STACK } from '../../data'
import { useShowMore } from '../../hooks'
import { CategoryLabel, Section, ShowMoreButton, Tag } from '../ui'

export function TechStack() {
  const { expanded, toggle, visible, hasMore, hiddenCount } = useShowMore(TECH_STACK.length)

  return (
    <Section id="techstack" title="Tech Stack">
      <p className="techstack__intro">
        The tools, frameworks, and platforms I reach for — across the front end, back end, infrastructure, and AI.
      </p>

      <div className="techstack__groups">
        {TECH_STACK.slice(0, visible).map((group) => (
          <div key={group.category}>
            <CategoryLabel>{group.category}</CategoryLabel>
            <div className="techstack__tags">
              {group.items.map((item) => (
                <Tag key={item} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {hasMore && <ShowMoreButton expanded={expanded} onToggle={toggle} count={hiddenCount} />}
    </Section>
  )
}
