import type { Services } from '@/shared/types'
import type { z } from 'zod'
import type { servicesSchema } from './types'
import { objectPick } from '@antfu/utils'

export function normalizeService(
  services: z.infer<typeof servicesSchema>,
): Services {
  return {
    ...objectPick(services, ['id', 'administrator', 'microphones', 'scene', 'date']),
    voiceoverZoom: services.voiceover_zoom,
  }
}
