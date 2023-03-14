import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { renderCardImage, WavesButton } from "utls/tools";

const Card = (props) => {
  const [modal, setModal] = useState(false);

  const handleAddToCart = (item, modals) => {
    setModal(modals);
  };
  return (
    
   
      <div className="bg-white shadow-md hover:scale-105 hover:shadow-xl duration-500 mb-5 p-3">
      {/* <div className="md:h-full md:w-full object-cover" style={{background:`url(${renderCardImage(props.item.images)})`}}>
<h1>hello</h1>
       </div> */}
      <div className="border-b-0">
        <img
          src={renderCardImage(props.item.images)}
          alt=""
          className="md:h-96 md:w-full object-cover"
        />
      </div>

      <div className="px-4 py-3  md:w-full ">
        <span className="text-blue-400 mr-3 uppercase text-xs font-bold">
          {props.item.brand.name}
        </span>
        <p className="text-lg font-bold text-black truncate block capitalize">
          {props.item.model}
        </p>
        <p className="text-lg font-semibold text-black cursor-auto my-3 text-left">
          ${props.item.price}
        </p>
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-900">
          {/* <del>
              <p className="text-sm text-gray-600 cursor-auto ml-2"></p>
            </del> */}
          <div className="flex items-center justify-between w-full">
            <WavesButton
              type="default"
              altclassName="px-2 py-2 font-bold transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none"
              title="View Product"
              linkTo={`/product_detail/${props.item._id}`}
            />
            {/* <button
                  className=" px-2 py-2 transition ease-in duration-200 uppercase rounded-full hover:bg-gray-800 hover:text-white border-2 border-gray-900 focus:outline-none">Add
            to cart
            
            </button> */}

            <WavesButton
              type="cart_link"
              runAction={() => handleAddToCart(props.item, !modal)}
            />

            {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg> */}
            {/* <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                </svg>
              </a> */}
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default Card;
