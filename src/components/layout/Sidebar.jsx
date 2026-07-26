import { PROFILE } from '../../data'
import { NavList } from './NavList'

export function Sidebar({ active, onNavigate }) {
  return (
    <aside className="sidebar">
      <div>
        <div className="sidebar__identity">
          <div className="avatar" aria-hidden="true">
            <span className="avatar__initials">{PROFILE.initials}</span>
          </div>
          <p className="sidebar__name">{PROFILE.shortName}</p>
          <p className="sidebar__role">{PROFILE.role}</p>
        </div>

        <NavList active={active} onNavigate={onNavigate} variant="sidebar" />
      </div>

      <div className="sidebar__footer">{PROFILE.copyright}</div>
    </aside>
  )
}
