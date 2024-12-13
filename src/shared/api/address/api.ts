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
  create: {
    url: '/api/addresses',
    method: 'post',
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

export interface CreateAddressParams {
  address: string
  address_url: string
}

export async function createAddress({ address, address_url }: CreateAddressParams) {
  const { url, method, schema } = endpoints.create
  const data = await client[method](url, { address, address_url }, schema)
  return normalizeAddress(data)
}
