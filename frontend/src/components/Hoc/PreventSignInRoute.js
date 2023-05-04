import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
const PreventSignInRoute = (props) => {
    let navigate = useNavigate();
    const users = useSelector((state) => state.users);
    return (
        <>
        {
            users.auth ? 
              navigate('/dashboard')
            :
            props.children
        }
        </>
    );
};

export default PreventSignInRoute;