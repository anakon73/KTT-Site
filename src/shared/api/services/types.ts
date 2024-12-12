import { z } from 'zod'

export const ServicesSchema = z.object({
  id: z.number(),
  scene: z.string(),
  microphones: z.string(),
  voiceover_zoom: z.string(),
  administrator: z.string(),
})
