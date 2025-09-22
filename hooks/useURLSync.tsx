'use client'
import { usePathname, useSearchParams, useRouter } from "next/navigation"
import { useEffect } from "react"
import { Filters } from "./providers/FiltersProviders"
import { useQuery } from "./useQuery"

export function useURLSync(filters: Filters) {
  const router = useRouter()
  const pathname = usePathname()
  const current = useSearchParams()?.toString() ?? ''

  useEffect(() => {
    const next = useQuery(filters)
    if (next !== current) {
      const url = next ? `${pathname}?${next}` : pathname
      router.replace(url)
    }
  }, [filters, pathname])
}
