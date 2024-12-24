import { useMinistryMeetings } from '@/shared/api/ministry_meeting'

export function MinistryMeeting() {
  const { data } = useMinistryMeetings()

  return (
    <>
      <div className={`
        mx-3 mt-1 pb-4 text-sm font-medium

        dark:text-gray-200

        sm:mx-8 sm:my-5 sm:text-base
      `}
      >

        <div>
          <div
            className={`
              mb-3 hidden grid-cols-7 gap-4 px-4 font-bold

              sm:grid
            `}
          >
            <p>Дата</p>
            <p>Время</p>
            <p className="col-span-3">Место</p>
            <p className="col-span-2">Ведущий</p>
          </div>

          <div className="flex flex-col gap-y-3">
            {data && data.map(meeting => (
              <div
                key={meeting.id}
                className={`
                  rounded-lg bg-white px-2 py-2 drop-shadow-md transition-all duration-200
                  ease-in-out

                  dark:bg-dark-bg

                  sm:px-4 sm:py-3
                `}
              >
                <div
                  className={`
                    grid grid-cols-2 gap-1

                    sm:grid-cols-7 sm:gap-4
                  `}
                >
                  <div className="sm:col-auto">
                    <p className={`
                      text-sm font-semibold text-gray-500

                      sm:hidden
                    `}
                    >
                      Дата
                    </p>
                    <p>
                      {
                        meeting.date.toLocaleString(
                          'ru',
                          { day: 'numeric', month: 'numeric', year: 'numeric' },
                        )
                      }
                    </p>
                  </div>
                  <div className="sm:col-auto">
                    <p className={`
                      text-sm font-semibold text-gray-500

                      sm:hidden
                    `}
                    >
                      Время
                    </p>
                    <p>
                      {`${meeting.friendlyMeeting.date.getHours()}:${meeting.friendlyMeeting.date.getMinutes().toString().padStart(2, '0')}`}
                    </p>
                  </div>

                  <div className={`
                    col-span-2

                    sm:col-span-3
                  `}
                  >
                    <p className={`
                      text-sm font-semibold text-gray-500

                      sm:hidden
                    `}
                    >
                      Место
                    </p>
                    <a href="#" className="text-blue-500 underline">
                      {meeting.address.address}
                    </a>
                  </div>

                  <div className="sm:col-span-2">
                    <p className={`
                      text-sm font-semibold text-gray-500

                      sm:hidden
                    `}
                    >
                      Ведущий
                    </p>
                    <p>{meeting.leader}</p>
                  </div>
                </div>

                <div className={`
                  mt-2 flex flex-col gap-2 rounded-xl bg-blue-200 px-3 py-2 drop-shadow-mainshadow
                  transition-all duration-200 ease-in-out

                  dark:bg-dark-primary
                `}
                >
                  <p className="text-center font-bold">Дружеская встреча</p>
                  <p>
                    {meeting.friendlyMeeting.description}
                  </p>
                  <div className={`
                    flex max-w-[500px] flex-col justify-between gap-2

                    sm:flex-row
                  `}
                  >
                    <div className={`
                      flex max-w-[350px] gap-4

                      sm:block
                    `}
                    >
                      <p className="font-bold">
                        Место
                      </p>
                      <a href="#" className="text-blue-600 underline">
                        {meeting.friendlyMeeting.address}
                      </a>
                    </div>
                    <div className={`
                      flex gap-4

                      sm:block
                    `}
                    >
                      <p className="font-bold">
                        Время
                      </p>
                      <p>
                        {`${meeting.friendlyMeeting.date.getHours()}:${meeting.friendlyMeeting.date.getMinutes().toString().padStart(2, '0')}`}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
