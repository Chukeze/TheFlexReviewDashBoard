import { IS_DEV_MODE, APP_ENV } from '@/lib/env'

export default function Banner() {
  if (!IS_DEV_MODE) return null
  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-3 right-3 z-50 rounded bg-yellow-500 px-2 py-1 text-black shadow"
    >
      Env: {APP_ENV}
    </div>
  )
}
