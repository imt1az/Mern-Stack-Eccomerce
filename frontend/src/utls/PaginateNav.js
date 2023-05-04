import { Button } from '@mui/material';
import React from 'react';

const PaginateNav = ({prods,prev,next,resetSearch}) => {
    
    const goToPrevPage = (page)=>{
        prev(page)
    }
    const goToNextPage = (page)=>{
        next(page)
    }

    return (
        <div>
            {
                prods.docs.length > 0 ?
                <div className="btn-group my-5 border-2 border-gray-300 p-2">
                {prods.hasPrevPage ? (
                  <div>
                    <button
                      onClick={() => goToPrevPage(prods.prevPage)}
                      className="btn-circle   text-xl text-center font-extrabold"
                    >
                      «
                    </button>
                    <button
                      onClick={() => goToPrevPage(prods.prevPage)}
                      className="btn-circle bg-slate-800 text-white font-semibold text-xl mr-1"
                    >
                      {prods.prevPage}
                    </button>
                  </div>
                ) : null}
  
                <button className="btn-circle  text-white font-semibold text-xl btn-secondary">
                  {prods.page}
                </button>
                {prods.hasNextPage ? (
                  <div>
                    <button
                      onClick={() => goToNextPage(prods.nextPage)}
                      className="btn-circle bg-slate-800 text-white font-semibold text-xl ml-1np"
                    >
                      {prods.nextPage}
                    </button>
                    <button
                      onClick={() => goToNextPage(prods.nextPage)}
                      className="btn-circle  text-xl text-center font-extrabold"
                    >
                      »
                    </button>
                  </div>
                ) : null}
              </div>
                :
                <div>
                    <div>
                        Sorry nothing was found
                    </div>
                    <Button
                    className='mt-3'
                    variant='primary'
                    onClick={resetSearch}
                    ></Button>
                </div>
            }
            
        </div>
    );
};

export default PaginateNav;