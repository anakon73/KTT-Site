import { z } from 'zod'
import { type ApiEndpointsAndSchemas, client } from '../lib'
import { normalizeMinistryMeeting } from './normalizer'
import { MinistryMeetingSchema } from './types'

const endpoints = {
  getMinistryMeetings: {
    url: '/api/ministry-meetings',
    method: 'get',
    schema: z.array(MinistryMeetingSchema),
  },
  byId: {
    url: ({ id }: GetMinistryMeetingById) => `/api/ministry-meetings/${id}`,
    method: 'get',
    schema: MinistryMeetingSchema,
  },
} satisfies ApiEndpointsAndSchemas

export { endpoints as ministryMeetingEndpoints }

export async function getMinistryMeetings() {
  const { url, method, schema } = endpoints.getMinistryMeetings

  const data = await client[method](url, schema)

  return data.map(normalizeMinistryMeeting)
}

export interface GetMinistryMeetingById { id: number }
export async function getMinistryMeetingById({ id }: GetMinistryMeetingById) {
  const { url, method, schema } = endpoints.byId

  const data = await client[method](url({ id }), schema)

  return normalizeMinistryMeeting(data)
}
