import type { FriendlyMeeting, MinistryMeeting } from '@/shared/types'
import type { z } from 'zod'
import type { FriendlyMeetingSchema, MinistryMeetingSchema } from './types'
import { objectPick } from '@antfu/utils'
import { normalizeAddress } from '../address/normalizers'

export function normalizeFriendlyMeeting(
  friendlyMeeting: z.infer<typeof FriendlyMeetingSchema>,
): FriendlyMeeting {
  return {
    ...objectPick(friendlyMeeting, ['address', 'date', 'description', 'id', 'inviting']),
    addressUrl: friendlyMeeting.address_url,
  }
}

export function normalizeMinistryMeeting(
  ministryMeeting: z.infer<typeof MinistryMeetingSchema>,
): MinistryMeeting {
  return {
    ...objectPick(ministryMeeting, ['leader', 'id', 'date']),
    address: normalizeAddress(ministryMeeting.address),
    friendlyMeeting: normalizeFriendlyMeeting(ministryMeeting.friendly_meeting),
  }
}
