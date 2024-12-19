import { AddressCreate } from '@/features/address/create'
import { keys, useAddresses, useDeleteAddress } from '@/shared/api/address'
import { cn } from '@/shared/lib/styles'
import { DataPicker } from '@/shared/ui/data-picker'
import { KInput } from '@/shared/ui/input'
import { lightTheme, Provider } from '@adobe/react-spectrum'
import { Dialog, RadioCards } from '@radix-ui/themes'
import { useQueryClient } from '@tanstack/react-query'
import { Plus, X } from 'lucide-react'
import { useState } from 'react'

export function AdminPanel() {
  const { data } = useAddresses()
  const { mutate } = useDeleteAddress()

  const [addressId, setAddressId] = useState(0)

  const queryClient = useQueryClient()

  const handleDeleteAddress = (id: number) => {
    mutate(
      { id },
      {
        onSettled: () => {
          queryClient.invalidateQueries({ queryKey: keys.getAddresses() })
        },
      },
    )
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

      {data
      && (
        <RadioCards.Root columns={{ initial: '1', sm: '5' }}>
          {data.map(address => (
            <button
              onClick={() => setAddressId(address.id)}
              className={cn(
                'relative h-20 rounded-md border px-4 py-2 text-start',
                addressId === address.id && `border-blue-500`,
              )}
              key={address.id}
            >
              <div
                onClick={(e) => {
                  e.stopPropagation() // Остановка всплытия, чтобы основной <button> не срабатывал
                  handleDeleteAddress(address.id)
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
              <button className="flex size-full items-center justify-center rounded-md border">
                <Plus />
              </button>
            </Dialog.Trigger>
            <AddressCreate />
          </Dialog.Root>
        </RadioCards.Root>
      )}

      <div className="mb-4">
        <label htmlFor="chairman" className="block text-sm font-medium text-gray-700">Место</label>
        <KInput />
      </div>
      <div className="mb-4">
        <label htmlFor="chairman" className="block text-sm font-medium text-gray-700">Председатель встречи</label>
        <KInput />
      </div>

      <div className="mb-4">
        <label htmlFor="speaker" className="block text-sm font-medium text-gray-700">Докладчик</label>
        <KInput />
      </div>

      <div className="mb-4">
        <label htmlFor="publicTalk" className="block text-sm font-medium text-gray-700">Публичная речь</label>
        <KInput />
      </div>

      <div className="mb-4 grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="sbLeader" className="block text-sm font-medium text-gray-700">Ведущий С.Б.</label>
          <KInput />
        </div>

        <div>
          <label htmlFor="reader" className="block text-sm font-medium text-gray-700">Чтец</label>
          <KInput />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="closingPrayer" className="block text-sm font-medium text-gray-700">Заключительная молитва</label>
        <KInput />
      </div>

      <div className="mb-6">
        <label htmlFor="wps" className="block text-sm font-medium text-gray-700">ВПС - зал + зум</label>
        <KInput />
      </div>

      <button
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
