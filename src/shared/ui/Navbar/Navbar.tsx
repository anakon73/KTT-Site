import { NavLink } from 'react-router-dom'
import { links } from './config'

export function Navbar() {
  return (
    <nav className={`
      flex w-full max-w-[350px] flex-col overflow-hidden rounded-2xl text-sm drop-shadow-mainshadow

      md:text-base
    `}
    >
      {links.map(link => (
        <NavLink
          className={({ isActive }) => isActive
            ? `
              flex h-20 items-center justify-center rounded-lg border bg-blue-200 p-2 text-center
              text-sm shadow-innershadow

              md:mr-7 md:text-base
            `
            : `
              flex h-20 items-center justify-center rounded-md border bg-indigo-200 p-2 text-center
              text-sm shadow-innershadow

              md:mr-10 md:text-base
            `}
          to={link.path}
        >
          {link.name}
        </NavLink>
      ))}
    </nav>
  )
}
