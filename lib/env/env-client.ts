import z from 'zod'

const envSchema = z.object({
  // NEXT_PUBLIC_EXAMPLE: z.string().url(),
})

const envValidation = envSchema.safeParse({
  // NEXT_PUBLIC_EXAMPLE: process.env.NEXT_PUBLIC_EXAMPLE,
})

if (!envValidation.success) {
  console.error(envValidation.error.issues)
  throw new Error('There is an error with the client environment variables')
}

export const envClient = envValidation.data