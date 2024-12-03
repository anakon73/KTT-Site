import { NavLink } from 'react-router-dom'
import { links } from './config'

export function Navbar() {
  return (
    <nav className={`
      flex w-full max-w-[350px] flex-col overflow-hidden rounded-2xl text-sm drop-shadow-mainshadow

      lg:text-base
    `}
    >
      {links.map(link => (
        <NavLink
          className={({ isActive }) => isActive
            ? `mr-5 flex h-20 items-center justify-center rounded-lg border bg-blue-200 text-center`
            : `
              mr-10 flex h-20 items-center justify-center rounded-md border bg-slate-300 text-center
            `}
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}
