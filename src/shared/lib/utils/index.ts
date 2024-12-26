import type { CalendarDate } from '@internationalized/date'

export type AnyObject = Record<string, unknown>
export { useCurrentTheme } from './useCurrentTheme'

export function parseDateSQL(time: string, date: CalendarDate) {
  const [hours, minutes] = time.split(':').map(Number)
  const dateObj = date.toDate('Europe/Prague')
  dateObj.setHours(hours)
  dateObj.setMinutes(minutes)
  dateObj.setSeconds(0)

  return dateObj.toISOString().slice(0, 19).replace('T', ' ')
}
