// import { AUTH_USER, SIGN_OUT, UPDATE_USER_PROFILE, USER_CHANGE_EMAIL, USER_ADD_TO_CART, PURCHASE_SUCCESS } from "store/types"

import { GET_SITE_VARS, UPDATE_SITE_VARS } from "store/types"

let DEFAULT_SITE_STATE = {
    vars: {
        _id: '',
        address: '',
        hours: '',
        phone: '',
        email: '',
       
    },
    
}

export default function siteReducer(state = DEFAULT_SITE_STATE, action) {
    switch (action.type) {
        case GET_SITE_VARS:
            return {...state,vars:action.payload}
        case UPDATE_SITE_VARS:
            return {...state,vars:action.payload}
        default:
            return state
    }
}