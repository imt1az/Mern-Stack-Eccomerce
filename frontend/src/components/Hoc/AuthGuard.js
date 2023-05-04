import UserDashboard from "components/dashboard";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "utls/products/Loading";


const AuthGuard = ({children},props)=> {
  const [isAuth, setIsAuth] = useState(false);
  const users = useSelector((state) => state.users);
  let navigate = useNavigate();

      useEffect(() => {
      if (!users.auth) {
        navigate("/");
      } else {
        setIsAuth(true);
      }
    }, [users, navigate,props]);

  if (!isAuth) {
          return <Loading full={true} />;
        }
        return children
       
        
}
export default AuthGuard

