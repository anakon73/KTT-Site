/*
meet
  date: string
  leading: string
  speech_title?: string
  lead_wt?: string
  reader?: string
  closing_prayer?: string
  special_program?: string
  status_id: number
  service_id?: number
  address_id?: number
  ministry_meeting_id?: number
   */
/* ser
  date: string
  scene?: string
  microphones?: string
  voiceover_zoom?: string
  administrator?: string
*/

import { z } from 'zod'

export const meetingServiceSchema = z.object({})
