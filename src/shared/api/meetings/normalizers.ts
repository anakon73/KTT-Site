import type { Meeting } from '@/shared/types'
import type { z } from 'zod'
import type { meetingSchema } from './types'
import { objectPick } from '@antfu/utils'
import { normalizeAddress } from '../address'
import { normalizeMinistryMeeting } from '../ministry-meeting'

export function normalizeMeeting(
  meeting: z.infer<typeof meetingSchema>,
): Meeting {
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
    ministryMeeting: normalizeMinistryMeeting(ministry_meeting),
    address: normalizeAddress(address),
    closingPrayer: closing_prayer,
    leadWt: lead_wt,
    specialProgram: special_program,
    speechTitle: speech_title,
  }
}
