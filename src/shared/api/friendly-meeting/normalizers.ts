import type { FriendlyMeeting } from '@/shared/types'
import type { z } from 'zod'
import type { friendlyMeetingSchema } from './types'
import { objectPick } from '@antfu/utils'

export function normalizeFriendlyMeeting(
  friendlyMeeting: z.infer<typeof friendlyMeetingSchema>,
): FriendlyMeeting {
  return {
    ...objectPick(
      friendlyMeeting,
      ['id', 'date', 'description', 'inviting', 'address'],
    ),
    addressUrl: friendlyMeeting.address_url,
  }
}
