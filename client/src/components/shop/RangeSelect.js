import {Button, Collapse, List, ListItem, ListItemText, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useFormik,Formik } from 'formik';
import * as Yup from 'yup'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Box } from '@mui/system';
import { errorHelper } from 'utls/tools';

const RangeSelect = (props) => {
  const [open, setOpen] = useState(props.initState);
  const formik = useFormik({
    initialValues:{min:0,max:100000},
    validationSchema:Yup.object({
        min:Yup.number().min(0,'The Minimum is 0'),
        max:Yup.number().max(100000,'The Max is 100000')
    }),
    onSubmit:(values)=>{
        props.handleRange([values.min,values.max])
    }
  })

  const handleCollapseOpen = () => setOpen(!open)



  return (
    <div>
      <List>
        <ListItem onClick={handleCollapseOpen}>
          <ListItemText
            primary={props.title}
          />
          {open ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </ListItem>

        <Collapse in={open} timeout="auto" >
          <List component="div" disablePadding>
           
          <form className="my-5 mx-2" onSubmit={formik.handleSubmit}>
                <div className='my-5'>
                    <TextField
                        
                        name="min"
                        label="$Minimum"
                        variant="outlined"
                        type="number"
                        {...formik.getFieldProps("min")}
                        {...errorHelper(formik, "min")}
                    />
                    
                </div>
                <div className=''>
                    <TextField
                        
                        name="max"
                        label="$Maximum"
                        variant="outlined"
                        type="number"
                        {...formik.getFieldProps("max")}
                        {...errorHelper(formik, "max")}
                    />
                    
                </div>
               <div className='mt-2'>
               <Button  type='submit' variant="contained" color='secondary' size='small'>Search</Button>
               </div>
            </form>
         
          </List>
        </Collapse>

      </List>
    </div>
  );
};

export default RangeSelect;