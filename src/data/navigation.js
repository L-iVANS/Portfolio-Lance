export const NAV_ITEMS = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'techstack', label: 'Tech Stack' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'recommendations', label: 'Recommendations' },
  { id: 'github', label: 'Github' },
]

/* Stable module-level reference — passing a fresh array into
   useActiveSection on every render would retrigger its effect. */
export const SECTION_IDS = NAV_ITEMS.map((n) => n.id)