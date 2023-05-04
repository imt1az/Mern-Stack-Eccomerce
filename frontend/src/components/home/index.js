import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SlimPromotion from 'utls/promotion/slim.block';
import Featured from './featured';
import {productsBySort} from 'store/actions/products.action'
import createMixins from '@mui/material/styles/createMixins';
import ProductCard from 'utls/products/ProductCard';
import Loading from 'utls/products/Loading';
const slimPromotion = {
  img:'/images/featured/post2.jpg',
  lineOne:'Up To 30% Off',
  lineTwo:'In Second Hand Product',
  linkTitle:'Show Now',
  linkTo:'/shop'
};

const Home = () => {

  const {bySold,byDate} = useSelector(state=>state.products)
 const dispatch = useDispatch()

useEffect(()=>{
  dispatch(productsBySort({
    limit:5,order:'asc',sortBy:'itemsSold',where:'bySold'
  }));

  dispatch(productsBySort({
    limit:5,order:'desc',sortBy:'date',where:'byDate'
  }));
},[dispatch])

     console.log(bySold)
    
    return(
       <div>
         <Featured></Featured>
         {
          bySold ? <ProductCard items={bySold} title='Best Selling Products'/> : <Loading/>
         }
         <SlimPromotion items={slimPromotion}/>

         {
          byDate ? <ProductCard items={byDate} title='Today Selling Products'/> : <Loading/>
         }
       </div>
    )

}

export default Home;