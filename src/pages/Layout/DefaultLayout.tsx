import { Outlet } from 'react-router-dom'
import { Navbar } from '../../shared/ui/Navbar'

export function DefaultLayout() {
  return (
    <div className="flex min-h-screen justify-center bg-sky-100 font-montserrat">
      <div className={`
        relative mt-10 w-full max-w-[1080px] gap-y-8

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
