import { NAV_ITEMS } from '../../data'

/**
 * Shared nav button list used by both the sidebar and the mobile drawer.
 *
 * @param {string} variant - 'sidebar' | 'drawer'
 */
export function NavList({ active, onNavigate, variant = 'sidebar' }) {
  return (
    <nav className={`nav nav--${variant}`}>
      {NAV_ITEMS.map((item) => {
        const isActive = active === item.id
        return (
          <button
            key={item.id}
            type="button"
            className={`nav__item${isActive ? ' nav__item--active' : ''}`}
            onClick={() => onNavigate(item.id)}
            aria-current={isActive ? 'true' : undefined}
          >
            {item.label}
          </button>
        )
      })}
    </nav>
  )
}
