import React, { use, useEffect } from "react";
import { GiPalmTree } from "react-icons/gi";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../Provider/AuthProvider/AuthProvider";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const { user, SignOutUser, logOutToast } = use(AuthContext);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };

  const handleSignOut = () => {
    SignOutUser()
      .then(() => {
        logOutToast();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const links = (
    <>
      <NavLink to="/" className="nav-item">
        Home
      </NavLink>
      <NavLink to="/all-issues" className="nav-item">
        All Issues
      </NavLink>
      {user && (
        <>
          <NavLink to="/add-issues" className="nav-item">
            Add Issues
          </NavLink>
          <NavLink to="/my-issues" className="nav-item">
            My Issues
          </NavLink>
          <NavLink to="/my-contribution" className="nav-item">
            My Contribution
          </NavLink>
        </>
      )}
    </>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/50 backdrop-blur-sm shadow-md w-full px-5">
      <div className="max-w-9xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <GiPalmTree className="text-3xl text-green-700" />
          <span className="text-2xl font-bold text-[#2e4a33] tracking-wide">
            CleanBD
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-6 text-[#2e4a33] font-semibold">
          {links}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <label className="toggle text-base-content">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              checked={theme === "dark"}
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>
          {user ? (
            <div className="relative group">
              <img
                src={user?.photoURL || "placeholder.png"}
                alt="profile"
                className="w-11 h-11 rounded-full border-2 border-[#2e4a33] cursor-pointer"
              />

              {/* Dropdown */}
              <div className="absolute right-0  w-58 bg-white shadow-lg  rounded-xl p-3 opacity-0 group-hover:opacity-100 transition-all duration-600 pointer-events-none group-hover:pointer-events-auto">
                <p className="font-semibold text-[#2e4a33] py-3">
                  {user?.displayName}
                </p>
                <p className="text-sm text-gray-600">{user?.email}</p>
                <div className="border-t my-2"></div>
                <button
                  onClick={handleSignOut}
                  className="w-full py-2 text-center font-semibold text-red-600 hover:bg-red-500 hover:text-white rounded-lg transition"
                >
                  Logout
                </button>
              </div>
            </div>
          ) : (
            <div className="hidden lg:flex gap-3">
              <Link
                to="/login"
                className="sign btn btn-outline md:px-10 border-green-700 text-green-800 hover:bg-[#2e4a33] hover:text-white cursor-pointer"
              >
                Login
              </Link>
              <NavLink
                to="/register"
                className="sign btn btn-outline md:px-10 border-green-700 text-green-800 hover:bg-[#2e4a33] hover:text-white"
              >
                Sign Up
              </NavLink>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button className="lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden flex flex-col items-center gap-4 px-6 pb-4 text-[#2e4a33] font-semibold animate-fadeIn">
          {links}

          <label className="toggle text-base-content">
            <input
              onChange={(e) => handleTheme(e.target.checked)}
              type="checkbox"
              checked={theme === "dark"}
              className="theme-controller"
            />

            <svg
              aria-label="sun"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M12 2v2"></path>
                <path d="M12 20v2"></path>
                <path d="m4.93 4.93 1.41 1.41"></path>
                <path d="m17.66 17.66 1.41 1.41"></path>
                <path d="M2 12h2"></path>
                <path d="M20 12h2"></path>
                <path d="m6.34 17.66-1.41 1.41"></path>
                <path d="m19.07 4.93-1.41 1.41"></path>
              </g>
            </svg>

            <svg
              aria-label="moon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
              </g>
            </svg>
          </label>

          {!user && (
            <div className="flex flex-col w-full gap-3">
              <Link to="/login" className="auth-btn w-full text-center">
                Login
              </Link>
              <NavLink to="/register" className="auth-btn w-full text-center">
                Sign Up
              </NavLink>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
