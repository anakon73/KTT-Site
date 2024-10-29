import { LogIn } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../../shared/ui/Navbar'

export function DefaultLayout() {
  return (
    <div className="flex min-h-screen items-center justify-center font-montserrat">
      <div className="relative">
        <header className={`
          absolute -top-5 right-0 flex -translate-y-full gap-10 rounded-2xl bg-blue-100 px-5 py-5
          drop-shadow-mainshadow
        `}
        >
          <LogIn className="size-5" />
          <p>Name</p>
        </header>
        <div className="flex w-full gap-x-5">
          <Navbar />
          <div className="w-[830px] overflow-hidden rounded-2xl bg-violet-300 drop-shadow-mainshadow"><Outlet /></div>
        </div>
      </div>
    </div>

  // <div className="min-h-screen">
  //   <div className="max-w-[1000px] max-h-[900px] m-auto font-montserrat">
  //     <div className="relative">
  //       <header className="absolute right-0 -translate-y-full -top-5 flex px-5 py-5 bg-blue-100 gap-10 rounded-2xl">
  //         <LogIn className="size-5" />
  //         <p>Name</p>
  //       </header>
  //       <div className="flex w-full">
  //         <Navbar />
  //         <div className="bg-violet-300 rounded-2xl overflow-hidden max-w-[830px] w-full"><Outlet /></div>
  //       </div>
  //     </div>
  //   </div>
  // </div>
  )
}
