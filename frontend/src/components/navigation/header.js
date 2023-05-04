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
import logo from "../logo/MyLogo.png";
import NavMobile from "./NavMobile";
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
          <div className="flex items-center justify-between">
            {/* Start Logo And Search */}
            <div className="flex justify-center items-center">
              <Link to="/">
                <div>
                  <img src={logo} className="w-36" alt="" />
                </div>
              </Link>


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
            {/* End Logo And Search */}

            <div className="flex justify-center items-center pr-4 md:pr-0">
              <div className="flex items-center cursor-pointer mr-1">
                <Link to='/shop'>
                  <p className=" hidden lg:block font-bold text-white text-sm bg-red-500 py-1.5 p-1 mb-1 rounded-lg">
                    Shop
                  </p>
                </Link>

              </div>

              <div>
                <div className="md:flex items-center">
                  {users.auth ?
                    <div className="hidden lg:block">
                      <ul className="list-none">
                        <li className="inline-block  mx-2 sm:mx-3 md:mx-3 relative group">
                          <Link
                            to="/dashboard/user/user_cart"
                            className="text-gray-500 text-xl group-hover:opacity-75 "
                          >
                            <span className="absolute -top-2 bg-red-500 text-white -right-3.5 pl-1.5 text-sm w-5 h-5 rounded-full">
                             {users.cart.length}
                            </span>
                            <FaCartArrowDown className=" text-2xl text-slate-900" />
                          </Link>
                        </li>
                      </ul>
                    </div>
                    :
                    ''
                  }

                  <div className="flex items-center">

                    {/* For Authentic user */}
                    {users.auth ?
                      <div className="flex items-center">
                        <div className="hidden lg:block mx-3 group -mt-3">
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

                      :
                      <div className="hidden lg:block">
                        <button
                          type="button"
                          className=" md:block mx-3 sm:mx-4 md:mx-0  p-2 mr-2 mb-2 text-sm font-medium text-white focus:outline-none bg-slate-900 rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          <Link to="sign_in">Login</Link>
                        </button>
                      </div>

                    }


                  </div>

                </div>
              </div>


            </div>
            <div className="lg:hidden">
              <NavMobile></NavMobile>
            </div>

          </div>

          {/* <!-- Mobile View --> */}
          {/* <div className="absolute top-2 right-2 cursor-pointer mt-5">
            <span className="md:hidden navbar-toggle text-slate-900">
              <FaBars onClick={() => handleToggle()} />
             
            </span>
          </div> */}

        </div>
      </nav>
      {/* <!-- End Navbar --> */}
    </>
  );
};

export default Header;
