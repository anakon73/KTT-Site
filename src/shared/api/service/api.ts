import { normalizeResponse, responseValidation } from '@/shared/lib/validation'
import { z } from 'zod'
import { type ApiEndpointsAndSchemas, client } from '../lib'
import { normalizeService } from './normalizers'
import { servicesSchema } from './types'

const endpoints = {
  getServices: {
    url: '/api/services',
    method: 'get',
    schema: z.array(servicesSchema),
  },
  getService: {
    url: ({ id }: GetServiceParams) => `/api/services/${id}`,
    method: 'get',
    schema: servicesSchema,
  },
  createService: {
    url: '/api/services',
    method: 'post',
    schema: responseValidation(servicesSchema),
  },
  updateService: {
    url: ({ id }: UpdateServiceParams) => `/api/services/${id}`,
    method: 'patch',
    schema: responseValidation(servicesSchema),
  },
  deleteService: {
    url: ({ id }: DeleteServiceParams) => `/api/services/${id}`,
    method: 'delete',
    schema: responseValidation(servicesSchema),
  },
} satisfies ApiEndpointsAndSchemas

export async function getServices() {
  const { url, method, schema } = endpoints.getServices

  const data = await client[method](url, schema)

  return data.map(normalizeService)
}

export interface GetServiceParams { id: number }
export async function getService({ id }: GetServiceParams) {
  const { url, method, schema } = endpoints.getService

  const data = await client[method](url({ id }), schema)

  return normalizeService(data)
}

export interface CreateServiceParams {
  date: string
  scene?: string
  microphones?: string
  voiceover_zoom?: string
  administrator?: string
}
export async function createService({
  date,
  administrator,
  microphones,
  scene,
  voiceover_zoom,
}: CreateServiceParams) {
  const { url, method, schema } = endpoints.createService

  const data = await client[method](
    url,
    { scene, microphones, date, voiceover_zoom, administrator },
    schema,
  )

  return normalizeResponse(schema, normalizeService, data)
}

export interface UpdateServiceParams {
  id: number
  date?: string
  scene?: string
  microphones?: string
  voiceover_zoom?: string
  administrator?: string
}
export async function updateService({
  id,
  date,
  administrator,
  microphones,
  scene,
  voiceover_zoom,
}: UpdateServiceParams) {
  const { url, method, schema } = endpoints.updateService

  const data = await client[method](
    url({ id }),
    { scene, microphones, date, voiceover_zoom, administrator },
    schema,
  )

  return normalizeResponse(schema, normalizeService, data)
}

export interface DeleteServiceParams { id: number }
export async function deleteService({ id }: DeleteServiceParams) {
  const { url, method, schema } = endpoints.deleteService

  const data = await client[method](url({ id }), {}, schema)

  return normalizeResponse(schema, normalizeService, data)
}
