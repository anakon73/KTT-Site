import type { MinistryMeeting } from '@/shared/types'
import type { z } from 'zod'
import type { ministryMeetingSchema } from './types'
import { objectPick } from '@antfu/utils'
import { normalizeFriendlyMeeting } from '../friendly-meeting'

export function normalizeMinistryMeeting(
  ministryMeeting: z.infer<typeof ministryMeetingSchema>,
): MinistryMeeting {
  return {
    ...objectPick(ministryMeeting, ['leader', 'id', 'date', 'address']),
    addressUrl: ministryMeeting.address_url,
    friendlyMeeting: ministryMeeting.friendly_meeting
      ? normalizeFriendlyMeeting(ministryMeeting.friendly_meeting)
      : null,
  }
}
