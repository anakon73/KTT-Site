import { LogIn } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../shared/ui/Navbar'

export function DefaultLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200 font-montserrat">
      <div className={`
        relative mx-5 w-full max-w-[1080px]

        lg:mx-20
      `}
      >
        <header className={`
          right-0 flex gap-5 rounded-2xl bg-blue-100 px-5 py-5 drop-shadow-mainshadow

          md:absolute md:-top-5 md:-translate-y-full md:
        `}
        >
          <LogIn className="size-5" />
          <p>Name</p>
        </header>

        <div className="flex w-full items-center justify-center">
          <div className={`
            flex w-full flex-col items-center

            md:flex-row md:gap-10
          `}
          >
            <div><Navbar /></div>
            <div className={`
              w-full max-w-[700px] overflow-hidden rounded-2xl bg-blue-200 drop-shadow-mainshadow
            `}
            >
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
