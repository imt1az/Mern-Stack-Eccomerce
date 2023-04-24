import {
  AUTH_USER,
  CLEAR_CURRENT_PRODUCT,
  CLEAR_NOTIFICATIONS,
  ERROR_GLOBAL,
  GET_ALL_BRANDS,
  GET_PRODUCT_BY_DATE,
  GET_PRODUCT_BY_SOLD,
  GET_PROD_PAGINATE,
  PRODUCT_ADD,
  PROD_BY_ID,
  PURCHASE_SUCCESS,
  REMOVE_PRODUCT,
  SIGN_OUT,
  SUCCESS_GLOBAL,
  UPDATE_USER_PROFILE,
  USER_ADD_TO_CART,
  USER_CHANGE_EMAIL,
} from "../types";

///  USER

export const userAuthenticate = (user) => ({
  type: AUTH_USER,
  payload: user,
});

export const userUpdate = (userData) => ({
  type: UPDATE_USER_PROFILE,
  payload: userData,
});

export const userChangeEmail = (data) => ({
  type: USER_CHANGE_EMAIL,
  payload: data,
});

export const userSignOut = () => ({
  type: SIGN_OUT,
});

export const userAddToCart = (data) => ({
  type:USER_ADD_TO_CART,
  payload:data
})
export const userPurchaseSuccess = (data)=>({
  type:PURCHASE_SUCCESS,
  payload:data
})

// Products
export const productsBySold = (data) => ({
  type: GET_PRODUCT_BY_SOLD,
  payload: data,
});
export const productsByDate = (data) => ({
  type: GET_PRODUCT_BY_DATE,
  payload: data,
});

export const productsByPaginate = (products)=>({
  type:GET_PROD_PAGINATE,
  payload:products
})

export const productRemove = ()=>({
  type:REMOVE_PRODUCT

})
export const productAdd = (product)=>({
  type:PRODUCT_ADD,
  payload:product
})
export const prodById = (product)=>({
  type:PROD_BY_ID,
  payload:product

})

export const clearCurrentProduct = ()=>({
  type:CLEAR_CURRENT_PRODUCT
})

// Brands
export const getAllBrands = (brands)=>({
  type:GET_ALL_BRANDS,
  payload:brands
})



// Notifications
export const errorGlobal = (msg) => ({
  type: ERROR_GLOBAL,
  payload: msg,
});
export const successGlobal = (msg) => ({
  type: SUCCESS_GLOBAL,
  payload: msg,
});

export const clearNotifications = () => {
  return (dispatch) => {
    dispatch({
      type: CLEAR_NOTIFICATIONS,
    });
  };
};
