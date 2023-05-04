import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { clearNotifications } from 'store/actions';
import { showToast } from 'utls/tools';
const MainLayout = (props) => {

    const notifications = useSelector(state=> state.notifications)
    const dispatch = useDispatch()
    useEffect(()=>{
        if(notifications && notifications.error){
              const msg = notifications.msg ? notifications.msg : 'Error'
              showToast("ERROR",msg);
              dispatch(clearNotifications())
        }
        if(notifications && notifications.success){
              const msg = notifications.msg ? notifications.msg : 'Success'
              showToast("SUCCESS",msg)
              dispatch(clearNotifications())
        }
       
    },[notifications,dispatch])
    return (
        <>
            {props.children}
            <ToastContainer/>
        </>
    );
};

export default MainLayout;