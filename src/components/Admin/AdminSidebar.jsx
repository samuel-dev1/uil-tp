import { NavLink, useNavigate } from 'react-router-dom';
import { RouterNames } from '../../enums/router';
import { useState } from 'react';
import { XMarkIcon } from "@heroicons/react/24/outline";

export const AdminSidebar = ({ setMobileMenuOpen }) => {
  const navigate = useNavigate(); // Hook must be used inside the functional component

  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    navigate('/adminlogin'); // Redirect to login page
    alert("logout succesfully")
  };

  const [menu] = useState([
    {
      title: 'Dashboard',
      icon: 'https://i.imgur.com/668XTgM.png',
      link: RouterNames.AdminDashboardPage
    },
    {
      title: 'Students Management',
      icon: 'https://i.imgur.com/EhyJ3nK.png',
      link: RouterNames.StudentManagement
    },
    {
      title: 'Lecturer Management',
      icon: 'https://i.imgur.com/EhyJ3nK.png',
      link: RouterNames.LecturerManagement
    },
    {
      title: 'School Management',
      icon: 'https://i.imgur.com/HisInPr.png',
      link: RouterNames.SchoolManagement
    },
    {
      title: 'Session Management',
      icon: 'https://i.imgur.com/gzoogm5.png',
      link: RouterNames.SessionManagement
    },
    {
      title: 'Upload',
      icon: 'https://i.imgur.com/gzoogm5.png',
      link: RouterNames.AdminUploadPage
    }
  ]);

  return (
    <div className="sidebar relative w-full">
      <div className="w-full flex items-center justify-center mt-10">
        <img src="https://i.imgur.com/A5AqsH4.png" className="w-20" alt="Logo" />
      </div>
      <div className="sidebar-header flex flex-col items-center justify-center my-8">
        {menu.map((menuItem) => (
          <NavLink
            to={menuItem.link}
            key={menuItem.title}
            className="flex items-center justify-start my-1 w-4/5 hover:bg-white cursor-pointer p-2 hover:rounded-xl"
          >
            <img className="mx-0 w-5 h-5 self-start" src={menuItem.icon} alt={menuItem.title} />
            <h3 className="mx-2 text-background2 text-base flex">{menuItem.title}</h3>
          </NavLink>
        ))}
      </div>

      <hr className="border-t border-background2 mx-8 my-6" />

      <div className="w-full flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <img className="w-5 h-5 mx-2" src="https://i.imgur.com/jvxbmbB.png" alt="Logout Icon" />
          <button className="text-background2" onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <button
        type="button"
        className="absolute top-5 right-5 cursor-pointer lg:hidden block text-background2"
        onClick={() => setMobileMenuOpen(false)}
      >
        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
  );
};
