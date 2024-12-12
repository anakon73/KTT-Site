export function AdminPanel() {
  return (
    <div className={`
      mx-3 my-1 flex flex-col gap-y-6 pb-8 font-medium

      sm:mx-10 sm:my-5 sm:pb-0
    `}
    >
      <div className="grid max-w-[500px] grid-cols-2">
        <div>Председатель встречи:</div>
        <div>2</div>
        <div>Докладчик:</div>
        <div>4</div>
        <div>Публичная речь:</div>
        <div>6</div>
        <div>Ведущий С.Б:</div>
        <div>6</div>
        <div>Чтец:</div>
        <div>6</div>
        <div>Заключительная молитва:</div>
        <div>6</div>
        <div>ВПС - зал + зум в 11:50</div>
        <div>6</div>
      </div>
    </div>
  )
}
