import DashboardLayout from 'components/Hoc/dasboardLayout';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartDetail from './cartDetail'
import { removeCart } from 'store/actions/user.action';



const Cart = (props) => {
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();
    const [loading,setLoading] = useState(false);
    const cart = useSelector(state => state.users.cart)

    const removeItem = (position)=>{
        dispatch(removeCart(position))
    }
    return (
        <DashboardLayout title='Your Cart'>
             {cart.length > 0 ?  
             
            <>
             <CartDetail products={cart} 
             removeItem={(position)=>removeItem(position)}
             />
             <div>
                <h1>Total Amount : $</h1>
             </div>
            </>
             
             : 
             <h1 className='text-red-500 text-center'>There is nothing in your cart</h1>
             }
            
        </DashboardLayout>
    );
};

export default Cart;