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

      <div className="flex justify-between rounded-xl bg-white px-4 py-2 drop-shadow-mainshadow">
        <p>Председатель встречи</p>
        <p className="font-semibold">Пляшко Богдан</p>
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
          <p className="mt-2 font-semibold italic">Кошелев Владимир</p>
        </div>
        <div className={`
          rounded-xl px-4 py-2 drop-shadow-mainshadow

          md:bg-white
        `}
        >
          <p>Публичная речь:</p>
          <p className="mt-2 font-bold text-slate-900">Долго ли еще стонать Человечеству?</p>
        </div>
      </div>

      <div className={`
        flex justify-between rounded-xl bg-white px-4 py-3 text-center drop-shadow-mainshadow
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

      <div className="flex justify-between rounded-xl bg-white px-4 py-2 drop-shadow-mainshadow">
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

// import { CalendarDate, startOfWeek } from '@internationalized/date';

// function getNextSecondSunday() {
//   const today = new CalendarDate(); // Текущая дата
//   const startOfThisWeek = startOfWeek(today, 'sunday'); // Найдем начало недели

//   // Если текущее воскресенье — это первое, то следующее второе будет через 7 дней
//   const secondSunday = startOfThisWeek.add({ days: 7 }); // Переходим ко второму воскресенью
//   return secondSunday;
// }

// // Функция для получения следующего собрания после заданной даты
// function getNextMeetingDate(startDate: CalendarDate) {
//   let nextMeeting = getNextSecondSunday();

//   // Проверим, если текущее второе воскресенье уже прошло, получим следующее
//   while (nextMeeting.compareTo(startDate) <= 0) {
//     nextMeeting = nextMeeting.add({ days: 14 }); // Переход к следующему второму воскресенью
//   }

//   return nextMeeting;
// }

// import { useEffect, useState } from 'react';

// function MeetingProgram() {
//   const [meeting, setMeeting] = useState(null);
//   const [nextMeetingDate, setNextMeetingDate] = useState(null);

//   useEffect(() => {
//     const nextSecondSunday = getNextSecondSunday();
//     const nextMeeting = getNextMeetingDate(nextSecondSunday);
//     const formattedDate = nextMeeting.toDate().toISOString().split('T')[0]; // Форматируем дату в строку (yyyy-mm-dd)

//     // Запрос на бэкенд для получения встречи
//     fetch(`/api/meetings/date/${formattedDate}`)
//       .then(response => response.json())
//       .then(data => {
//         setMeeting(data);
//         setNextMeetingDate(nextMeeting);  // Сохраняем дату ближайшего собрания
//       })
//       .catch(error => console.error("Error fetching meeting data:", error));
//   }, []);

//   if (!meeting) {
//     return <div>Загрузка...</div>;
//   }

//   return (
//     <div>
//       <h1>Ближайшая встреча:</h1>
//       <p>Дата: {nextMeetingDate.toDate().toLocaleDateString()}</p>
//       <p>{meeting.speaker} будет говорить на тему "{meeting.speech_title}"</p>
//       <p>Место: <a href={meeting.place_url} target="_blank" rel="noopener noreferrer">{meeting.place_address}</a></p>
//     </div>
//   );
// }

// export default MeetingProgram;
