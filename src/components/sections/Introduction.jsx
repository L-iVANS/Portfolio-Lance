import { PROFILE } from '../../data'
import { Divider, Section } from '../ui'

function ContactItem({ label, value, href }) {
  return (
    <div className="contact">
      <span className="contact__label">{label}</span>
      <a className="contact__value" href={href}>
        {value}
      </a>
    </div>
  )
}

function EducationCard({ school, degree, period }) {
  return (
    <div className="education">
      <p className="education__label">Education</p>
      <p className="education__school">{school}</p>
      <p className="education__degree">{degree}</p>
      <p className="education__period">{period}</p>
    </div>
  )
}

export function Introduction() {
  return (
    <Section id="introduction" title="Introduction">

      <div className="intro__top">
        <div className="intro__header">
          <h1 className="intro__name">{PROFILE.name}</h1>
          <p className="intro__meta">
            {PROFILE.role} · {PROFILE.location}
          </p>
        </div>

        <div className="intro__avatar">
          <img src="..\src\assets\Lance_1x1.jpg" alt={PROFILE.name} />
        </div>
      </div>

      <Divider /> {/* ✅ sits below both columns naturally */}

      <div className="intro__body">
        <p className="intro__lead">{PROFILE.bio[0]}</p>
        <p className="intro__text">{PROFILE.bio[1]}</p>

        <div className="intro__contacts">
          {PROFILE.contacts.map((c) => (
            <ContactItem key={c.label} {...c} />
          ))}
        </div>

        <EducationCard {...PROFILE.education} />
      </div>

    </Section>
  )
}