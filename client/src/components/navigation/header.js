import React, { useState } from "react";
import {
  FaCartArrowDown,
  FaEnvelope,
  FaBell,
  FaUser,
  FaSearch,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../logo/logo.png";
const Header = ({ users, signOutUser }) => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(true);
  };
  return (
    <>
      {/* <!-- Start Navbar --> */}
      <nav className="bg-[#E86E25] shadow p-3.5 sticky top-0 z-50 font-poppins">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex justify-center items-center">
              <Link to="/">
                <div>
                  <img src={logo} className="w-36" alt="" />
                </div>
              </Link>

              <div className="hidden md:block ml-8 group relative">
                <img
                  src="./images/category-icon.svg"
                  className="w-8 h-8 cursor-pointer"
                  alt=""
                />
                <div className="dropdown-content bg-white hidden absolute group-hover:block min-w-[200px] border-2 rounded-lg">
                  <ul className="list-none">
                    <li>
                      <a
                        href="/"
                        className="block bg-white hover:bg-slate-50 py-4 px-8 hover:text-red-500"
                      >
                        HTML
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block bg-white hover:bg-slate-50 py-4 px-8 hover:text-red-500"
                      >
                        CSS
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block bg-white hover:bg-slate-50 py-4 px-8 hover:text-red-500"
                      >
                        Tailwind
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block bg-white hover:bg-slate-50 py-4 px-8 hover:text-red-500"
                      >
                        React
                      </a>
                    </li>
                    <li>
                      <a
                        href="/"
                        className="block bg-white hover:bg-slate-50 py-4 px-8 hover:text-red-500"
                      >
                        Javascript
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hidden md:block ml-16 relative">
                <span className="absolute top-2.5 left-4">
                  <FaSearch />
                </span>
                <input
                  type="search"
                  className="transition min-w-[300px] rounded-md p-3 pl-12 text-xs bg-slate-100 outline-none outline-1 focus:outline-red-300"
                  placeholder="Search for Tuts,Videos,Tutors etc...."
                />
              </div>
            </div>

            <div className="flex justify-center items-center pr-4 md:pr-0">
              <div className="flex items-center cursor-pointer mr-1">
                <Link to='/shop'>
                <p className="font-bold text-white text-sm bg-red-500 py-1.5 p-1 mb-1 rounded-lg">
                  Shop
                </p>
                </Link>
                
              </div>
              {users.auth ? (
                <div className="flex items-center">
                  <ul className="list-none">
                    <li className="inline-block  mx-2 sm:mx-3 md:mx-3 relative group">
                      <Link
                        to="/dashboard/user/user_cart"
                        className="text-gray-500 text-xl group-hover:opacity-75 "
                      >
                        <span className="absolute -top-2 bg-red-500 text-white -right-3.5 pl-1.5 text-sm w-5 h-5 rounded-full">
                          2
                        </span>
                        <FaCartArrowDown className=" text-lg text-slate-900" />
                      </Link>
                    </li>
                    <li className="inline-block  mx-2 sm:mx-3 md:mx-3 relative group">
                      <a
                        href="/"
                        className="text-gray-500 text-xl group-hover:opacity-75 "
                      >
                        <span className="absolute -top-2 bg-red-500 text-white -right-3.5 pl-1.5 text-sm w-5 h-5 rounded-full">
                          3
                        </span>
                        <FaEnvelope className="text-lg text-slate-900 " />
                      </a>
                      <div className="hidden group-hover:block absolute shadow w-64 p-4 bg-white">
                        <div className="flex p-2 border-b border-slate-200">
                          <div className="mr-2">
                            <i className="fa-solid fa-user-circle text-lg p-2"></i>
                          </div>
                          <div>
                            <h3 className="text-gray-500 font-normal">
                              Imtiaz Ahmed Chowdhury
                            </h3>
                            <p className="text-gray-400 text-xs">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </p>
                            <p className="text-gray-400 text-[10px] mt-2">
                              2 min ago
                            </p>
                          </div>
                        </div>
                        <div className="flex p-2">
                          <div className="mr-2">
                            <i className="fa-solid fa-user-circle text-lg p-2"></i>
                          </div>
                          <div>
                            <h3 className="text-gray-500 font-normal">
                              Imtiaz Ahmed Chowdhury
                            </h3>
                            <p className="text-gray-400 text-xs">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </p>
                            <p className="text-gray-400 text-[10px] mt-2">
                              2 min ago
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="inline-block  mx-2 sm:mx-3 md:mx-3 relative group">
                      <a
                        href="/"
                        className="text-gray-500 text-xl group-hover:opacity-75 "
                      >
                        <span className="absolute -top-2 bg-red-500 text-white -right-3.5 pl-1.5 text-sm w-5 h-5 rounded-full">
                          2
                        </span>

                        <FaBell className="text-slate-900" />
                      </a>
                    </li>
                  </ul>

                  <div className=" md:block mx-3 group -mt-3">
                    <Link to="/dashboard">
                      <FaUser className="text-slate-900 bg-white text-2xl group-hover:opacity-75 rounded-full shadow py-1 px-1" />
                    </Link>
                  </div>
                  <div>
                    <span
                      onClick={() => signOutUser()}
                      className="cursor-pointer hidden md:block mx-3 sm:mx-4 md:mx-0 py-2 px-2 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-slate-900 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    >
                      Log Out
                    </span>
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    type="button"
                    className="hidden md:block mx-3 sm:mx-4 md:mx-0 py-2 px-2 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-slate-900 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                  >
                    <Link to="sign_in">Login</Link>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* <!-- Mobile View --> */}
          {/* <div className="absolute top-2 right-2 cursor-pointer mt-5">
            <span className="md:hidden navbar-toggle text-slate-900">
              <FaBars onClick={() => handleToggle()} />
             
            </span>
          </div> */}
          <div className="mobile-navbar hidden h-[102vh] bg-white absolute left-0 top-0 text-left shadow overflow-y">
            <div className="text-center pt-2 flex items-center mt-3">
              <Link href="/" className="m-0 mx-auto">
                <img src="./images/logo.png" className="w-36" alt="" />
              </Link>
            </div>

            <div className="p-3">
              <div className="relative">
                <span className="absolute top-2.5 left-4">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </span>
                <input
                  type="search"
                  className="transition w-full rounded-md p-3 pl-12 text-xs bg-slate-100 outline-none outline-1 focus:outline-red-300"
                  placeholder="Search for Tuts,Videos,Tutors etc...."
                />
              </div>
              <ul className="mt-3 list-none">
                <li className="py-3">
                  <i className="fa-solid fa-cube"></i>
                  Categories
                </li>
                <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                  <a href="/">
                    <i className="fa-solid fa-chevron-right"></i>
                    HTML
                  </a>
                </li>
                <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                  <a href="/">
                    <i className="fa-solid fa-chevron-right"></i>
                    CSS
                  </a>
                </li>
                <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                  <a href="/">
                    <i className="fa-solid fa-chevron-right"></i>
                    REACT
                  </a>
                </li>
                <li className="transition p-3 cursor-pointer hover:bg-slate-100 mb-1 hover:opacity-80 border-b border-slate-100">
                  <a href="">
                    <i className="fa-solid fa-chevron-right"></i>
                    NODE JS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
      {/* <!-- End Navbar --> */}
    </>
  );
};

export default Header;
