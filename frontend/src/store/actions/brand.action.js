import axios from "axios"
import * as actions from './index'

export const get_all_brands = ()=>{
    return async(dispatch)=>{
        try{
            const brands = await axios.get(`/api/brands/all`);
            dispatch(actions.getAllBrands(brands.data))
        }
        catch(error){
            dispatch(actions.errorGlobal(error.response.data.message))
        }
    }
}