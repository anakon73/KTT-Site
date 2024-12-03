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
              text-sm

              md:mr-5 md:text-base
            `
            : `
              flex h-20 items-center justify-center rounded-md border bg-slate-300 p-2 text-center
              text-sm

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
