import { dateValidation } from '@/shared/lib/validation'
import { z } from 'zod'
import { AddressSchema } from '../address'

export const FriendlyMeetingSchema = z.object({
  id: z.number(),
  date: dateValidation,
  description: z.string(),
  inviting: z.string(),
  address: z.string(),
  address_url: z.string().url(),
})

export const MinistryMeetingSchema = z.object({
  id: z.number(),
  date: dateValidation,
  leader: z.string(),
  address: AddressSchema,
  friendly_meeting: FriendlyMeetingSchema,
})
