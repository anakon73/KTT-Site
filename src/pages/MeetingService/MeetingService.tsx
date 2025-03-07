import { useServices } from '@/shared/api/service'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'

export function MeetingService() {
  const { data } = useServices()
  const [index, setIndex] = useState(0)

  const currentService = useMemo(() => {
    if (data)
      return data[index]
    return null
  }, [data, index])

  if (currentService === null) {
    return (
      <div className={`
        text-center text-gray-600

        dark:text-gray-300
      `}
      >
        no service
      </div>
    )
  }

  return (
    <div className={`
      mx-auto w-full max-w-[700px] pt-5 font-medium text-gray-800

      dark:text-gray-200
    `}
    >
      <div className="flex flex-col items-center font-bold">
        <div className="flex items-center">
          <button
            disabled={index === 0}
            onClick={() => setIndex(prev => prev - 1)}
            className={`
              ${index === 0 ? 'hidden' : 'block'}
            `}
          >
            <ChevronLeft className={`
              size-5 text-gray-700

              dark:text-gray-300
            `}
            />
          </button>
          <p className="px-4">
            {currentService.date.toLocaleString('ru', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            })}
          </p>
          <button
            disabled={index === data!.length - 1}
            onClick={() => setIndex(prev => prev + 1)}
            className={`
              ${index === data!.length - 1 ? 'hidden' : 'block'}
            `}
          >
            <ChevronRight className={`
              size-5 text-gray-700

              dark:text-gray-300
            `}
            />
          </button>
        </div>
      </div>
      <div
        className={`
          mx-3 mb-3 mt-3 flex flex-col gap-3

          sm:m-7
        `}
      >
        <div className={`
          flex justify-between rounded-xl bg-white drop-shadow-mainshadow

          dark:bg-gray-800 dark:drop-shadow-md
        `}
        >
          <p className="px-3 py-1">Сцена</p>
          <p className="px-3 py-1 text-right">{currentService.scene}</p>
        </div>
        <div className={`
          flex justify-between rounded-xl bg-white drop-shadow-mainshadow

          dark:bg-gray-800 dark:drop-shadow-md
        `}
        >
          <p className="px-3 py-1">Микрофоны</p>
          <p className="px-3 py-1 text-right">{currentService.microphones}</p>
        </div>
        <div className={`
          flex justify-between rounded-xl bg-white drop-shadow-mainshadow

          dark:bg-gray-800 dark:drop-shadow-md
        `}
        >
          <p className="px-3 py-1">Озвучивание + зум</p>
          <p className="px-3 py-1 text-right">{currentService.voiceoverZoom}</p>
        </div>
        <div className={`
          flex justify-between rounded-xl bg-white drop-shadow-mainshadow

          dark:bg-gray-800 dark:drop-shadow-md
        `}
        >
          <p className="px-3 py-1">Распорядители</p>
          <p className="px-3 py-1 text-right">{currentService.administrator}</p>
        </div>
      </div>
    </div>
  )
}
