import { TextField } from "@mui/material";
import React, { useEffect, useReducer, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { get_all_brands } from "store/actions/brand.action";
import { productsByPaginate } from "store/actions/products.action";
import { MdGridOff, MdGridOn } from "react-icons/md";
import ProductCard from "utls/products/ProductCard";
import PaginateNav from "utls/PaginateNav";
import SearchBar from "./SearchBar";
import { Button } from '@mui/material';
import CollapseCheckBox from "./CollapseCheckBox";
const defaultValues = {
  keywords: "",
  brand: [],
  min: 0,
  max: 100000,

  page: 1,
};

const Shop = () => {
  const [grid, setGrid] = useState(false);

  const [searchValues, setSearchValues] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    defaultValues
  );
  const { byPaginate } = useSelector((state) => state.products);
  const brands = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  useEffect(() => {
    dispatch(get_all_brands());
  }, [dispatch]);

  useEffect(() => {
    dispatch(productsByPaginate(searchValues));
  }, [searchValues, dispatch]);

  const handleGrid = () => setGrid(!grid);

  const goToPage = (page) => {
    setSearchValues({ page: page });
  };
  const handleResetSearch = () => {
    setSearchValues({ keywords: "" });
  };
  const handleKeyWords = (values) => {
    setSearchValues({keywords:values})
  };
  const handleReset =()=>{
    setSearchValues(defaultValues)
  }
  // Filters
  const handleFilters = (items)=>{
    // Do Something
  }

  return (
    <>
      <div className="container mx-auto">
        <div className="page-top ">
          <SearchBar handleKeyWords={(values) => handleKeyWords(values)} />
          <div className="mx-2">
          <Button onClick={()=>handleReset()} className=""  type='submit'variant="contained">Reset Search</Button>
          </div>

        </div>
        <hr className="my-5 divide-x-0 h-2 bg-slate-200"/>
        {/* Grid Items */}
        <div className="grid grid-cols-1 md:grid-cols-4    gap-4">
          <div className="col-span-1  p-2">
            <div className="min-w-full ">
             <CollapseCheckBox 
             initState={true}
             title="Brands"
             list={brands.all}
             handleFilters = {(filters)=>handleFilters(filters)}
             />
            </div>
          </div>

          <div className="col-span-3  min-h-screen shadow-lg">
            <div className="min-w-full">
              <div className="shop_grids">
                {/* Product */}
                <div className="products-show">
                  {byPaginate && byPaginate.docs ? (
                    <>
                      {/* Product Grid Design */}
                      <ProductCard items={byPaginate.docs} shop={true} />
                      <PaginateNav
                        prods={byPaginate}
                        prev={(page) => goToPage(page)}
                        next={(page) => goToPage(page)}
                        resetSearch={() => handleResetSearch()}
                      />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
