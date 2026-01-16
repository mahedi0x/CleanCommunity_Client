import React, { use, useEffect, useState } from "react";
import { GiPalmTree } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Menu, X, LogOut, ChevronDown } from "lucide-react";

const Navbar = () => {
  const { user, SignOutUser, logOutToast } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Style logic for both Desktop and Mobile
  const navLinkStyles = ({ isActive }) =>
    `relative py-1 text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
      isActive 
      ? "text-green-600 after:w-full" 
      : "text-gray-700 dark:text-gray-200 hover:text-green-600 after:w-0"
    } after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-green-600 after:transition-all after:duration-300`;

  const links = (
    <>
      <NavLink to="/" onClick={() => setOpen(false)} className={navLinkStyles}>Home</NavLink>
      <NavLink to="/all-issues" onClick={() => setOpen(false)} className={navLinkStyles}>All Issues</NavLink>
      <NavLink to="/about" onClick={() => setOpen(false)} className={navLinkStyles}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)} className={navLinkStyles}>Contact</NavLink>
      {user && (
        <>
          
          <NavLink to="/dashboard" onClick={() => setOpen(false)} className={navLinkStyles}>Dashboard</NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white/70 dark:bg-slate-900/80 backdrop-blur-lg border-b border-white/20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-green-600 p-1.5 rounded-lg rotate-3 group-hover:rotate-0 transition-transform">
            <GiPalmTree className="text-white text-2xl" />
          </div>
          <span className="text-2xl font-black tracking-tighter text-slate-800 dark:text-white uppercase italic">
            Clean<span className="text-green-600">BD</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-8">
          {links}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-green-100 transition-colors"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          {user ? (
            <div className="relative group">
              <button className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 pr-3 rounded-full hover:shadow-md transition-all">
                <img src={user?.photoURL} className="w-9 h-9 rounded-full border-2 border-green-500" alt="" />
                <ChevronDown size={14} className="text-gray-500 hidden sm:block" />
              </button>
              
              {/* Profile Dropdown */}
              <div className="absolute right-0 top-full mt-2 w-52 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-gray-100 dark:border-gray-700 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
                <div className="p-4 border-b border-gray-100 dark:border-gray-700">
                  <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Profile</p>
                  <p className="font-bold text-slate-800 dark:text-white truncate">{user?.displayName}</p>
                </div>
                <button onClick={() => SignOutUser().then(logOutToast)} className="w-full flex items-center gap-2 p-4 text-red-500 font-bold hover:bg-red-50 rounded-b-2xl transition-colors">
                  <LogOut size={18} /> Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex items-center gap-2">
              <Link to="/login" className="px-5 py-2 text-sm font-bold text-slate-700 dark:text-white hover:text-green-600">Login</Link>
              <Link to="/register" className="px-6 py-2.5 text-sm font-bold bg-green-600 text-white rounded-xl shadow-lg hover:bg-green-700 transition-all">Sign Up</Link>
            </div>
          )}

          {/* Toggle Menu Button */}
          <button className="lg:hidden p-2 text-slate-800 dark:text-white" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- MOBILE MENU SECTION --- */}
      <div 
        className={`lg:hidden absolute top-20 left-0 w-full bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800 transition-all duration-300 ease-in-out transform shadow-xl ${
          open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-5 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 px-6">
          {links}
          
          {!user && (
            <div className="flex flex-col w-full gap-3 pt-4 border-t border-gray-100 dark:border-gray-800">
              <Link to="/login" onClick={() => setOpen(false)} className="w-full py-3 text-center font-bold text-slate-700 dark:text-white border border-gray-200 dark:border-gray-700 rounded-xl">
                Login
              </Link>
              <Link to="/register" onClick={() => setOpen(false)} className="w-full py-3 text-center font-bold text-white bg-green-600 rounded-xl">
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;