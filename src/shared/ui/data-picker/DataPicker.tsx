import { DatePicker } from '@adobe/react-spectrum'
import { parseDate } from '@internationalized/date'
import React from 'react'

export function DataPicker() {
  const [value, setValue] = React.useState(() => parseDate(new Date().toISOString().split('T')[0]))
  // console.log(value)
  return (
    <DatePicker
      value={value}
      onChange={() => setValue}
    />
  )
};
