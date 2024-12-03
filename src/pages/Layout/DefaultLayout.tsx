// import { LogIn } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../shared/ui/Navbar'

export function DefaultLayout() {
  return (
    <div className="flex h-full min-h-screen justify-center bg-sky-100 font-montserrat">
      <div className={`
        relative mt-10 w-full max-w-[1080px] gap-y-8 pb-8

        lg:mx-20

        md:mx-10
      `}
      >
        <div className="flex w-full flex-col items-center justify-center gap-y-5">
          <Navbar />
          <div className={`
            w-full max-w-[800px] overflow-hidden rounded-2xl bg-blue-200 drop-shadow-mainshadow
          `}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </div>

  )
}

/* <header className={`
          mb-5 flex gap-5 rounded-2xl bg-blue-100 px-5 py-5 text-sm drop-shadow-mainshadow

          md:absolute md:-top-5 md:right-0 md:mb-0 md:-translate-y-full
        `}
        >
          <LogIn className="size-5" />
          <p>Name</p>
        </header> */
