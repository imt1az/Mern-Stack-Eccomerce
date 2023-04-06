import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  MdManageAccounts,
  MdAdminPanelSettings,
  MdSettingsInputComposite,
} from "react-icons/md";
import {
  FaHouseUser,
  FaShoppingCart,
  FaHome,
  FaProductHunt,
} from "react-icons/fa";
import { useSelector } from "react-redux";
export const links = [
  {
    name: "My Account",
    linkTo: "/dashboard",
    icon: <MdManageAccounts />,
  },
  {
    name: "User Information",
    linkTo: "/dashboard/user/user_info",
    icon: <FaHouseUser />,
  },
  {
    name: "My Cart",
    linkTo: "/dashboard/user/user_cart",
    icon: <FaShoppingCart />,
  },
];

export const admin = [
  {
    name: "Products",
    linkTo: "/dashboard/admin/admin_products",
    icon: <FaProductHunt />,
  },
  {
    name: "Manage Site",
    linkTo: "/dashboard/admin/manage_site",
    icon: <MdSettingsInputComposite />,
  },
];

const DashboardLayout = (props) => {
  const users = useSelector((state) => state.users);

  const [toggle, setToggle] = useState(true);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  console.log("Toggle", toggle);

  const generateLinks = (data) =>
    data.map((item, i) => (
      <div className="" key={`${item.name}${i}`}>
        <Link
          className="flex items-center transition-all duration-1000  mt-4"
          to={item.linkTo}
          key={`${item.name}${i}`}
        >
          <div className="text-2xl">{item.icon}</div>

          <span className=" md:block hidden text-xl px-2 font-medium"> {item.name}</span>
        </Link>
      </div>
    ));

  return (
    <>
      <div className="">
        <div className="grid grid-cols-10  ">
          <div className="col-span-2  mr-2 text-white  ">
            <div
              className={`min-h-screen bg-slate-900 transition-all duration-1000  ${toggle ? "md:w-full w-20" : " w-20"
                }`}
            >
              <nav className=" p-4   ml-4 mr-4 transition-all duration-1000 ">
                <div
                  className="flex items-center justify-center cursor-pointer"
                  onClick={() => handleToggle()}
                >
                  <div className="text-2xl mx-2">
                    <FaHome />
                  </div>
                  {toggle && (
                    <h1 className=" md:block hidden text-2xl font-medium transition-all duration-1000">
                      Dashboard
                    </h1>
                  )}
                </div>
                {toggle && generateLinks(links)}
                <hr className="mt-4" />
                {/*Admin */}

                {users.data.role && users.data.role === "admin" ? (
                  <div>
                    {toggle && (
                      <div className="mt-5 flex items-center justify-center cursor-pointer">
                        <div className="text-4xl">
                          <MdAdminPanelSettings />
                        </div>
                        <h1 className="md:block md:justify-center hidden text-2xl font-medium">Admin</h1>
                      </div>
                    )}

                    <div>
                      {toggle && generateLinks(admin)}
                    </div>
                  </div>
                ) : null}
              </nav>
            </div>
          </div>
          <div className="col-span-8 bg-white ">
            <div className="text-2xl font-semibold bg-indigo-200 p-2 rounded-sm">
              <h1 className="text-slate-800 font-bold">{props.title}</h1>
            </div>
            <div>
              {props.children}
              {/* <Outlet></Outlet> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
