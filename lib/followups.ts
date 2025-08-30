'use client'

import { useEffect, useState } from 'react'

export type FollowUp = {
  id: string
  term: string // e.g., "no hot water"
  listingId?: string
  listingName?: string
  notes?: string
  status: 'open' | 'closed'
  createdAt: string // ISO
  closedAt?: string
  issueId?: string
}

const KEY = 'flex_followups_v1'

function safeRead(): FollowUp[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem(KEY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

function safeWrite(list: FollowUp[]) {
  if (typeof window === 'undefined') return
  try {
    localStorage.setItem(KEY, JSON.stringify(list))
  } catch {}
}

function uid() {
  return (
    globalThis.crypto?.randomUUID?.() ||
    'fu_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 8)
  )
}

export function useFollowUps() {
  const [items, setItems] = useState<FollowUp[]>([])
  useEffect(() => {
    setItems(safeRead())
  }, [])

  function add(f: Omit<FollowUp, 'id' | 'status' | 'createdAt'>) {
    const next = [
      ...items,
      { id: uid(), status: 'open' as const, createdAt: new Date().toISOString(), ...f },
    ]
    setItems(next)
    safeWrite(next)
  }
  function toggle(id: string) {
    const next = items.map((it) =>
      it.id === id
        ? it.status === 'open'
          ? { ...it, status: 'closed' as const, closedAt: new Date().toISOString() }
          : { ...it, status: 'open' as const, closedAt: undefined }
        : it
    )
    setItems(next)
    safeWrite(next)
  }
  function remove(id: string) {
    const next = items.filter((it) => it.id !== id)
    setItems(next)
    safeWrite(next)
  }
  return { items, add, toggle, remove }
}
