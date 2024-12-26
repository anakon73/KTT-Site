import { dateValidation } from '@/shared/lib/validation'
import { z } from 'zod'

export const friendlyMeetingSchema = z.object({
  id: z.number(),
  date: dateValidation,
  description: z.string(),
  inviting: z.string(),
  address: z.string(),
  address_url: z.string().url(),
})
