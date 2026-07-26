export function MenuIcon({ open }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
      {open ? (
        <>
          <line x1="2" y1="2" x2="16" y2="16" stroke="currentColor" strokeWidth="1.5" />
          <line x1="16" y1="2" x2="2" y2="16" stroke="currentColor" strokeWidth="1.5" />
        </>
      ) : (
        <>
          <line x1="2" y1="5" x2="16" y2="5" stroke="currentColor" strokeWidth="1.5" />
          <line x1="2" y1="9" x2="16" y2="9" stroke="currentColor" strokeWidth="1.5" />
          <line x1="2" y1="13" x2="16" y2="13" stroke="currentColor" strokeWidth="1.5" />
        </>
      )}
    </svg>
  )
}
