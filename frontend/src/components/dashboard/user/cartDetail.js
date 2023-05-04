import React from 'react';
import { renderCardImage } from 'utls/tools'
const cartDetail = ({ products, removeItem }) => {
    const renderItems = () => (
        products ?
            products.map((product, index) => (
                <div className='grid md:grid-cols-4 gap-3 border-2  p-2 mb-2  items-center mt-3 shadow-xl rounded-lg overflow-hidden' key={`${product._id}${index}`}>
                    <div className='flex-grow'>
                        <div className='h-[125px]  bg-contain bg-no-repeat bg-center mr-2.5' style={{
                            background: `url(${renderCardImage(product.images)}) no-repeat`
                        }}>

                        </div>
                    </div>
                    <div className='flex-grow '>
                        <h4 className='text-lg font-bold text-gray-900'>Name</h4>
                        <div className='text-green-700 font-medium'>{product.brand.name} {product.model}</div>
                    </div>
                    <div className='flex-grow'>
                        <h4 className='text-lg font-bold text-gray-900'>Price</h4>
                        <div className='text-green-700 font-medium'>${product.price}</div>
                    </div>
                    <div className=''>
                        <div className='' onClick={()=>removeItem(index)}>
                            <a href="#_" class="px-2 py-2.5 relative rounded group  text-white font-medium inline-block">
                                <span class="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-purple-600 to-blue-500"></span>
                                <span class="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-purple-600 to-blue-500"></span>
                                <span class="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-purple-600 to-blue-500"></span>
                                <span class="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                                <span class="relative">Remove</span>
                            </a>
                        </div>

                    </div>
                </div>

            ))
            : null
    )
    return (
        <div>

            {renderItems()}
        </div>
    );
};

export default cartDetail;