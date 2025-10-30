export const SUPPORTED_LOCALES = ['en', 'es'] as const
export type AppLocale = (typeof SUPPORTED_LOCALES)[number]

export const NAMESPACES = ['common', 'dashboard'] as const
export type Namespace = (typeof NAMESPACES)[number]
