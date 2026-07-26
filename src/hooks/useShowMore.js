import { useState, useCallback } from 'react'

/**
 * Collapsible list state.
 *
 * @param {number} total - Total number of items available.
 * @param {number} [initial=3] - How many to show while collapsed.
 */
export function useShowMore(total, initial = 3) {
  const [expanded, setExpanded] = useState(false)

  const toggle = useCallback(() => setExpanded((prev) => !prev), [])

  return {
    expanded,
    toggle,
    visible: expanded ? total : Math.min(initial, total),
    hasMore: total > initial,
    hiddenCount: Math.max(0, total - initial),
  }
}