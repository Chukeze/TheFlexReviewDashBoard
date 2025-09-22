export const CANON_RULES: Array<{
  when: (set: Set<string>) => boolean
  add: (set: Set<string>) => string
  prune?: string[] // tokens to drop if rule matched
}> = [
  {
    // "hot water" + ("bathroom" or "shower") -> "no hot water for shower"
    when: (s) => s.has('hot water') && (s.has('bathroom') || s.has('shower')),
    add: (_) => 'No hot water for shower',
    prune: ['hot', 'water', 'hot water', 'bathroom', 'shower'],
  },
  {
    when: (s) => s.has('hot water'),
    add: (_) => 'No hot water',
    prune: ['hot', 'water', 'hot water'],
  },
  {
    when: (s) => s.has('checkin') || s.has('check-in'),
    add: (_) => 'Check‑in problems',
    prune: ['checkin', 'check-in', 'check'],
  },
  { when: (s) => s.has('wifi'), add: (_) => 'Wi‑Fi' },
  { when: (s) => s.has('noise'), add: (_) => 'Noise' },
  { when: (s) => s.has('heating'), add: (_) => 'Heating' },
  { when: (s) => s.has('ac'), add: (_) => 'Air conditioning' },
]

export const DROP_GENERIC = new Set([
  'good',
  'morning',
  'evening',
  'day',
  'nice',
  'great',
])

export const COLORS = [
  'red',
  'blue',
  'green',
  'orange',
  'indigo',
  'purple',
  'yellow',
  'pink',
  'brown',
] as const
export type Color = (typeof COLORS)[number]