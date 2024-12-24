import type { CalendarDate } from '@internationalized/date'
import { DatePicker } from '@adobe/react-spectrum'
import { parseDate } from '@internationalized/date'
import React, { useEffect } from 'react'

export function DataPicker() {
  const [value, setValue] = React.useState(() => parseDate(new Date().toISOString().split('T')[0]))

  const handleDateChange = (click: CalendarDate | null) => {
    if (click) {
      setValue(click)
    }
  }

  return (
    <DatePicker
      label="Выберите дату"
      value={value}
      onChange={handleDateChange}
    />
  )
};
