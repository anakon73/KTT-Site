import { Button, Dialog, DropdownMenu, Flex, TextField } from '@radix-ui/themes'
import { useRef } from 'react'

export function KDialog() {
  const ref = useRef<HTMLButtonElement>(null)

  return (
    <Dialog.Root>
      <DropdownMenu.Item
        onClick={(e) => {
          // ===========
          // Trick 1: this will trigger opening the dialog without closing the dropdown menu.
          e.preventDefault()
          ref?.current?.click()
        }}
      >
        <div>
          <Dialog.Trigger ref={ref}>
            <div></div>
          </Dialog.Trigger>
          Войти
        </div>
      </DropdownMenu.Item>

      <Dialog.Content maxWidth="450px">
        <Dialog.Title className="font-medium">Вход в панель для редактирования</Dialog.Title>
        <Flex direction="column" gap="3">
          <label>
            <p className="mb-1 font-bold">
              Пароль
            </p>
            <TextField.Root />
          </label>
        </Flex>

        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Отменить
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Войти</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  )
};
