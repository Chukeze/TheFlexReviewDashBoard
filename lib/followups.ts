'use client'

import { useEffect, useState } from 'react'

export type FollowUp = {
  id: string
  term: string // e.g., "no hot water"
  reviewId?: number
  listingId?: number
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

  async function add(f: Omit<FollowUp, 'id' | 'status' | 'createdAt'>) {
    const optimistic = {
      id: uid(),
      status: 'open' as const,
      createdAt: new Date().toISOString(),
      ...f,
    }
    const snapshot = items
    const next = [...items, optimistic]
    console.log('hello folow:', next)
    setItems(next)
    safeWrite(next)
    console.log('Posting follow-up to server:', f)

    try {
      const res = await fetch('/api/reviews/followups', {
        method: 'POST',
        body: JSON.stringify(f),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        const created = await res.json();

        setItems((prev) => prev.map((it) => (it.id === optimistic.id ? {...it, ...created} : it)));

        safeWrite(
          next.map(
            it => (it.id === optimistic.id ? 
                {...it, ...created} : it
            )
          )
        )
      }
    } catch {
      // leave optimistic or roll back
      setItems(snapshot);
    }

  }
  function toggle(id: string) {
    const next = items.map((it) =>
      it.id === id
        ? it.status === 'open'
          ? {
              ...it,
              status: 'closed' as const,
              closedAt: new Date().toISOString(),
            }
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
