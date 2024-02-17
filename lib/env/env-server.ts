import { loadEnvConfig } from '@next/env'
import z from 'zod'

if (!process.env.NODE_ENV) {
  console.log('----- MANUALLY LOADING ENV -----')

  loadEnvConfig(process.cwd())
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development')
  // DATABASE_URL: z.string().trim().min(1),
  // DRIZZLE_MIGRATIONS_FOLDER: z.string().trim().min(1)
})

const envValidation = envSchema.safeParse({
  NODE_ENV: process.env.NODE_ENV
  // DATABASE_URL: process.env.DATABASE_URL,
  // DRIZZLE_MIGRATIONS_FOLDER : process.env.DRIZZLE_MIGRATIONS_FOLDER
})

if (!envValidation.success) {
  console.error(envValidation.error.issues)
  throw new Error('There is an error with the server environment variables')
}

export const envServer = envValidation.data
