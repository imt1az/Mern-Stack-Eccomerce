import React from "react";
import DashboardLayout from "components/Hoc/dasboardLayout";
import { useSelector } from "react-redux";

const UserDashboard = () => {
  const users = useSelector((state) => state.users);
  console.log('User Dashboard')
  return (
  
  <DashboardLayout title='Overview'>
     <div className="text-[18px] font-normal bg-slate-200 p-4">
      <div >
        <span>{users.data.firstName}</span>
        <span>{users.data.lastName}</span>
        <span>{users.data.email}</span>
      </div>
      {
        users.data.history ? 
         <div className="mt-5">
          
          <h1 className="text-2xl">History of purchase</h1>
          <div className="">
                History
          </div>
         </div>
        : null
      }

     </div>
  </DashboardLayout>
 
  )
 
};

export default UserDashboard;
