import { useState } from "react";
import { PTSidebar, Nav } from "../../components"
import { Outlet } from "react-router-dom";

export const PTLayout = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  return (
    <>
      <div
        className="flex p-0 m-0 grid grid-cols-1 lg:grid-cols-7 h-screen"
      >
        <div style={{backgroundColor: "rgba(41, 23, 109, 0.1)"}} className="w-80 fixed h-screen px-4 hidden lg:block m-0 col-span-3">
          <PTSidebar />
        </div>
        <div className="col-span-7 h-screen lg:ml-80 ml-0">
        <Nav
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <div className="lg:col-span-4  col-span-1 flex justify-center">
          <Outlet />
        </div>
        </div>
        {mobileMenuOpen && (
          <>
            <div className="lg:hidden w-4/5 h-screen block justify-start items-start flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="h-full w-full justify-start items-start bg-background1 flex px-5  m-0">
                <PTSidebar setMobileMenuOpen={setMobileMenuOpen} />
              </div>
            </div>
          </>
        )}

      </div>

   </>
  )
}
