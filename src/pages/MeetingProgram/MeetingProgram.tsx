export function MeetingProgram() {
  return (
    <div className="mx-10 my-10 rounded-2xl border border-gray-800 text-center">
      <div className="p-2 text-lg font-bold text-blue-600">
        Встреча собрания 19 Октября в 10:00 (Třinec)
      </div>

      <div className={`
        grid grid-cols-4 divide-x divide-y divide-gray-800 text-sm

        lg:text-base
      `}
      >
        <div className="col-span-1 bg-gray-100 p-2 font-bold">Председатель встречи</div>
        <div className="col-span-1 flex items-center justify-center bg-gray-100 p-2 font-bold">
          Докладчик
        </div>
        <div className="col-span-2 flex items-center justify-center bg-gray-100 p-2 font-bold">
          Публичная речь
        </div>

        <div className="col-span-1 p-2">Пляшко Богдан</div>
        <div className="col-span-1 p-2">Кошелев Владимир</div>
        <div className="col-span-2 p-2 font-bold text-purple-600">
          Долго ли еще стонать Человечеству?
        </div>

        <div className="col-span-1 flex items-center justify-center p-2 text-blue-500">
          Ведущий С.Б.
        </div>
        <div className="col-span-1 flex items-center justify-center p-2">Чтец</div>
        <div className="col-span-1 p-2">Заключительная молитва</div>
        <div className="col-span-1 p-2 text-sm">
          ВПС - зал + зум в
          <br />
          11:50
        </div>

        <div className="col-span-1 p-2">Данов Александр</div>
        <div className="col-span-1 p-2">Марк Гейда</div>
        <div className="col-span-1 p-2">Кошелев Владимир</div>
        <div className="col-span-1 p-2">Марк Гейда</div>
      </div>
    </div>
  )
}
