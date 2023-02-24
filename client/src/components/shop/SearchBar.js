
import React from 'react';
import { useFormik,Formik } from 'formik';
import * as Yup from 'yup'
import { Button, TextField } from '@mui/material';
import { errorHelper } from 'utls/tools';
const SearchBar = (props) => {
    const formik = useFormik({
        initialValues:{keywords:''},
        validationSchema:Yup.object({
            keywords:Yup.string().min(3,'More than 3 words').max(200,'Less than 200 words')
        }),
        onSubmit:(values,{resetForm})=>{
            props.handleKeyWords(values.keywords)
            resetForm()
        }
    })
    return (
        <div className=''>
        <form className="my-5 mx-2" onSubmit={formik.handleSubmit}>
 <div className='flex justify-between gap-2'>
 <TextField
            style={{ width: "90%" }}
            name="keywords"
            label="Enter Your Search"
            variant="outlined"
            {...formik.getFieldProps("keywords")}
            {...errorHelper(formik, "keywords")}
          />
   <Button  type='submit'variant="contained">Search</Button>
 </div>
        </form>
        
      </div>
    );
};

export default SearchBar;