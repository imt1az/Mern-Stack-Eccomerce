import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Stepper, Step, StepLabel } from "@mui/material";

import { errorHelper } from "utls/tools";
import Modal from "react-bootstrap/Modal";
import Loading from "utls/products/Loading";
import { updateChangeEmail } from "store/actions/user.action";

const EmailStepper = ({ users }) => {
  const [loading, setLoading] = useState(false);
  const [emailModal, setEmailModal] = useState(false);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();
  const [activeState, setActiveState] = useState(0);
  const steps = ["Enter Old Email", "Enter New Email", "Are you sure?"];

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: { email: "", newEmail: "" },
    validationSchema: Yup.object({
      email: Yup.string()
        .required("This is required")
        .email("This is not a valid Email")
        .test("match", "Please Check Your Email", (email) => {
          return email === users.data.email;
        }),

      newEmail: Yup.string()
        .required("This is required")
        .email("This is not a valid Email")
        .test("match", "Please Check Your Email", (newEmail) => {
          return newEmail !== users.data.email;
        }),
    }),
    onSubmit: (values) => {
      // console.log(values);
      setLoading(true);
      dispatch(updateChangeEmail(values));
    },
  });

  const closeModal = () => setEmailModal(false);
  const openModal = () => {
    setEmailModal(true);
    console.log("Email MOdal");
  };

  // Close modal
  useEffect(() => {
    if (notifications && notifications.success) {
      closeModal();
    }
    setLoading(false);
  }, [notifications]);
  const handleNext = () => {
    setActiveState((preActiveStep) => preActiveStep + 1);
  };
  const handleBack = () => {
    setActiveState((preActiveStep) => preActiveStep - 1);
  };
  const nextBtn = () => {
    return (
      <Button onClick={handleNext} variant="contained" color="primary">
        Next
      </Button>
    );
  };
  const backBtn = () => {
    return (
      <Button onClick={handleBack} variant="contained" color="primary">
        Back
      </Button>
    );
  };

  return (
    <>
      <form className="mt-3 max-w-[300px]">
        <div className="form-group mt-3">
          <TextField
            style={{ width: "100%" }}
            name="emailStatic"
            label="Enter Your Email"
            variant="outlined"
            value={users.data.email}
            disabled
          />
        </div>
        <div className="my-3">
          {/* <Button onClick={openModal}
               variant='contained'
               color='primary'
               >Edit Email</Button> */}
          <label
            htmlFor="my-modal-3"
         
            className="btn btn-primary bg-[#1976d2] text-white hover:bg-blue-600"
          >
            open modal
          </label>
          {/* <label htmlFor="my-modal-3" variant='contained' className="btn btn-primary">open modal</label> */}
        </div>
      </form>
      {/* The button to open modal */}

      {/* Put this part before </body> tag */}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />

        
        <div className="modal">
          <div className="modal-box relative bg-slate-200 w-11/12 max-w-5xl">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-200"
            >
              ✕
            </label>
            <h3 className="text-lg font-bold my-5">Update Your Email</h3>

            <Stepper activeStep={activeState}>
              {steps.map((label, index) => {
                return (
                  <Step key={index}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>

            <form className="" onSubmit={formik.handleSubmit}>
              {activeState === 0 ? (
                <div className="form-group my-5">
                  <TextField
                    style={{ width: "100%" }}
                    name="email"
                    label="Enter Your Current Email"
                    variant="outlined"
                    {...formik.getFieldProps("email")}
                    {...errorHelper(formik, "email")}
                  />

                  <div className="my-3">
                    {formik.values.email && !formik.errors.email
                      ? nextBtn()
                      : null}
                  </div>
                </div>
              ) : null}

              {activeState === 1 ? (
                <div className="form-group my-5">
                  <TextField
                    style={{ width: "100%" }}
                    name="newEmail"
                    label="Enter Your New Email"
                    variant="outlined"
                    {...formik.getFieldProps("newEmail")}
                    {...errorHelper(formik, "newEmail")}
                  />

                  <div className="flex  my-5">
                    <div className="mr-3">
                      {formik.values.newEmail && !formik.errors.newEmail
                        ? nextBtn()
                        : null}
                    </div>
                    <div className="">{backBtn()}</div>
                  </div>
                </div>
              ) : null}

              {activeState === 2 ? (
                <div className="form-group">
                  {loading ? (
                    <Loading />
                  ) : (
                    <div className="flex  my-5 gap-2">
                      <Button
                        onClick={formik.submitForm}
                        variant="contained"
                        color="primary"
                      >
                        Submit
                      </Button>
                      {backBtn()}
                    </div>
                  )}
                </div>
              ) : null}
            </form>
          </div>
        </div>
        
     
    </>
  );
};

export default EmailStepper;
