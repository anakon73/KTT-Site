import { keys, useAddresses, useCreateAddress } from '@/shared/api/address'
import { DataPicker } from '@/shared/ui/data-picker'
import { KInput } from '@/shared/ui/input'
import { lightTheme, Provider } from '@adobe/react-spectrum'
import { Button, Dialog, Flex, RadioCards, Text, TextField } from '@radix-ui/themes'
import { useQueryClient } from '@tanstack/react-query'
import { Plus } from 'lucide-react'
import { useState } from 'react'

export function AdminPanel() {
  const [newAddress, setNewAddress] = useState('')
  const [newAddressUrl, setNewAddressUrl] = useState('')

  const { mutate } = useCreateAddress()
  const queryClient = useQueryClient()

  const handleCreateAddress = () => {
    mutate({
      address: newAddress,
      address_url: newAddressUrl,

    }, { onSettled: () => {
      queryClient.invalidateQueries({ queryKey: keys.getAddresses() })
    } })
  }
  const { data } = useAddresses()

  return (
    <div className="m-3 flex flex-col gap-y-6 rounded-lg bg-white p-6 pb-8 font-medium shadow-md">
      <Provider theme={lightTheme} colorScheme="light" UNSAFE_className="bg-white text-black">
        {/* <DataPicker /> */}
      </Provider>
      <h1 className="mb-4 text-xl font-semibold text-gray-800">Редактирование Встречи</h1>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Дата и время:</label>
        <p className="mt-1 rounded-lg border border-gray-300 p-2 text-gray-600">19 Октября в 10:00 (Třinec)</p>
      </div>

      {data
      && (
        <RadioCards.Root defaultValue="1" columns={{ initial: '1', sm: '5' }}>
          { data.map(address => (
            <RadioCards.Item value={address.id} key={address.id}>
              <Flex direction="column" width="100%">
                <Text weight="bold">{address.address}</Text>
                <a
                  href={address.addressUrl}
                >
                  Адресс
                </a>
              </Flex>
            </RadioCards.Item>
          ))}
          <Dialog.Root>
            <Dialog.Trigger>
              <button className="flex size-full items-center justify-center rounded-md border">
                <Plus />
              </button>
            </Dialog.Trigger>

            <Dialog.Content maxWidth="450px">
              <Dialog.Title>Добавить адресс</Dialog.Title>

              <Flex direction="column" gap="3">
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Место или город
                  </Text>
                  <TextField.Root
                    value={newAddress}
                    onChange={e => setNewAddress(e.target.value)}
                    placeholder="Название места, города"
                  />
                </label>
                <label>
                  <Text as="div" size="2" mb="1" weight="bold">
                    Ссылка
                  </Text>
                  <TextField.Root
                    value={newAddressUrl}
                    onChange={e => setNewAddressUrl(e.target.value)}
                    placeholder="Вставь ссылку с карты"
                  />
                </label>
              </Flex>

              <Flex gap="3" mt="4" justify="end">
                <Dialog.Close>
                  <Button variant="soft" color="gray">
                    Cancel
                  </Button>
                </Dialog.Close>
                <Dialog.Close>
                  <Button onClick={handleCreateAddress}>Создать</Button>
                </Dialog.Close>
              </Flex>
            </Dialog.Content>
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
