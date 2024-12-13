import { NavLink } from 'react-router-dom'
import { KDropdown } from '../dialog'
import { links } from './config'
import '@radix-ui/themes/styles.css'

export function Navbar() {
  // const isAuth = localStorage.getItem('isAuth') === 'true'
  return (
    <div className={`
      mx-2 flex w-full max-w-[800px] items-center justify-between overflow-hidden rounded-2xl
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

      <KDropdown />
    </div>
  )
}
