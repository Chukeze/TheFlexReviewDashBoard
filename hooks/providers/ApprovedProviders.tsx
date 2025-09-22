import { useState, useContext, createContext } from "react"

/** Approved state separated for clarity */
const ApprovedCtx = createContext<Set<string> | null>(null)
const SetApprovedCtx = createContext<React.Dispatch<
  React.SetStateAction<Set<string>>
> | null>(null)

export function ApprovedProvider({ children }: { children: React.ReactNode }) {
  const [approved, setApproved] = useState<Set<string>>(new Set())
  return (
    <ApprovedCtx.Provider value={approved}>
      <SetApprovedCtx.Provider value={setApproved}>
        {children}
      </SetApprovedCtx.Provider>
    </ApprovedCtx.Provider>
  )
}
export function useApproved() {
  const v = useContext(ApprovedCtx)
  if (!v) throw new Error('useApproved must be used within ApprovedProvider')
  return v
}
export function useSetApproved() {
  const s = useContext(SetApprovedCtx)
  if (!s) throw new Error('useSetApproved must be used within ApprovedProvider')
  return s
}
