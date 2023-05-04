import { Button, TextField } from "@mui/material";
import axios from "axios";

import { useFormik } from "formik";
import React, { useState } from "react";
import Loading from "utls/products/Loading";
import { getTokenCookie } from "utls/tools";

import * as Yup from "yup";

const PicUpload = ({picValue}) => {
    const [loading, setLoading] = useState(false);
    const formikImage = useFormik({
        initialValues: {
          pic: "",
        },
        validationSchema: Yup.object({
          pic: Yup.mixed().required("A file is needed"),
        }),
        onSubmit: (values) => {
          setLoading(true);
          let formData = new FormData();
          formData.append('file',values.pic);
    
          axios.post(`/api/products/upload`,formData,{
            headers:{
                'content-type':'multipart/form-data',
                'Authorization':`Bearer ${getTokenCookie()}`
            }
          }).then(res=>{
            ///responmse Data
            picValue(res.data)
            console.log('Response Image',res.data)
          }).catch(error=>{
            alert(error)
          }).finally(()=>{
            setLoading(false)
          })
          console.log(values);
        },
      });
    return (
        <div>
             <div>
      {loading ? (
        <Loading full='true' />
      ) : (
        <form onSubmit={formikImage.handleSubmit}>
          <div className="form-group mb-3">
            <h1 className="text-xl font-medium my-3">Upload Image</h1>
            <TextField
              style={{ width: "100%" }}
              id="file"
              name="file"
              label=""
              onChange={(event) => {
                formikImage.setFieldValue("pic", event.target.files[0]);
              }}
              variant="outlined"
              type="file"
            />
            {formikImage.errors.pic && formikImage.touched.pic ? (
              <div>Error</div>
            ) : null}
          </div>
          <Button className="my-3" variant="contained" color="primary" type="submit">
                Add Image
              </Button>
        </form>
      )}
    </div>
        </div>
    );
};

export default PicUpload;