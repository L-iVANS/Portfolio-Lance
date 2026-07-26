import { PROFILE } from '../../data'
import { EmptyState, Section } from '../ui'

export function Github() {
  const { label, url } = PROFILE.github

  return (
    <Section id="github" title="Github" last>
      <div className="github__header">
        <p className="github__handle">{label}</p>
        <a className="github__link" href={url} target="_blank" rel="noopener noreferrer">
          View profile →
        </a>
      </div>

      <EmptyState message="No pinned repositories yet." />
    </Section>
  )
}
