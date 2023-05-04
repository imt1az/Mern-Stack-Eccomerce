import React, { useState } from 'react';
import { MdMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import { MenuAlt3Icon, XIcon } from "@heroicons/react/outline";
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
import { navigation } from 'resources/mydata';
import { useDispatch, useSelector } from 'react-redux';
import { userSignOut } from 'store/actions/user.action';
const NavMobile = () => {
  const dispatch = useDispatch();
  const users = useSelector(state => state.users)
  const [isOpen, setIsOpen] = useState(false);
  const signOutUser = () => {
    dispatch(userSignOut())
  }
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };
  const ulVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="relative">
      <div
        onClick={() => setIsOpen(true)}
        className="cursor-pointer text-white"
      >
        <MenuAlt3Icon className="w-8 h-8" />
      </div>

      {/* Circle */}
      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="w-4 h-4 rounded-full bg-secondary fixed top-0 right-0"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${isOpen ? "right-0" : "-right-full"
          } fixed top-0 bottom-0 w-full flex flex-col justify-center items-center transition-all duration-300 overflow-hidden`}
      >
        <div
          onClick={() => setIsOpen(false)}
          className="cursor-pointer absolute top-8 right-8">
          <XIcon className="w-8 h-8"></XIcon>
        </div>
        {
          navigation.map((item, index) => {
            return <li key={index} className='mb-8'>
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                smooth={true}
                duration={500}
                offset={-70}
                className='text-xl cursor-pointer capitalize'
              >
                {item.name}
              </Link>
            </li>
          })
        }
        {
          users.auth ?
            <ul>
              <li className='mb-8'>
                <Link
                  to='/dashboard'
                  onClick={() => setIsOpen(false)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className='text-xl cursor-pointer capitalize'>
                  Dashboard
                </Link>
              </li>
              <li onClick={signOutUser} className='mb-8 text-center'>
                <Link
                
                  onClick={() => setIsOpen(false)}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className='text-xl cursor-pointer capitalize'>
               Logout
                </Link>
              </li>
            </ul>

            :
            <li  className='mb-8 text-center'>
            <Link
              to='/sign_in'
              onClick={() => setIsOpen(false)}
              smooth={true}
              duration={500}
              offset={-70}
              className='text-xl cursor-pointer capitalize'>
      Login
            </Link>
          </li>
        }

      </motion.ul>
    </nav>
  );
};

export default NavMobile;