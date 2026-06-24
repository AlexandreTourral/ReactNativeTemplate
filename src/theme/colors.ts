export const lightColors = {
  background: '#ffffff',
  foreground: '#0f172a',
  primary: '#2563eb',
  primaryForeground: '#ffffff',
  secondary: '#f1f5f9',
  secondaryForeground: '#0f172a',
  muted: '#64748b',
  border: '#e2e8f0',
  card: '#f8fafc',
} as const;

export const darkColors = {
  background: '#0f172a',
  foreground: '#f8fafc',
  primary: '#3b82f6',
  primaryForeground: '#ffffff',
  secondary: '#1e293b',
  secondaryForeground: '#f8fafc',
  muted: '#94a3b8',
  border: '#334155',
  card: '#1e293b',
} as const;

export type ThemePreference = 'system' | 'light' | 'dark';

export type Language = 'fr' | 'en';

export const supportedLanguages: Language[] = ['fr', 'en'];

export const themePreferences: ThemePreference[] = ['system', 'light', 'dark'];
