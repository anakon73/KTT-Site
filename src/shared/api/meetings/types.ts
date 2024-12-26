import { dateValidation } from '@/shared/lib/validation'
import { z } from 'zod'
import { addressSchema } from '../address'
import { ministryMeetingSchema } from '../ministry-meeting'

export const meetingSchema = z.object({
  id: z.number(),
  date: dateValidation,
  leading: z.string(),
  speaker: z.string().nullable(),
  speech_title: z.string().nullable(),
  lead_wt: z.string().nullable(),
  reader: z.string().nullable(),
  closing_prayer: z.string(),
  special_program: z.string().nullable(),
  address: addressSchema.nullable(),
  status: z.object({
    id: z.number(),
    title: z.string(),
  }),
  ministry_meeting: ministryMeetingSchema.nullable(),
})
