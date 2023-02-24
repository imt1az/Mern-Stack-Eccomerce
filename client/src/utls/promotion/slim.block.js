import React from 'react'
import { WavesButton } from 'utls/tools';

const SlimPromotion = ({items})=>{
      const renderPromotion = ()=>(
        items ?
         <div className='h-[500px] bg-cover md:bg-top bg-center box-border p-[73px]' style={{backgroundImage:`url(${items.img})`}}>
            <div className='bg-[#82828287] text-white px-[20px] uppercase table md:text-[70px] font-bold mx-auto'>
              {items.lineOne}
              </div>   
            <div className='bg-[#82828287] text-white px-[20px] uppercase table md:text-[50px] font-light mx-auto mt-[10px]'>
              {items.lineTwo}
              </div>   
              <div className='mx-auto table mt-6 text-sm'>
                 <WavesButton
                   type="default"
                   title={items.linkTitle}
                   linkTo={items.linkTo}
                 />
              </div>
         </div>
        :null
      );

    return <div className=''>
         {renderPromotion()}
    </div>
}


export default SlimPromotion
