import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { WavesButton } from './tools';
const Carrousel = ({items}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 100,
        slidesToShow: 1,
        slidesToScroll:1,
        arrows:true
      };
    //   console.log(items ? items:'')
//       const generateSlides = ()=>(
//         items ?
//             items.map((item,i)=>{
//             return <div key={i}>
//             <div className="bg-cover h-screen"
//                 style={{
//                     background:`url(${item.img})`,
//                     backgroundRepeat:'no-repeat',
                    
                   
                    
//                 }}
//             >
//                 <div className="featured_action">
//                     <div className="tag title">{item.lineOne}</div>
//                     <div className="tag low_title">{item.lineTwo}</div>
//                     <div>
//                         BUTTON

//                     </div>
//                 </div>
//             </div>
//         </div>
// })
//         :null
//       )
       
    return (
        <Slider {...settings}>
                {items.map((item,i)=>(
                    <div key={i} className="">
                       <div className='bg-cover bg-center bg-fixed overflow-hidden w-full md:h-[80vh] h-[40vh] relative'  style={{backgroundImage:`url(${item.img})`}}>
                       <div className="md:block text-center absolute md:top-[45%] md:left-[8%] left-11 top-4 ">
                            <div className="tag title bg-[#82828287] text-white px-[20px] py-0  uppercase text-7xl font-bold table border-2">{item.lineOne}</div>
                            <div className="tag low_title bg-[#82828287] text-white px-[20px] py-0 uppercase text-[50px] font-[400] border-2 mt-3 ">{item.lineTwo}</div>
                            <div className=''>
                               <WavesButton
                               type="default"
                               title={item.lineTitle}
                               linkTo={item.linkTo}
                               style={{
                                margin:'10px 0 0 0 '
                               }}
                               />

                            </div>
                        </div>
                       </div>
                    </div>
                ))}
        </Slider>
    );
};

export default Carrousel;