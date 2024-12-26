import { z } from 'zod'

export const addressSchema = z.object({
  id: z.number(),
  address: z.string(),
  address_url: z.string().url(),
})
