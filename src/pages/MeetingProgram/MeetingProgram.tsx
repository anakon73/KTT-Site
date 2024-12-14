import { useMeetings } from '@/shared/api/meetings/query'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useMemo, useState } from 'react'

export function MeetingProgram() {
  const { data } = useMeetings()

  const [index, setIndex] = useState(0)

  const currentProgram = useMemo(() => {
    if (data)
      return data[index]

    return null
  }, [data, index])

  if (currentProgram === null) {
    return (
      <div>no service</div>
    )
  }

  return (
    <div className={`
      mx-3 my-1 flex flex-col gap-y-6 pb-8 font-medium

      sm:mx-10 sm:my-5 sm:pb-0
    `}
    >
      <div className="flex flex-col justify-center text-center">
        <div>
          {currentProgram.status.title}
        </div>
        <div className="flex justify-center">
          <button
            disabled={index === 0}
            onClick={() => setIndex(prev => prev - 1)}
          >
            <ChevronLeft className="size-5" />
          </button>
          <p>
            {
              currentProgram.date.toLocaleString(
                'ru',
                { day: 'numeric', month: 'long' },
              )
            }
            {' '}
            в
            {' '}
            {`${currentProgram.date.getHours()}:${currentProgram.date.getMinutes().toString().padStart(2, '0')}`}
            {' '}
            (
            {currentProgram.address.address}
            )
          </p>
          <button disabled={index === data!.length - 1} onClick={() => setIndex(prev => prev + 1)}>
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div className="flex justify-between rounded-xl bg-white px-4 py-2 drop-shadow-mainshadow">
        <p>Председатель встречи</p>
        <p className="font-semibold">{currentProgram.leading}</p>
      </div>

      <div className={`
        flex justify-between rounded-xl bg-white py-1 text-center drop-shadow-mainshadow

        md:bg-transparent
      `}
      >
        <div className={`
          rounded-xl px-4 py-2 drop-shadow-mainshadow

          md:bg-white
        `}
        >
          <p>Докладчик</p>
          <p className="mt-2 font-semibold italic">{currentProgram.speaker}</p>
        </div>
        <div className={`
          rounded-xl px-4 py-2 drop-shadow-mainshadow

          md:bg-white
        `}
        >
          <p>Публичная речь:</p>
          <p className="mt-2 font-bold text-slate-900">{currentProgram.speechTitle}</p>
        </div>
      </div>

      <div className={`
        flex justify-between rounded-xl bg-white px-4 py-3 text-center drop-shadow-mainshadow
      `}
      >
        <div>
          <p>Ведущий С.Б.</p>
          <p className="font-semibold">{currentProgram.leadWt}</p>
        </div>
        <div>
          <p>Чтец</p>
          <p className="font-semibold">{currentProgram.reader}</p>
        </div>
      </div>

      <div className="flex justify-between rounded-xl bg-white px-4 py-2 drop-shadow-mainshadow">
        <p>Заключительная молитва</p>
        <p className="font-semibold">{currentProgram.closingPrayer}</p>
      </div>

      <div className="flex items-center justify-around rounded-xl px-4 py-2 text-center">
        <p>
          ВПС - зал + зум в
          <br />
          {`${currentProgram.ministryMeeting.date.getHours()}:${currentProgram.ministryMeeting.date.getMinutes().toString().padStart(2, '0')}`}
        </p>
        <p>
          {currentProgram.ministryMeeting.leader}
        </p>
      </div>
    </div>
  )
}
