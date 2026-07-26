import { useState, useEffect } from 'react'

/**
 * Tracks which section is currently most visible in the viewport.
 *
 * @param {string[]} ids - Element ids to observe. Must be a stable
 *   reference (module constant or memoized) or the effect will
 *   re-run on every render.
 * @returns {string} The id of the most visible section.
 */
export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const ratios = new Map()
    const observers = []

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          ratios.set(id, entry.intersectionRatio)

          let best = ids[0]
          let bestRatio = -1
          for (const [key, ratio] of ratios) {
            if (ratio > bestRatio) {
              bestRatio = ratio
              best = key
            }
          }
          setActive(best)
        },
        {
          threshold: [0, 0.25, 0.5, 0.75, 1],
          rootMargin: '-10% 0px -60% 0px',
        }
      )

      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [ids])

  return active
}