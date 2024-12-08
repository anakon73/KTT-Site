import { DropdownMenu } from '@radix-ui/themes'
import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { links } from './config'
import '@radix-ui/themes/styles.css'

export function Navbar() {
  return (
    <div className={`
      ml-2 flex w-full max-w-[800px] items-center justify-between overflow-hidden rounded-2xl
      text-sm drop-shadow-mainshadow

      md:ml-0
    `}
    >
      {links.map(link => (
        <NavLink
          key={link.name}
          className={({ isActive }) => isActive
            ? `w-full rounded-lg border bg-blue-200 p-2 text-center text-sm`
            : `w-full rounded-md border bg-white p-2 text-center text-sm`}
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <div className="px-1">
            <Menu className="size-8" />
          </div>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content
          variant="soft"
          side="right"
          className={`
            drop-shadow-mainshadow

            md:mx-4
          `}
        >
          <DropdownMenu.Item>Войти</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item color="red">
            Выйти
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
