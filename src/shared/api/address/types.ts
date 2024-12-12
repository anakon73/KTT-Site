import { z } from 'zod'

export const AddressSchema = z.object({
  id: z.number(),
  address: z.string(),
  address_url: z.string().url(),
})
