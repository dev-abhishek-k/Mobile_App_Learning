import { createClient } from '@libsql/client/web'

console.log(
  'URL:',
  process.env.EXPO_PUBLIC_TURSO_DATABASE_URL
)

console.log(
  'TOKEN:',
  process.env.EXPO_PUBLIC_TURSO_AUTH_TOKEN
)

export const db = createClient({
  url: process.env.EXPO_PUBLIC_TURSO_DATABASE_URL!,
  authToken: process.env.EXPO_PUBLIC_TURSO_AUTH_TOKEN!,
})