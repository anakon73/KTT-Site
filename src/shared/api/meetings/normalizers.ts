import type { Meetings } from '@/shared/types'
import type { z } from 'zod'
import type { MeetingSchema } from './types'
import { objectPick } from '@antfu/utils'

export function normalizeMeeting(
  meetings: z.infer<typeof MeetingSchema>,
): Meetings {
  return {
    ...objectPick(meetings, ['id', 'leading', 'reader', 'speaker']),
    closingPrayer: meetings.closing_prayer,
    leadWt: meetings.lead_wt,
    placeAddress: meetings.place_address,
    placeUrl: meetings.place_url,
    specialProgram: meetings.special_program,
    speechTitle: meetings.speech_title,
  }
}
