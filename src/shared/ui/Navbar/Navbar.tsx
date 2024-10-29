import { NavLink } from 'react-router-dom'
import { links } from './config'

export function Navbar() {
  return (
    <nav className={`
      flex w-full max-w-[350px] flex-col overflow-hidden rounded-2xl bg-red-300
      drop-shadow-mainshadow
    `}
    >
      {links.map(link => (
        <NavLink
          className={({ isActive }) => isActive
            ? `flex h-20 items-center justify-center border bg-blue-200 text-center`
            : `flex h-20 items-center justify-center border text-center`}
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}
