import { z } from 'zod'
import { type ApiEndpointsAndSchemas, client } from '../lib'
import { normalizeAddress } from './normalizers'
import { AddressSchema } from './types'

const endpoints = {
  getAddress: {
    url: '/api/addresses',
    method: 'get',
    schema: z.array(AddressSchema),
  },
  byId: {
    url: ({ id }: AddressByIdParams) => `/api/${id}`,
    method: 'get',
    schema: AddressSchema,
  },

} satisfies ApiEndpointsAndSchemas

export interface AddressByIdParams { id: number }

export async function getAddresses() {
  const { url, method, schema } = endpoints.getAddress
  const data = await client[method](url, schema)

  return data.map(normalizeAddress)
}

export async function getAddressById({ id }: AddressByIdParams) {
  const { url, method, schema } = endpoints.byId
  const data = await client[method](url({ id }), schema)

  return normalizeAddress(data)
}
