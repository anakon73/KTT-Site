import { Menu } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { links } from './config'

export function Navbar() {
  return (
    <div className={`
      flex w-full max-w-[800px] items-center justify-between overflow-hidden rounded-2xl text-sm
      drop-shadow-mainshadow
    `}
    >
      {links.map(link => (
        <NavLink
          className={({ isActive }) => isActive
            ? `w-full rounded-lg border bg-blue-200 p-2 text-center text-sm shadow-innershadow`
            : `w-full rounded-md border bg-indigo-200 p-2 text-center text-sm shadow-innershadow`}
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
