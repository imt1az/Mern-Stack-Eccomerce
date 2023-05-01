import DashboardLayout from 'components/Hoc/dasboardLayout';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CartDetail from './cartDetail'
import { removeCart, userPurchaseSuccess } from 'store/actions/user.action';
import { PayPalButton } from 'react-paypal-button-v2';
import Loading from 'utls/products/Loading';
import { useNavigate } from 'react-router-dom';


const Cart = (props) => {
    const notifications = useSelector(state => state.notifications);
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const cart = useSelector(state => state.users.cart);
    let navigate = useNavigate();

    const removeItem = (position) => {
        dispatch(removeCart(position))
    }

    const calculateTotal = () => {
        let total = 0;
        cart.forEach(item => {
            total += parseFloat(item.price, 10)
        });
        return total;
    }

    const generateUnits = () => (
        [{
            description: 'Products From Imtiaz',
            amount: {
                currency_code: 'USD',
                value: calculateTotal(),
                breakdown: {
                    item_total: {
                        currency_code: 'USD',
                        value: calculateTotal()
                    }
                }
            },
            items: generateItems()
        }]
    )

    const generateItems = () => {
        const items = cart.map((item) => (
            {
                unit_amount: {
                    currency_code: "USD",
                    value: item.price,
                },
                quantity: 1,
                name: item.model
            }
        ))
        return items;
    }
    useEffect(()=>{
        if(notifications && notifications.success){
             navigate('/dashboard')
        }
        if(notifications && notifications.error){
            setLoading(false)
        }

    },[notifications,navigate])

    return (
        <DashboardLayout title='Your Cart'>
            {cart.length > 0 ?

                <>
                    <CartDetail products={cart}
                        removeItem={(position) => removeItem(position)}
                    />
                    <div className='p-2 border-b-2 border-gray-800 shadow-lg'>
                        <h1 className='text-xl text-green-600 font-semibold'>Total Amount : <span className='text-blue-800'>${calculateTotal()}</span></h1>
                    </div>
                    {
                        loading ?
                            <Loading full='true' />

                            :
                            <div className=''>
                                <PayPalButton
                                    options={{
                                        clientId: "AXkfV9Br8b77JdBfgNwTOh_x1dCsAF17hmqwNaSMYfbuXV5fOZKYnCr35w0G5mCxRsl1nji7iCXiflkk",
                                        currency: "USD",
                                        disableFunding: 'credit,card'
                                    }}
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: generateUnits()
                                        })
                                    }}
                                    onSuccess={(details, data) => {
                                        // console.log(details)
                                        // console.log(data)
                                        dispatch(userPurchaseSuccess(details.id))
                                        setLoading(true);
                                    }}
                                    onCancel={(data) => {
                                        setLoading(false);
                                    }}
                                />
                            </div>
                    }
                </>

                :
                <h1 className='text-red-500 text-center'>There is nothing in your cart</h1>
            }

        </DashboardLayout>
    );
};

export default Cart;