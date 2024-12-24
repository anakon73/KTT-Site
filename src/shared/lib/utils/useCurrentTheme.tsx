import { useEffect, useState } from 'react'

export function useCurrentTheme() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Проверяем класс 'dark' на <html>
    const checkTheme = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'))
    }

    // Проверяем тему при монтировании компонента
    checkTheme()

    // Добавляем слушателя на изменения класса
    const observer = new MutationObserver(checkTheme)
    observer.observe(document.documentElement, { attributes: true })

    // Убираем слушатель при размонтировании компонента
    return () => observer.disconnect()
  }, [])

  return isDarkMode
}
