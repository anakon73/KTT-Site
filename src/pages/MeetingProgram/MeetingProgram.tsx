export function MeetingProgram() {
  return (
  // <div className="mx-10 my-10 rounded-2xl border border-gray-800 text-center">
  //   <div className="px-4 py-2 text-lg font-bold text-blue-600">
  //     Встреча собрания 19 Октября в 10:00 (Třinec)
  //   </div>

  //   <div className={
  //     `
  //       grid grid-cols-4 divide-x divide-y divide-gray-800 text-xs

  //       md:text-base
  //     `
  //   }
  //   >
  //     <div className="col-span-1 bg-gray-100 px-4 py-2 font-bold">Председатель встречи</div>
  //     <div className="col-span-1 flex items-center justify-center bg-gray-100 px-4 py-2 font-bold">
  //       Докладчик
  //     </div>
  //     <div className="col-span-2 flex items-center justify-center bg-gray-100 px-4 py-2 font-bold">
  //       Публичная речь
  //     </div>

  //     <div className="col-span-1 px-4 py-2">Пляшко Богдан</div>
  //     <div className="col-span-1 px-4 py-2">Кошелев Владимир</div>
  //     <div className="col-span-2 px-4 py-2 font-bold text-purple-600">
  //       Долго ли еще стонать Человечеству?
  //     </div>

  //     <div className="col-span-1 flex items-center justify-center px-4 py-2">
  //       Ведущий С.Б.
  //     </div>
  //     <div className="col-span-1 flex items-center justify-center px-4 py-2">Чтец</div>
  //     <div className="col-span-1 px-4 py-2">Заключительная молитва</div>
  //     <div className="col-span-1 px-4 py-2 text-sm">
  //       ВПС - зал + зум в
  //       <br />
  //       11:50
  //     </div>

  //     <div className="col-span-1 px-4 py-2">Данов Александр</div>
  //     <div className="col-span-1 px-4 py-2">Марк Гейда</div>
  //     <div className="col-span-1 px-4 py-2">Кошелев Владимир</div>
  //     <div className="col-span-1 px-4 py-2">Марк Гейда</div>
  //   </div>
  // </div>
  // <>
  //   <div className="mx-10 my-10 rounded-2xl border border-gray-800 text-center">
  //     <div className="px-4 py-2 text-lg font-bold text-blue-600">
  //       Встреча собрания 19 Октября в 10:00 (Třinec)
  //     </div>

  //     {/* Mobile version */}
  //     <div className={`
  //       grid grid-cols-1 gap-4 //

  //       lg:hidden
  //     `}
  //     >
  //       <div className="rounded-lg bg-gray-100 p-4">
  //         <div className="font-bold">Председатель встречи</div>
  //         <div>Пляшко Богдан</div>
  //       </div>
  //       <div className="rounded-lg bg-gray-100 p-4">
  //         <div className="font-bold">Докладчик</div>
  //         <div>Кошелев Владимир</div>
  //       </div>
  //       <div className="rounded-lg bg-gray-100 p-4">
  //         <div className="font-bold">Публичная речь</div>
  //         <div className="font-bold text-purple-600">Долго ли еще стонать Человечеству?</div>
  //       </div>
  //       <div className="rounded-lg bg-gray-100 p-4">
  //         <div className="font-bold">Ведущий</div>
  //         <div>С.Б.</div>
  //       </div>
  //       <div className="rounded-lg bg-gray-100 p-4">
  //         <div className="font-bold">Чтец</div>
  //         <div>Марк Гейда</div>
  //       </div>
  //       <div className="rounded-lg bg-gray-100 p-4">
  //         <div className="font-bold">Заключительная молитва</div>
  //         <div>Марк Гейда</div>
  //       </div>
  //       <div className="rounded-lg bg-gray-100 p-4">
  //         <div className="font-bold">ВПС - зал + зум</div>
  //         <div>11:50</div>
  //       </div>
  //     </div>
  //   </div>
  //   <div className={`
  //     hidden grid-cols-4 divide-x divide-y divide-gray-800 text-sm

  //     lg:grid lg:text-base
  //   `}
  //   >
  //     <div className="col-span-1 bg-gray-100 px-4 py-2 font-bold">Председатель встречи</div>
  //     <div className="col-span-1 flex items-center justify-center bg-gray-100 px-4 py-2 font-bold">Докладчик</div>
  //     <div className="col-span-2 flex items-center justify-center bg-gray-100 px-4 py-2 font-bold">Публичная речь</div>

  //     <div className="col-span-1 px-4 py-2">Пляшко Богдан</div>
  //     <div className="col-span-1 px-4 py-2">Кошелев Владимир</div>
  //     <div className="col-span-2 px-4 py-2 font-bold text-purple-600">Долго ли еще стонать Человечеству?</div>

  //     <div className="col-span-1 flex items-center justify-center px-4 py-2 text-blue-500">Ведущий С.Б.</div>
  //     <div className="col-span-1 flex items-center justify-center px-4 py-2">Чтец</div>
  //     <div className="col-span-1 px-4 py-2">Заключительная молитва</div>
  //     <div className="col-span-1 px-4 py-2 text-sm">
  //       ВПС - зал + зум в
  //       <br />
  //       {' '}
  //       11:50
  //     </div>

  //     <div className="col-span-1 px-4 py-2">Данов Александр</div>
  //     <div className="col-span-1 px-4 py-2">Марк Гейда</div>
  //     <div className="col-span-1 px-4 py-2">Кошелев Владимир</div>
  //     <div className="col-span-1 px-4 py-2">Марк Гейда</div>
  //   </div>

    <div className={`
      mx-3 my-1 flex flex-col gap-y-6 font-medium

      sm:mx-10 sm:my-5
    `}
    >
      <div className="flex justify-center text-center">
        Встреча собрания
        <br />
        19 Октября в 10:00 (Třinec)
      </div>

      <div className="flex justify-between rounded-xl bg-blue-100 px-4 py-2 drop-shadow-mainshadow">
        <p>Председатель встречи</p>
        <p className="font-semibold">Пляшко Богдан</p>
      </div>

      <div className={`
        flex justify-between rounded-xl bg-blue-100 px-4 py-2 text-center drop-shadow-mainshadow

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
    // </>

  )
}
