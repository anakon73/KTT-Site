import { queryOptions, useQuery } from '@tanstack/react-query'
import { getMeetingById, getMeetings, type MeetingsByIdParams } from './api'

const entity = 'meetings'
const Scopes = { All: 'all', ById: 'by-id' } as const

const keys = {
  getMeetings: (
  ) => [{ entity, scope: Scopes.All }],
  byId: (
    params: MeetingsByIdParams,
  ) => [{ entity, scope: Scopes.ById, ...params }],
} as const

export function useMeetingsQuery() {
  return queryOptions({
    queryKey: keys.getMeetings(),
    queryFn: getMeetings,
  })
}

export function useMeetings() {
  return useQuery(useMeetingsQuery())
}

export function useMeetingByIdQuery(params: MeetingsByIdParams) {
  return queryOptions({
    queryKey: keys.byId(params),
    queryFn: ({ queryKey: [{ id }] }) => getMeetingById({ id: id! }),
  })
}

export function useMeetingById(params: MeetingsByIdParams) {
  return useQuery(useMeetingByIdQuery(params))
}
