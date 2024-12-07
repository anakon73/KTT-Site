import { ChevronLeft, ChevronRight } from 'lucide-react'

export function MeetingService() {
  return (
    <div className="mx-auto w-full max-w-[700px] font-medium">
      <div className="flex flex-col items-center font-bold">
        <p>На неделе от</p>
        <div className="mt-2 flex items-center">
          <ChevronLeft className="size-6" />
          <p>11.12.2024</p>
          <ChevronRight className="size-6" />
        </div>
      </div>
      <div className={`
        mx-3 mb-3 mt-3 flex flex-col gap-3

        sm:m-7
      `}
      >
        <div className="flex justify-between rounded-xl bg-white drop-shadow-mainshadow">
          <p className="px-3 py-1">Сцена</p>
          <p className="px-3 py-1 text-right">Мостовой Максим</p>
        </div>
        <div className="flex justify-between rounded-xl bg-white drop-shadow-mainshadow">
          <p className="px-3 py-1">Микрофоны</p>
          <p className="px-3 py-1 text-right">Данов Илья & Шилюк Арсений</p>
        </div>
        <div className="flex justify-between rounded-xl bg-white drop-shadow-mainshadow">
          <p className="px-3 py-1">Озвучивание + зум</p>
          <p className="px-3 py-1 text-right">Братья с собрания Тринец</p>
        </div>
        <div className="flex justify-between rounded-xl bg-white drop-shadow-mainshadow">
          <p className="px-3 py-1">Распорядители</p>
          <p className="px-3 py-1 text-right">Брат с собрания Тринец & Мостовой Максим</p>
        </div>
      </div>
    </div>
  )
}
