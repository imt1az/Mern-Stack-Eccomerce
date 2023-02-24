import axios from "axios"

import * as actions from './index'
import { getAuthHeader, getTokenCookie, removeTokenCookie } from 'utls/tools';
axios.defaults.headers.post['Content-Type']='application/json';

export const productsBySort = ({limit,order,sortBy,where})=>{

   return async(dispatch)=>{
    try{
        const products = await axios.get(`/api/products/all`,{
        params:{
            limit,
            order,
            sortBy,
        }
        });
         
        // dispatch(actions.productsBySold(products.data))
        // dispatch(actions.productsByDate(products.data))
        // console.log(products);
        switch(where){
            case 'bySold':
                dispatch(actions.productsBySold(products.data)) 
            break;

            case 'byDate':
            dispatch(actions.productsByDate(products.data))
            break;

            default:
                return false
        }
     }
     catch(error){
        dispatch(actions.errorGlobal(error.response.data.message))
     }
   }
   
}


export const productsByPaginate =(args)=>{
    return async(dispatch)=>{
        try{
            const products = await axios.post(`/api/products/paginate/all`,args)
            dispatch(actions.productsByPaginate(products.data));
        } catch(error){
            console.log('Error')
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

export const ProductRemove =(id)=>{
    return async(dispatch)=>{
        try{
             await axios.delete(`/api/products/product/${id}`,getAuthHeader())
            dispatch(actions.productRemove())
             dispatch(actions.successGlobal('Products Deleted'))
        } catch(error){
            console.log('Error')
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}
export const ProductAdd =(data)=>{
    return async(dispatch)=>{
        try{
          const product = await axios.post(`/api/products/`,data,getAuthHeader())
            dispatch(actions.productAdd(product.data))
             dispatch(actions.successGlobal('Products Added Successfully'))
        } catch(error){
            console.log('Error')
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}
export const ProductById =(id)=>{
    return async(dispatch)=>{
        try{
           const product = await axios.get(`/api/products/product/${id}`)
           dispatch(actions.prodById(product.data))
             
        } catch(error){
            console.log('Error')
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}
export const EditProductById =(values,id)=>{
    return async(dispatch)=>{
        try{
           const product = await axios.patch(`/api/products/product/${id}`,values,getAuthHeader())
           dispatch(actions.successGlobal('Product Update Successfully'))
             
        } catch(error){
            console.log('Error')
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}