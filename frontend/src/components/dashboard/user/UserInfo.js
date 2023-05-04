import { Button, TextField } from '@mui/material';
import DashboardLayout from 'components/Hoc/dasboardLayout';

import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userUpdate } from 'store/actions/user.action';
import { errorHelper } from 'utls/tools';
import * as Yup from 'yup'
import EmailStepper from './stepper';
const UserInfo = () => {

    const users = useSelector(state=>state.users);
    const dispatch = useDispatch();

    const formik = useFormik({
        enableReinitialize:true,
        initialValues:{
            firstName: users.data.firstName,
            lastName: users.data.lastName,
        },
        validationSchema:Yup.object({
            firstName: Yup.string()
            .min(3,'3 char min')
            .max(30,'30 char max')
            .required('Sorry, you need the first name'),
            lastName: Yup.string()
            .min(3,'3 char min')
            .max(30,'30 char max')
            .required('Sorry, you need the last name'),
        }),
        onSubmit:(values)=>{
            dispatch(userUpdate(values))
        }
    })
    return (
     <>
        <DashboardLayout title='User Information'>
            <form className='mt-3 max-w-[300px]' onSubmit={formik.handleSubmit}>
               <div className='form-group mt-3'>
                <TextField
                style={{width:'100%'}}
                name='firstName'
                label='Enter Your First Name'
                variant='outlined'
                {...formik.getFieldProps('firstName')}
                {...errorHelper(formik,'firstName')}
                />

               </div>

               <div className='form-group mt-3'>
                <TextField
                style={{width:'100%'}}
                name='lastName'
                label='Enter Your Last Name'
                variant='outlined'
                {...formik.getFieldProps('lastName')}
                {...errorHelper(formik,'lastName')}
                />

               </div>
               <div className='my-3'>
                    <Button variant='contained' color='primary' type='submit'>Edit Profile</Button>
               </div>
            </form>
            <hr/>
            <div>
                <EmailStepper users={users}/>
            </div>
            
        </DashboardLayout>
     </>
    );
};

export default UserInfo;