import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { links } from './config'

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
            : `w-full rounded-md border bg-sky-200 p-2 text-center text-sm`}
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
      <button className="max-w-44 px-3">
        <Menu />
      </button>
    </div>
  )
}
