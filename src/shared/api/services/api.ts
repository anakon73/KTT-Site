import { z } from 'zod'
import { type ApiEndpointsAndSchemas, client } from '../lib'
import { normalizeServices } from './normalizers'
import { ServicesSchema } from './types'

const endpoints = {
  getServices: {
    url: '/api/services',
    method: 'get',
    schema: z.array(ServicesSchema),
  },
  byId: {
    url: ({ id }: ServicesByIdParams) => `/api/${id}`,
    method: 'get',
    schema: ServicesSchema,
  },
} satisfies ApiEndpointsAndSchemas

export interface ServicesByIdParams { id: number }

export async function getServices() {
  const { url, method, schema } = endpoints.getServices
  const data = await client[method](url, schema)

  return data.map(normalizeServices)
}

export async function getServiceById({ id }: ServicesByIdParams) {
  const { url, method, schema } = endpoints.byId
  const data = await client[method](url({ id }), schema)

  return normalizeServices(data)
}
