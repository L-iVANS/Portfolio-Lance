export function ShowMoreButton({ expanded, onToggle, count }) {
  return (
    <button type="button" className="show-more" onClick={onToggle} aria-expanded={expanded}>
      {expanded ? 'See less ↑' : `See ${count} more ↓`}
    </button>
  )
}
