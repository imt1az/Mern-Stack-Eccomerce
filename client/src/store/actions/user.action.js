import * as actions from './index';
import axios from "axios"
import { getAuthHeader, getTokenCookie, removeTokenCookie } from 'utls/tools';


axios.defaults.headers.post['Content-Type']='application/json';


export const userRegister = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/auth/register`,{
                email:values.email, 
                password:values.password
            });
            console.log(' working')
            dispatch(actions.userAuthenticate({data: user.data.user,auth: true}))
            dispatch(actions.successGlobal('Welcome !! check you mail to verify account.'))
        } catch(error){
            console.log('Not working')
            dispatch(actions.errorGlobal(error.response.data.message))

        }
    }
}

export const userSignIn = (values) => {
    return async(dispatch)=>{
        try{
            const user = await axios.post(`/api/auth/signin`,{
                email:values.email, 
                password:values.password
            });
            console.log(' working')
            dispatch(actions.userAuthenticate({data: user.data.user,auth: true}))
            dispatch(actions.successGlobal('Welcome!!'))
        } catch(error){
            console.log('Not working')
            dispatch(actions.errorGlobal(error.response.data.message))

        }
    }
}


export const userIsAuth = () => {
    return async(dispatch)=>{
        try{
            if(!getTokenCookie()){
                throw new Error();
            }

            const user = await axios.get(`/api/auth/isauth`, getAuthHeader());

            console.log(user)

            dispatch(actions.userAuthenticate({data: user.data,auth: true}))
        } catch(error){
            dispatch(actions.userAuthenticate({data:{},auth:false}));
        }
    }
}

// SignOut

export const userSignOut = ()=>{
    return async(dispatch)=>{
        removeTokenCookie();
        dispatch(actions.userSignOut())
        dispatch(actions.successGlobal('Good Bye!'))
    }
}

export const userUpdate = (data)=>{
    return async(dispatch,getState)=>{
        try{
         const profile = await axios.patch(`/api/users/profile`,{
            data:data
         },getAuthHeader());

         const userData = {
            ...getState().users.data,
            firstName: profile.data.firstName,
            lastName:profile.data.lastName
         }
         dispatch(actions.userUpdate(userData))
         dispatch(actions.successGlobal('Profile Updated'))
        }
        catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}

export const updateChangeEmail = (data)=>{
    return async(dispatch)=>{
        try{
           await axios.patch(`/api/users/email`,{
            email:data.email,
            newemail:data.newEmail
           },getAuthHeader())
           dispatch(actions.userChangeEmail(data.newEmail))
           dispatch(actions.successGlobal('Email Updated'))
        }
        catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}
export const userAddToCart = (item) => {
    console.log('Item is ',item)
    return async(dispatch, getState)=>{
        try{
            // const cart = getState().users.cart;
            
            dispatch(actions.userAddToCart([
                ...getState().users.cart,
                item
            ]))
            dispatch(actions.successGlobal(`${item.model} added to cart :)`))
            // console.log('Cart is ',cart)
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}  

export const removeCart = (position) => {
   
    return async(dispatch, getState)=>{
        try{
            const cart = getState().users.cart;
            cart.splice(position,1);
            dispatch(actions.userAddToCart(cart))
            // dispatch(actions.successGlobal(`${item.model} added to cart :)`))
            // console.log('Cart is ',cart)
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}  

export const userPurchaseSuccess = (orderID)=>{
    return async(dispatch)=>{
        try{
           const user = await axios.post(`/api/transaction/`,{
            orderID
           },getAuthHeader())

           dispatch(actions.successGlobal('Thank You!'));
           dispatch(actions.userPurchaseSuccess(user.data))
        } catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}