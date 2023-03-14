import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import cookie from 'react-cookies'
export const WavesButton = (props) => {

    let template = '';

    switch (props.type) {
        case "default":
            template = <Link
                className={
                    !props.altClass ? 'cursor-pointer font-bold uppercase table p-3 bg-[#e1ddc3]  hover:bg-[#fff193]' : props.altClass
                }
                to={props.linkTo}
                style={{
                    ...props.style
                }}

            >
                {props.title}

            </Link>

            break;
        case "cart_link":
            template = <button> <FaCartPlus onClick={() => { props.runAction() }} className='w-10 text-2xl' /></button>

            break;
        case 'add_to_cart_link':
            template = 
            <div onClick={()=>{
                props.runAction()
            }}>
                <button className="focus:outline-none focus:ring-2 hover:bg-black focus:ring-offset-2 focus:ring-gray-800 font-medium text-base leading-4 text-white bg-gray-800 w-full py-5 lg:mt-12 mt-6">Add to shopping bag</button>
            </div>
            break;
        default:
            template = '';
    }

    return template;

}

export const renderCardImage = (image) => {
    if (image.length > 0) {
        return image[0];
    }

    else {
        return '/images/image_not_available.png'
    }
}

export const showToast = (type, msg) => {
    switch (type) {
        case 'SUCCESS':
            toast.success(msg, {
                position: toast.POSITION.BOTTOM_RIGHT
            }, { toastId: 'random' })
            break;
        case 'ERROR':
            toast.error(msg, { toastId: 'random' })
            break;
        default:
            return false
    }
}

export const errorHelper = (formik, value) => ({
    error: formik.errors[value] && formik.touched[value] ? true : false,
    helperText: formik.errors[value] && formik.touched[value] ? formik.errors[value] : null
});

export const getTokenCookie = () => cookie.load('x-access-token')
export const removeTokenCookie = () => cookie.remove('x-access-token', { path: '/' });
export const getAuthHeader = () => {
    return {
        headers: { 'Authorization': `Bearer ${getTokenCookie()}` }
    }
}