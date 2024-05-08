import { Bars3Icon } from "@heroicons/react/24/outline";

export const Nav = ({setMobileMenuOpen}) => {
  return (
    <div className="bg-background2 h-24 w-full flex px-8 items-center justify-between">
      <h1 className="text-white text-xl hidden lg:block">My Profile</h1>
      <button
              type="button"
              className="-m-2.5 lg:hidden cursor-pointer block inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={()=> setMobileMenuOpen(true)}
            >
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>

      <div className="flex items-center">
        <div className="mx-4">
          <h1 className="text-white text-xl">James Cook</h1>
          <p className="text-white text-xs">Student id: 19/2536782</p>
        </div>
      </div>
    </div>
  )
}

