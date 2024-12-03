import { ChevronLeft, ChevronRight } from 'lucide-react'

export function MeetingProgram() {
  return (
    <div className={`
      mx-3 my-1 flex flex-col gap-y-6 pb-8 font-medium

      sm:mx-10 sm:my-5 sm:pb-0
    `}
    >
      <div className="flex flex-col justify-center text-center">
        <div>
          Встреча собрания
        </div>
        <div className="flex justify-center">
          <button><ChevronLeft className="size-5" /></button>
          <p>19 Октября в 10:00 (Třinec)</p>
          <button><ChevronRight className="size-5" /></button>
        </div>
      </div>

      <div className="flex justify-between rounded-xl bg-blue-100 px-4 py-2 drop-shadow-mainshadow">
        <p>Председатель встречи</p>
        <p className="font-semibold">Пляшко Богдан</p>
      </div>

      <div className={`
        flex justify-between rounded-xl bg-blue-100 py-1 text-center drop-shadow-mainshadow

        md:bg-transparent
      `}
      >
        <div className={`
          rounded-xl px-4 py-2 drop-shadow-mainshadow

          md:bg-blue-100
        `}
        >
          <p>Докладчик</p>
          <p className="mt-2 font-semibold italic">Кошелев Владимир</p>
        </div>
        <div className={`
          rounded-xl px-4 py-2 drop-shadow-mainshadow

          md:bg-blue-100
        `}
        >
          <p>Публичная речь:</p>
          <p className="mt-2 font-bold text-slate-900">Долго ли еще стонать Человечеству?</p>
        </div>
      </div>

      <div className={`
        flex justify-between rounded-xl bg-blue-100 px-4 py-3 text-center drop-shadow-mainshadow
      `}
      >
        <div>
          <p>Ведущий С.Б.</p>
          <p className="font-semibold">Данов Александр</p>
        </div>
        <div>
          <p>Чтец</p>
          <p className="font-semibold">Марк Гейда</p>
        </div>
      </div>

      <div className="flex justify-between rounded-xl bg-blue-100 px-4 py-2 drop-shadow-mainshadow">
        <p>Заключительная молитва</p>
        <p className="font-semibold">Кошелев Владимир</p>
      </div>

      <div className="flex items-center justify-around rounded-xl px-4 py-2 text-center">
        <p>
          ВПС - зал + зум в
          <br />
          11:50
        </p>
        <p>
          Марк Гейда
        </p>
      </div>

    </div>
  )
}
