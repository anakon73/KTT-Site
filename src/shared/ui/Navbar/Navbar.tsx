import { ThemeSwitcher } from '@/features/theme-switcher'
import { NavLink } from 'react-router-dom'
import { KDropdown } from '../dialog'
import { links } from './config'
import '@radix-ui/themes/styles.css'

export function Navbar() {
  // const isAuth = localStorage.getItem('isAuth') === 'true'
  return (
    <div className={`
      mx-2 flex w-full max-w-[800px] items-center justify-between overflow-hidden text-sm
      drop-shadow-mainshadow

      dark:text-gray-200 dark:drop-shadow-none

      md:ml-0
    `}
    >
      <div className="flex w-full items-center gap-2">
        {links.map(link => (
          <NavLink
            key={link.name}
            className={({ isActive }) => isActive
              ? `
                w-full rounded-lg border bg-blue-200 p-2 text-center text-sm transition-all
                duration-200 ease-in-out

                dark:border-gray-700 dark:bg-gray-800
              `
              : `
                w-full rounded-md border bg-white p-2 text-center text-sm transition-all
                duration-200 ease-in-out

                dark:bg-dark-primary dark:border-gray-700
              `}
            to={link.path}
          >
            {link.name}
          </NavLink>
        ))}
        <ThemeSwitcher />
        <KDropdown />
      </div>
    </div>
  )
}
