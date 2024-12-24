import type { CalendarDate } from '@internationalized/date'
import { useCurrentTheme } from '@/shared/lib/utils'
import { darkTheme, DatePicker, lightTheme, Provider } from '@adobe/react-spectrum'
import { parseDate } from '@internationalized/date'
import React from 'react'

export function DataPicker() {
  const [value, setValue] = React.useState(() => parseDate(new Date().toISOString().split('T')[0]))

  const handleDateChange = (click: CalendarDate | null) => {
    if (click) {
      setValue(click)
    }
  }

  const isDarkMode = useCurrentTheme()

  return (
    <Provider
      theme={isDarkMode ? darkTheme : lightTheme}
      colorScheme="light"
      UNSAFE_className="dark:bg-dark-primary"
    >
      <DatePicker
        label="Выберите дату"
        value={value}
        onChange={handleDateChange}
        UNSAFE_className="bg-white dark:bg-dark-primary text-black dark:text-white "
      />
    </Provider>
  )
};
