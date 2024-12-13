import { z } from 'zod'
import { type ApiEndpointsAndSchemas, client } from '../lib'
import { normalizeMeeting } from './normalizers'
import { MeetingSchema } from './types'

const endpoints = {
  getMeetings: {
    url: '/api/meetings',
    method: 'get',
    schema: z.array(MeetingSchema),
  },
  byId: {
    url: ({ id }: MeetingsByIdParams) => `/api/${id}`,
    method: 'get',
    schema: MeetingSchema,
  },
} satisfies ApiEndpointsAndSchemas

export interface MeetingsByIdParams { id: number }

export async function getMeetings() {
  const { url, method, schema } = endpoints.getMeetings
  const data = await client[method](url, schema)

  return data.map(normalizeMeeting)
}

export async function getMeetingById({ id }: MeetingsByIdParams) {
  const { url, method, schema } = endpoints.byId
  const data = await client[method](url({ id }), schema)

  return normalizeMeeting(data)
}
