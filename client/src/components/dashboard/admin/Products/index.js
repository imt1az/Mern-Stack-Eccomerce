import DashboardLayout from "components/Hoc/dasboardLayout";
import React, { useEffect, useReducer, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  ProductRemove,
  productsByPaginate,
} from "store/actions/products.action";
import ProductsTable from "./ProductsTable";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Button, TextField } from "@mui/material";
import { errorHelper } from "utls/tools";


const defaultValues = {
  keywords: "",
  brand: [],
  min: 0,
  max: 5000,

  page: 1,
};

const AdminProduct = (props) => {
  const navigate = useNavigate();
  const products = useSelector((state) => state.products);
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const [removeModal, setRemoveModal] = useState(false);
  const [toRemove, setToRemove] = useState(null);

  const [searchValues, setSearchValues] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    defaultValues
  );
  console.log("Search Value", searchValues);

  const formik = useFormik({
    initialValues: { keywords: "" },
    validationSchema: Yup.object({
      keywords: Yup.string()
        .min(3, "Add More than 3 Words")
        .max(200, "Too Long"),
    }),
    onSubmit: (values, { resetForm }) => {
      setSearchValues({ keywords: values.keywords, page: 1 });
      resetForm();
    },
  });

  const resetSearch = () => {
    setSearchValues(defaultValues);
  };

  const goToPage = (page) => {
    setSearchValues({ page: page });
  };
  const goToEdit = (id) => {
    navigate(`/dashboard/admin/edit_product/${id}`);
  };

  const handleModal = (id) => {
    setToRemove(id);
    setRemoveModal(true);
  };
  const handleRemove = () => {
    dispatch(ProductRemove(toRemove));
  };

  useEffect(() => {
    dispatch(productsByPaginate(searchValues));
  }, [dispatch, searchValues]);

  useEffect(() => {
    setRemoveModal(false);
    if (notifications && notifications.removeArticle) {
      dispatch(productsByPaginate(searchValues));
    }
  }, [dispatch, notifications, searchValues]);
  return (
    <DashboardLayout className="" title="Products">
      <div className="products_table">
        <div>
          <form className="my-5" onSubmit={formik.handleSubmit}>
            <TextField
              style={{ width: "100%" }}
              name="keywords"
              label="Enter Your Search"
              variant="outlined"
              {...formik.getFieldProps("keywords")}
              {...errorHelper(formik, "keywords")}
            />
          </form>
          <Button
            variant="contained"
            color="primary"
            onClick={() => resetSearch()}
          >
            Reset Search
          </Button>
        </div>
        <hr className="my-5" />
        <ProductsTable
          prods={products.byPaginate}
          next={(page) => goToPage(page)}
          prev={(page) => goToPage(page)}
          gotoEdit={(id) => goToEdit(id)}
          removeModal={removeModal}
          handleModal={(id) => handleModal(id)}
          handleRemove={() => handleRemove()}
        />
      </div>
    </DashboardLayout>
  );
};

export default AdminProduct;
