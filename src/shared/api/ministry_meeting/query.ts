import { queryOptions, useQuery } from '@tanstack/react-query'
import { getMinistryMeetingById, type GetMinistryMeetingById, getMinistryMeetings } from './api'

const entity = 'ministry-meetings'
const Scopes = { All: 'all', ById: 'by-id' } as const

export const keys = {
  getMinistryMeetings: (
  ) => [{ entity, scope: Scopes.All }],
  byId: (
    params: GetMinistryMeetingById,
  ) => [{ entity, scope: Scopes.ById, ...params }],
} as const

export function useMinistryMeetingsQuery() {
  return queryOptions({
    queryKey: keys.getMinistryMeetings(),
    queryFn: getMinistryMeetings,
  })
}

export function useMinistryMeetings() {
  return useQuery(useMinistryMeetingsQuery())
}

export function useMinistryMeetingByIdQuery(params: GetMinistryMeetingById) {
  return queryOptions({
    queryKey: keys.byId(params),
    queryFn: ({ queryKey: [{ id }] }) => getMinistryMeetingById({ id }),
  })
}
