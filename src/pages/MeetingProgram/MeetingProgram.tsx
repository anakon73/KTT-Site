import { ProgramText } from '../../shared/ui/ProgtamText'

export function MeetingProgram() {
  return (
    <div className="flex flex-col items-center">
      <ProgramText>Встреча собрания 19 Октября в 10:00 (Třinec)</ProgramText>
      <div className="flex">
        <div>
          <ProgramText>Председатель встречи</ProgramText>
          <ProgramText>Пляшко Богдан</ProgramText>
        </div>
        <div>
          <ProgramText>Докладчик</ProgramText>
          <ProgramText>Кошелев Владимир</ProgramText>
        </div>
      </div>
      <div>
        <ProgramText>Публичная реч</ProgramText>
        <ProgramText>Долго ли еще стонать человечеству</ProgramText>
      </div>
      <div className="flex">
        <div>
          <ProgramText>Ведущий С.Б.</ProgramText>
          <ProgramText>Данов Александр</ProgramText>
        </div>
        <div>
          <ProgramText>Чтец</ProgramText>
          <ProgramText>Марек Гейда</ProgramText>
        </div>
        <div>
          <ProgramText>Заключительная молитва</ProgramText>
          <ProgramText>Кошелев Владимир</ProgramText>
        </div>
      </div>
      <div>
        <ProgramText>Впс</ProgramText>
        <ProgramText>Марек Гейда</ProgramText>
      </div>
    </div>
  )
}
