import { useFormik, validateYupSchema } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Loading from "utls/products/Loading";
import { Button, TextField } from "@mui/material";
import { errorHelper } from "utls/tools";
import { useDispatch, useSelector } from "react-redux";
import { userRegister, userSignIn } from "store/actions/user.action";
import { useNavigate } from "react-router-dom";

const AuthForm = (props) => {
  let navigate = useNavigate();
  const notifications = useSelector(state => state.notifications);
  console.log('Notifications',notifications);
  const [loading, setLoading] = useState(false);
 const dispatch = useDispatch();
  const formik = useFormik({
    initialValues:{ email:'francis@gmail.com',password:'testing123' },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("Sorry Email Is Required")
        .email("This is an invalid Email"),
      password: Yup.string().required("Sorry Password is required"),
    }),
    onSubmit: (values) => {
      // console.log(values);
      setLoading(true)
      handleSubmit(values);
    },
  });

  const handleSubmit = (values) => {

    if(props.formType){
        dispatch(userRegister(values))
    } else {
        ///// sign in
        dispatch(userSignIn(values))
    }

}

useEffect(()=>{
  if(notifications && notifications.success){
    // props.history.push('/dashboard')
    navigate('/dashboard')
  } else{
      setLoading(false);
  }
},[notifications,navigate])
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={formik.handleSubmit}>
          {/* <!-- Email input --> */}
          <div className="mb-6">
            <TextField className="w-full"
             name='email'
             label='Enter your email'
             variant="outlined"
             {...formik.getFieldProps('email')}
             {...errorHelper(formik,'email')}
            />
          </div>
          <div className="mb-6">
            <TextField className="w-full"
             name='password'
             label='Enter your password'
             variant="outlined"
             type='password'
             {...formik.getFieldProps('password')}
             {...errorHelper(formik,'password')}
            />
          </div>

          <div className="my-4">
          <Button 
          variant="contained"
          color="primary"
          type="submit"
          size='large'
          >
            {props.formType ? 'Register' : 'Login'}
          </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default AuthForm;
