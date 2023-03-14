import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userIsAuth, userSignOut } from "store/actions/user.action";
import { Routes, Route, BrowserRouter,  } from "react-router-dom";

import Footer from "components/navigation/footer";
import Home from "components/home";
import Header from "components/navigation/header";
import MainLayout from "components/Hoc/MainLayout";
import RegisterLogin from "components/auth";
import Loading from "utls/products/Loading";
import UserDashboard from "components/dashboard";
import AuthGuard from "components/Hoc/AuthGuard";
import DashboardLayout from "components/Hoc/dasboardLayout";
import UserInfo from "components/dashboard/user/UserInfo";
import AdminProduct from "components/dashboard/admin/Products";
import AddProduct from "components/dashboard/admin/Products/add_edit_products/AddProduct";
import EditProduct from "components/dashboard/admin/Products/add_edit_products/EditProduct";
import Shop from "components/shop/Shop";
import ProductDetail from "components/Product/ProductDetail";





const Router = (props)=>{
const [loading,setLoading] = useState(true);
const users = useSelector(state => state.users);
const dispatch = useDispatch();

console.log('Toogle',props.toggle );

useEffect(()=>{
  dispatch(userIsAuth())
},[dispatch])

useEffect(()=>{
  if(users.auth !== null){
    setLoading(false);
  }

},[users])

 const signOutUser = ()=>{
  dispatch(userSignOut())
 }

  return (
    <BrowserRouter>
    {loading ? 
     <Loading full={true}/>

     :

     <>
     <Header users={users} signOutUser={signOutUser} ></Header>

    <MainLayout>
      <Routes>
        {/* <Route path='/*' element={<AuthGuard/>}>
          <Route path='dashboard' element={<UserDashboard/>}/>
        </Route> */}
        
        {/* Admin */}
        <Route path="/dashboard/admin/admin_products"  element={<AuthGuard><AdminProduct/></AuthGuard>} />
        <Route path="/dashboard/admin/add_products"  element={<AuthGuard><AddProduct/></AuthGuard>} />
        <Route path="/dashboard/admin/edit_product/:id"  element={<AuthGuard><EditProduct/></AuthGuard>} />
         

        <Route path="/dashboard"  element={<AuthGuard><UserDashboard/></AuthGuard>} />
        <Route path="/dashboard/user/user_info"  element={<AuthGuard><UserInfo/></AuthGuard>} />
        <Route path="/shop" element={<Shop></Shop>}/>
        <Route path="/product_detail/:id" element={<ProductDetail/>}/>
        <Route path="/sign_in" element={<RegisterLogin></RegisterLogin>}/>
        <Route path="/" element={<Home></Home>}/>
      </Routes>
    </MainLayout>
       
       <Footer></Footer>
     </>
  }
    
    </BrowserRouter>
  );
}

export default Router;
