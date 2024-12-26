import { AddressCreate } from '@/features/address/create'
import { useAddresses, useDeleteAddress } from '@/shared/api/address'
import { useAuthRedirect } from '@/shared/auth/auth'
import { cn } from '@/shared/lib/styles'
import { DataPicker } from '@/shared/ui/DataPicker'
import { KInput } from '@/shared/ui/KInput'
import { Dialog, RadioCards, Separator } from '@radix-ui/themes'
import { Plus, X } from 'lucide-react'
import { useState } from 'react'

type MeetingType = 'Собрание' | 'Конгресс' | 'Спец. программа' | 'Вечеря' | null

export function AdminMeeting() {

  const { data } = useAddresses()
  const { mutate } = useDeleteAddress()

  const [addressId, setAddressId] = useState(0)

  const [selectedType, setSelectedType] = useState<MeetingType>(null)
  const [timeInput, setTimeInput] = useState('10:00')

  const handleSelectType = async (type: MeetingType) => {
    setSelectedType(type)
  }
  return (
    <div className={`
      m-3 flex flex-col gap-y-4 rounded-lg bg-white p-6 pb-8 text-sm font-medium shadow-md
      transition-all duration-200 ease-in-out

      dark:bg-dark-primary dark:text-gray-200 dark:shadow-none

      sm:gap-y-6 sm:text-base
    `}
    >
      <h1 className="mb-2 text-xl font-semibold">Редактирование Встречи</h1>
      <div className="flex justify-between gap-10">
        <div>
          <p className="mb-1">Дата:</p>
          <DataPicker />
        </div>
        <div className="flex flex-col">
          <label htmlFor="timeInput">Время:</label>
          <input
            id="timeInput"
            type="time"
            value={timeInput}
            onChange={e => setTimeInput(e.target.value)}
            className={`
              mt-1 rounded-lg border border-gray-300 p-2 text-sm font-medium shadow-sm
              transition-all duration-200 ease-in-out

              dark:border-gray-600 dark:bg-dark-bg dark:text-gray-200 dark:focus:ring-blue-500

              focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200
            `}
          />
        </div>
      </div>
      <div>
        <div className="mb-2">
          Тип встречи:
        </div>
        <RadioCards.Root columns={{ initial: '2', sm: '4' }}>

          {['Собрание', 'Конгресс', 'Спец. программа', 'Вечеря'].map(type => (
            <button
              onClick={() => handleSelectType(type as MeetingType)}
              className={cn(
                `
                  relative h-16 rounded-md border px-4 py-2 text-start transition-all duration-200
                  ease-in-out

                  dark:border-gray-600

                  sm:w-full
                `,
                selectedType === type
                  ? `
                    scale-100 border-blue-500 shadow-md

                    dark:border-blue-500 dark:bg-dark-bg

                    sm:scale-105
                  `
                  : 'hover:shadow-sm',
              )}
              key={type}
            >
              <p className="font-bold">{type}</p>
            </button>
          ))}
        </RadioCards.Root>
      </div>

      {data
      && (
        <div>
          <div className="mb-2">
            Адресс:
          </div>
          <RadioCards.Root columns={{ initial: '2', sm: '4' }}>
            {data.map(address => (
              <button
                onClick={() => setAddressId(address.id)}
                className={cn(
                  `
                    relative h-20 rounded-md border px-4 py-2 text-start transition-all duration-200
                    ease-in-out

                    dark:border-gray-600
                  `,
                  addressId === address.id && `
                    border-blue-500 shadow-md

                    dark:border-blue-500 dark:bg-dark-bg

                    sm:scale-105
                  `,
                )}
                key={address.id}
              >
                <div
                  onClick={(e) => {
                    e.stopPropagation()
                    mutate({ id: address.id })
                  }}
                  className="absolute right-1 top-1 cursor-pointer"
                  role="button"
                  tabIndex={0}
                >
                  <X className="size-3" />
                </div>
                <p className="font-bold">{address.address}</p>
                <a
                  href={address.addressUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative z-10 cursor-pointer"
                >
                  Адресс
                </a>
              </button>
            ))}
            <Dialog.Root>
              <Dialog.Trigger>
                <button className={`
                  flex size-full items-center justify-center rounded-md border py-4

                  dark:border-gray-600
                `}
                >
                  <Plus />
                </button>
              </Dialog.Trigger>
              <AddressCreate />
            </Dialog.Root>
          </RadioCards.Root>
        </div>
      )}

      <KInput label="Председатель встречи:" />

      <div className={`
        grid-cols-2 gap-4

        sm:grid
      `}
      >
        <KInput label="Докладчик:" />
        <KInput label="Публичная речь:" />
      </div>

      <div className={`
        grid-cols-2 gap-4

        sm:grid
      `}
      >
        <KInput label="Ведущий С.Б.:" />

        <KInput label="Чтец:" />
      </div>

      <KInput label="Заключительная молитва:" />

      <button
        className={`
          w-full rounded-2xl bg-blue-800 p-2 text-white transition-all duration-300 ease-in-out

          hover:bg-blue-600
        `}
      >
        Сохранить изменения
      </button>
      <Separator className="h-0.5 w-full" />
      <h1 className="mb-2 text-xl font-semibold">Редактирование Обслуживающих</h1>

      <KInput label="Сцена:" />
      <KInput label="Микрофоны:" />
      <KInput label="Аппаратура:" />
      <KInput label="Распорямдители:" />
      <button
        className={`
          w-full rounded-2xl bg-blue-800 p-2 text-white transition-all duration-300 ease-in-out

          hover:bg-blue-600
        `}
      >
        Сохранить изменения
      </button>
    </div>
  )
}
