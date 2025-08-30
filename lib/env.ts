// lib/env.ts
type NodeEnv = 'development' | 'test' | 'production'
type VercelEnv = 'development' | 'preview' | 'production'
type NetlifyCtx = 'dev' | 'deploy-preview' | 'production'

// --- Base node env ---
export const NODE_ENV: NodeEnv =
  (process.env.NODE_ENV as NodeEnv) ?? 'development'

export const IS_DEV_MODE = NODE_ENV === 'development'
export const IS_PROD_MODE = NODE_ENV === 'production'
export const IS_TEST_MODE = NODE_ENV === 'test'

// --- Provider-specific deploy context in case i switch to netlify---
const VERCEL_ENV = process.env.VERCEL_ENV as VercelEnv | undefined
const NETLIFY_CONTEXT = process.env.CONTEXT as NetlifyCtx | undefined

// Normalize Netlify -> our vocabulary
const NETLIFY_NORMALIZED =
  NETLIFY_CONTEXT === 'dev'
    ? 'development'
    : NETLIFY_CONTEXT === 'deploy-preview'
    ? 'preview'
    : NETLIFY_CONTEXT // 'production' or undefined

// Optional app-level variable for CI 
const APP_ENV_SERVER = process.env.APP_ENV as
  | 'development'
  | 'preview'
  | 'production'
  | 'test'
  | undefined

// Final “where am I deployed?” value
export const DEPLOY_ENV: 'development' | 'preview' | 'production' | 'test' =
  (VERCEL_ENV ?? NETLIFY_NORMALIZED ?? APP_ENV_SERVER ?? NODE_ENV) as any

export const IS_PREVIEW = DEPLOY_ENV === 'preview'

// For the banner in the browser. If not provided, fall back to DEPLOY_ENV.
export const APP_ENV =
  (process.env.NEXT_PUBLIC_APP_ENV as string | undefined) ?? DEPLOY_ENV

  // convenience for browser checks
export const IS_BROWSER = typeof window !== 'undefined'
