import { EmptyState, Section } from '../ui'

export function Recommendations() {
  return (
    <Section id="recommendations" title="Recommendations">
      <EmptyState message="No recommendations listed yet." />
    </Section>
  )
}
