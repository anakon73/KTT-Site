import type { Services } from '@/shared/types'
import type { z } from 'zod'
import type { ServicesSchema } from './types'
import { objectPick } from '@antfu/utils'

export function normalizeServices(
  services: z.infer<typeof ServicesSchema>,
): Services {
  return {
    ...objectPick(services, ['id', 'administrator', 'microphones', 'scene', 'date']),
    voiceoverZoom: services.voiceover_zoom,
  }
}
