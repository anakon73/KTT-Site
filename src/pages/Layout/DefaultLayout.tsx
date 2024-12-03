import { LogIn } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../shared/ui/Navbar'

export function DefaultLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-200 font-montserrat">
      <div className={`
        relative mx-5 my-5 w-full max-w-[1080px] flex-row gap-y-8

        lg:mx-20

        md:mx-10
      `}
      >
        <header className={`
          mb-5 flex gap-5 rounded-2xl bg-blue-100 px-5 py-5 text-sm drop-shadow-mainshadow

          md:absolute md:-top-5 md:right-0 md:mb-0 md:-translate-y-full
        `}
        >
          <LogIn className="size-5" />
          <p>Name</p>
        </header>

        <div className="flex w-full items-center justify-center">
          <div className={`
            flex w-full flex-col items-center justify-center gap-y-5

            md:flex-row
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
