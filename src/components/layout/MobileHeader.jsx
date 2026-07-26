import { PROFILE } from '../../data'
import { MenuIcon } from './MenuIcon'
import { NavList } from './NavList'

export function MobileHeader({ open, onToggle, active, onNavigate }) {
  return (
    <>
      <div className="mobile-header">
        <span className="mobile-header__name">{PROFILE.shortName}</span>
        <button
          type="button"
          className="mobile-header__toggle"
          onClick={onToggle}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-drawer"
        >
          <MenuIcon open={open} />
        </button>
      </div>

      {open && (
        <div id="mobile-drawer" className="mobile-drawer">
          <NavList active={active} onNavigate={onNavigate} variant="drawer" />
        </div>
      )}
    </>
  )
}
