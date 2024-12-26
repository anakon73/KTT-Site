import { dateValidation } from '@/shared/lib/validation'
import { z } from 'zod'
import { friendlyMeetingSchema } from '../friendly-meeting'

export const ministryMeetingSchema = z.object({
  id: z.number(),
  date: dateValidation,
  leader: z.string().nullable().optional(),
  address: z.string().nullable().optional(),
  address_url: z.string().url().nullable().optional(),
  friendly_meeting: friendlyMeetingSchema.nullable().optional(),
})
