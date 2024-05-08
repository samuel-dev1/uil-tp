import { NavLink } from 'react-router-dom';
import { RouterNames } from '../../enums/router';
import { useState } from 'react';
import { XMarkIcon } from "@heroicons/react/24/outline";

export const TPSidebar = ({ setMobileMenuOpen }) => {
  const [menu] = useState([
    {
      title: 'Dashboard',
      icon: 'https://i.imgur.com/668XTgM.png',
      link: RouterNames.Dashboard
    },
    {
      title: 'My Profile',
      icon: 'https://i.imgur.com/3g3JF2l.png',
      link: RouterNames.TPProfile
    },
    {
      title: 'Select TP School',
      icon: 'https://i.imgur.com/XPXcV9n.png',
      link: RouterNames.TPSelectSchool
    },
    {
      title: 'Change TP School',
      icon: 'https://i.imgur.com/SQR7s8q.png',
      link: RouterNames.Dashboard
    },
    {
      title: 'Print Posting Letter',
      icon: 'https://i.imgur.com/q2dX2uv.png',
      link: RouterNames.TPPostingLetter
    },
    {
      title: 'Change Password',
      icon: 'https://i.imgur.com/jZ8SWeV.png',
      link: RouterNames.TPPassword
    }
  ]);

  return (
    <div className="sidebar w-full">
      <div className="w-full flex items-center justify-center mt-10">
        <img src="https://i.imgur.com/A5AqsH4.png" className="w-20" alt="" />
      </div>
      <div className="sidebar-header flex flex-col items-center justify-center my-8">
        {menu.map((menuItem) => (
          <NavLink
            to={menuItem.link}
            key={menuItem.title}
            className="flex items-center justify-start my-1 w-4/5 hover:bg-white cursor-pointer p-2 hover:rounded-xl"
          >
            <img className="mx-2 w-5 h-5 self-start" src={menuItem.icon} alt="" />
            <h3 className="mx-2 text-background2 text-base">{menuItem.title}</h3>
          </NavLink>
        ))}
      </div>

      <hr className="border-t border-background2 mx-8 my-6" />

      <div className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <img className="w-5 h-5 mx-2" src="https://i.imgur.com/jvxbmbB.png" alt="" />
          <p className="text-background2">Log out</p>
        </div>
      </div>

      <button
              type="button"
              className="absolute top-5 right-5 cursor-pointer lg:hidden block text-background2 " onClick={()=> setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
    </div>
  );
};

