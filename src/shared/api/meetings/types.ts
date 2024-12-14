import { dateValidation } from '@/shared/lib/validation'
import { z } from 'zod'
import { AddressSchema } from '../address'

export const MeetingSchema = z.object({
  id: z.number(),
  date: dateValidation,
  leading: z.string(),
  speaker: z.string().nullable(),
  speech_title: z.string().nullable(),
  lead_wt: z.string().nullable(),
  reader: z.string().nullable(),
  closing_prayer: z.string(),
  special_program: z.string().nullable(),
  address: AddressSchema,
  status: z.object({
    id: z.number(),
    title: z.string(),
  }),
  ministry_meeting: z.object({
    id: z.number(),
    date: dateValidation,
    leader: z.string(),
  }),
})
