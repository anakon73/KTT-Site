import { z } from 'zod'

export const MeetingSchema = z.object({
  id: z.number(),
  leading: z.string(),
  speaker: z.string(),
  speech_title: z.string(),
  lead_wt: z.string(),
  reader: z.string(),
  closing_prayer: z.string(),
  special_program: z.string(),
  place_address: z.string(),
  place_url: z.string(),
})
