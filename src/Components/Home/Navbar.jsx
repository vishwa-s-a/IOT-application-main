/* eslint-disable no-unused-vars */
import React from "react";

function Navbar() {
  const navItems = (
    <>
      <li className=" navbtn mr-5">
        <a href="/">About</a>
      </li>
      <li className=" navbtn mr-5">
        <a href="/">Products</a>
      </li>
      <li className=" navbtn mr-5">
        <a>Services </a>
      </li>
      <li className=" navbtn mr-5">
        <a>Contact </a>
      </li>
      
    </>
  );

  return (
    <>
      <div>
        <div className="navbar  text-white sticky top-0 z-[20] mx-auto  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {navItems}
              </ul>
            </div>
            <a className="text-2xl font-bold cursor-pointer ml-20">ISAACS</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-10 text-xl">{navItems}</ul>
          </div>
          {/* <div className="navbar-end">
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md hover:bg-slate-900 hover:text-white mr-3">
              Login as Doctor
            </button>
            <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-md hover:bg-slate-900 hover:text-white">
              Login as Patient
            </button>
          </div> */}
          <a href="/signIn-d" className="SpBtn p-1 m-4 text-white"> Sign In as Doctor</a>
          <a href="/signIn-p" className="SpBtn p-1 m-4 text-white"> Sign In as Patient</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
