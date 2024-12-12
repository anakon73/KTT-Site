import { DataPicker } from '@/shared/ui/data-picker'
import { KInput } from '@/shared/ui/input'
import { lightTheme, Provider } from '@adobe/react-spectrum'
import { useState } from 'react'

export function AdminPanel() {
  const [formData, setFormData] = useState({
    chairman: '',
    speaker: '',
    publicTalk: '',
    sbLeader: '',
    reader: '',
    closingPrayer: '',
    wps: '',
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = () => {
    console.log('Submitted data:', formData)
    // Здесь будет запрос к бэкенду
  }
  return (
    <div className="m-3 flex flex-col gap-y-6 rounded-lg bg-white p-6 pb-8 font-medium shadow-md">
      <Provider theme={lightTheme} colorScheme="light" UNSAFE_className="bg-white text-black">
        <DataPicker />
      </Provider>
      <h1 className="mb-4 text-xl font-semibold text-gray-800">Редактирование Встречи</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Дата и время:</label>
        <p className="mt-1 rounded-lg border border-gray-300 p-2 text-gray-600">19 Октября в 10:00 (Třinec)</p>
      </div>

      <div className="mb-4">
        <label htmlFor="chairman" className="block text-sm font-medium text-gray-700">Председатель встречи</label>
        <KInput
          id="chairman"
          name="chairman"
          value={formData.chairman}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="speaker" className="block text-sm font-medium text-gray-700">Докладчик</label>
        <KInput
          id="speaker"
          name="speaker"
          value={formData.speaker}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="publicTalk" className="block text-sm font-medium text-gray-700">Публичная речь</label>
        <KInput
          id="publicTalk"
          name="publicTalk"
          value={formData.publicTalk}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="sbLeader" className="block text-sm font-medium text-gray-700">Ведущий С.Б.</label>
          <KInput
            id="sbLeader"
            name="sbLeader"
            value={formData.sbLeader}
            onChange={handleChange}
            className="mt-1"
          />
        </div>

        <div>
          <label htmlFor="reader" className="block text-sm font-medium text-gray-700">Чтец</label>
          <KInput
            id="reader"
            name="reader"
            value={formData.reader}
            onChange={handleChange}
            className="mt-1"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="closingPrayer" className="block text-sm font-medium text-gray-700">Заключительная молитва</label>
        <KInput
          id="closingPrayer"
          name="closingPrayer"
          value={formData.closingPrayer}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="wps" className="block text-sm font-medium text-gray-700">ВПС - зал + зум</label>
        <KInput
          id="wps"
          name="wps"
          value={formData.wps}
          onChange={handleChange}
          className="mt-1"
        />
      </div>

      <button
        onClick={handleSubmit}
        className={`
          w-full rounded-2xl bg-blue-500 p-2 text-white

          hover:bg-blue-600
        `}
      >
        Сохранить изменения
      </button>
    </div>
  )
}
