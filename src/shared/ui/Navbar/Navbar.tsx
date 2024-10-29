import { Link } from 'react-router-dom'
import { links } from './config'

export function Navbar() {
  return (
    <nav className={`
      flex w-full max-w-[350px] flex-col overflow-hidden rounded-2xl bg-red-300
      drop-shadow-mainshadow
    `}
    >
      {links.map(link => <Link className="flex h-20 items-center justify-center text-center" to={link.path}>{link.name}</Link>)}
    </nav>
  )
}
