import React from 'react';
import { Outlet, NavLink, Link } from 'react-router';
import { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider/AuthProvider';
import { 
  LayoutDashboard, 
  PlusCircle, 
  List, 
  Heart, 
  User, 
  LogOut, 
  Menu,
  Home
} from 'lucide-react';

const DashboardLayout = () => {
  const { user, SignOutUser, logOutToast } = use(AuthContext);

  const handleLogout = () => {
    SignOutUser()
      .then(logOutToast)
      .catch((error) => console.error(error));
  };

  const menuItems = (
    <>
      <li className="mb-2">
        <NavLink 
          to="/dashboard" 
          end
          className={({ isActive }) => 
            isActive ? "active bg-green-600 text-white font-bold" : "font-medium hover:bg-green-50 hover:text-green-700"
          }
        >
          <LayoutDashboard size={20} />
          Overview
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink 
          to="/dashboard/add-issues" 
          className={({ isActive }) => 
            isActive ? "active bg-green-600 text-white font-bold" : "font-medium hover:bg-green-50 hover:text-green-700"
          }
        >
          <PlusCircle size={20} />
          Add New Issue
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink 
          to="/dashboard/my-issues" 
          className={({ isActive }) => 
            isActive ? "active bg-green-600 text-white font-bold" : "font-medium hover:bg-green-50 hover:text-green-700"
          }
        >
          <List size={20} />
          My Issues
        </NavLink>
      </li>
      <li className="mb-2">
        <NavLink 
          to="/dashboard/my-contribution" 
          className={({ isActive }) => 
            isActive ? "active bg-green-600 text-white font-bold" : "font-medium hover:bg-green-50 hover:text-green-700"
          }
        >
          <Heart size={20} />
          My Contributions
        </NavLink>
      </li>
      <div className="divider my-4"></div>
      <li className="mb-2">
        <NavLink 
          to="/dashboard/profile" 
          className={({ isActive }) => 
            isActive ? "active bg-green-600 text-white font-bold" : "font-medium hover:bg-green-50 hover:text-green-700"
          }
        >
          <User size={20} />
          My Profile
        </NavLink>
      </li>
      <li>
        <NavLink 
          to="/" 
          className="font-medium hover:bg-gray-100"
        >
          <Home size={20} />
          Back to Home
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open bg-gray-50 dark:bg-gray-900 min-h-screen font-sans">
      <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
      
      <div className="drawer-content flex flex-col">
        {/* Navbar for Mobile */}
        <div className="w-full navbar bg-white dark:bg-slate-800 shadow-sm lg:hidden z-10 sticky top-0">
          <div className="flex-none">
            <label htmlFor="dashboard-drawer" aria-label="open sidebar" className="btn btn-square btn-ghost">
              <Menu size={24} />
            </label>
          </div>
          <div className="flex-1 px-2 mx-2 text-xl font-bold text-slate-800 dark:text-white">
            Clean<span className="text-green-600">BD</span> Dash
          </div>
          <div className="flex-none">
            <div className="avatar">
              <div className="w-8 rounded-full">
                <img src={user?.photoURL} alt="User" />
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-4 md:p-8 flex-1 overflow-x-hidden">
          <Outlet />
        </div>
      </div> 
      
      {/* Sidebar */}
      <div className="drawer-side z-20">
        <label htmlFor="dashboard-drawer" aria-label="close sidebar" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-72 min-h-full bg-white dark:bg-slate-800 border-r border-gray-100 dark:border-slate-700 bg-base-100 text-base-content flex flex-col">
          {/* Logo Area */}
          <div className="flex items-center gap-2 px-4 py-6 mb-2">
             <div className="bg-green-600 p-1.5 rounded-lg rotate-3">
               <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
               </svg>
             </div>
             <span className="text-xl font-black tracking-tighter text-slate-800 dark:text-white uppercase italic">
               Clean<span className="text-green-600">BD</span>
             </span>
          </div>

          {/* Menu Items */}
          <div className="flex-1">
            {menuItems}
          </div>

          {/* User Info & Logout */}
          <div className="pt-4 border-t border-gray-100 dark:border-slate-700 mt-auto">
            <div className="flex items-center gap-3 px-2 mb-4">
              <div className="avatar online">
                <div className="w-10 rounded-full border border-gray-200">
                  <img src={user?.photoURL || "https://i.pravatar.cc/150?u=fake"} alt="User" />
                </div>
              </div>
              <div className="overflow-hidden">
                <p className="font-bold text-sm truncate text-slate-700 dark:text-gray-200">{user?.displayName}</p>
                <p className="text-xs text-gray-400 truncate">{user?.email}</p>
              </div>
            </div>
            <button 
              onClick={handleLogout}
              className="btn btn-outline btn-error btn-sm w-full flex items-center gap-2"
            >
              <LogOut size={16} /> Logout
            </button>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
