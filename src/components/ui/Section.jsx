import { SectionHeading } from './SectionHeading'

/**
 * A page section with its scroll-target id and uppercase heading.
 */
export function Section({ id, title, children, last = false }) {
  return (
    <section id={id} className={last ? 'section section--last' : 'section'}>
      <SectionHeading>{title}</SectionHeading>
      {children}
    </section>
  )
}
