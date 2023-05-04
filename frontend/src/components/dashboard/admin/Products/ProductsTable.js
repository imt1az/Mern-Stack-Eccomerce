import React from "react";
import Moment from "react-moment";
import Loading from "utls/products/Loading";
import { BsArrowRightSquareFill, BsArrowLeftSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const ProductsTable = ({
  prods,
  prev,
  next,
  gotoEdit,
  handleModal,
  removeModal,
  handleRemove
}) => {
  const goToPrevPage = (page) => {
    prev(page);
  };
  const goToNextPage = (page) => {
    next(page);
  };
  return (
    <div>
      {prods && prods.docs ? (
        <>
          <div className ="overflow-x-auto">
            <table className = "table w-full">
              {/* <!-- head --> */}
              <thead>
                <tr>
                  <th></th>
                  <th>Created</th>
                  <th>Model</th>
                  <th>Available</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* <!-- row 1 --> */}

                {prods.docs.map((item, index) => (
                  <tr className="hover" key={item._id}>
                    <th>{index + 1}</th>
                    <td>
                      <Moment to={item.date}></Moment>
                    </td>
                    <td>{item.model}</td>
                    <td>{item.available}</td>
                    <td>
                      <button
                        onClick={() => gotoEdit(item._id)}
                        className="btn btn-success"
                      >
                        Edit
                      </button>
                      <label
                        onClick={() => handleModal(item._id)}
                        htmlFor="delete-product"
                        className="btn btn-error modal-button"
                      >
                        Delete
                      </label>
                    </td>
                  </tr>
                  
                ))}
              </tbody>
            </table>

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
            <hr />
            <Link to="/dashboard/admin/add_products">
              <button className=" mt-5 btn btn-xs sm:btn-sm md:btn-md ">
                Add Product
              </button>
            </Link>
          </div>
        </>
      ) : (
        <Loading />
      )}
      {
        removeModal &&    <div>
        <input type="checkbox" id="delete-product" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-red-600">
              Are You Sure Want To Delete   ?
            </h3>
            <div className="modal-action">
              <label htmlFor="delete-product" className="btn">
                Cancel
              </label>
              {/* <button  className="btn btn-error">Delete</button> */}
              <button onClick={()=>handleRemove()}   className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      </div>
      }
    </div>
  );
};

export default ProductsTable;
