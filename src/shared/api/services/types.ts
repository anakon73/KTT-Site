import { dateValidation } from '@/shared/lib/validation'
import { z } from 'zod'

export const ServicesSchema = z.object({
  id: z.number(),
  scene: z.string(),
  date: dateValidation,
  microphones: z.string(),
  voiceover_zoom: z.string(),
  administrator: z.string(),
})
