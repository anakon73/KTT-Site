import { LogIn } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../shared/ui/Navbar'

export function DefaultLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center font-montserrat">
      <div className="relative">
        <header className={`
          absolute -top-5 right-0 flex -translate-y-full gap-5 rounded-2xl bg-blue-100 px-5 py-5
          drop-shadow-mainshadow
        `}
        >
          <LogIn className="size-5" />
          <p>Name</p>
        </header>
        <div className="flex w-full gap-x-5">
          <div><Navbar /></div>
          <div className={`
            h-[600px] w-[830px] overflow-hidden rounded-2xl bg-blue-200 drop-shadow-mainshadow
          `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}
