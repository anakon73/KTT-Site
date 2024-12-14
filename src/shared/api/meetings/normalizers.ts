import type { Meetings } from '@/shared/types'
import type { z } from 'zod'
import type { MeetingSchema } from './types'
import { objectPick } from '@antfu/utils'
import { normalizeAddress } from '../address/normalizers'

export function normalizeMeeting(
  meeting: z.infer<typeof MeetingSchema>,
): Meetings {
  const {
    address,
    closing_prayer,
    lead_wt,
    special_program,
    speech_title,
    ministry_meeting,
  } = meeting

  return {
    ...objectPick(
      meeting,
      ['id', 'leading', 'reader', 'speaker', 'date', 'status'],
    ),
    ministryMeeting: ministry_meeting,
    closingPrayer: closing_prayer,
    leadWt: lead_wt,
    specialProgram: special_program,
    speechTitle: speech_title,
    address: normalizeAddress(address),
  }
}
