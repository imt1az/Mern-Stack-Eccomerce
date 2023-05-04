import React, { useState } from "react";

const ImageView = ({ formik,deletePic }) => {
    const [idToDelete,setIdToDelete] = useState(null)
  const [removeModal, setRemoveModal] = useState(false);

  const handleModal = (index) => {
    setIdToDelete(index);
    setRemoveModal(true);
  };

  const confirmDelete =()=>{
        deletePic(idToDelete)
        setRemoveModal(false);
        setIdToDelete(null)
  }
  return (
    <div>
      <div className="flex flex-wrap gap-2 overflow-hidden">
        {formik.values && formik.values.images
          ? formik.values.images.map((item, i) => (
              <div
                className=" relative hover:shadow-2xl hover:opacity-75 border-1 rounded-lg "
                key={item}
              >
                <img className="w-52 h-52 " src={item} alt="" />
                <label
                  onClick={() => handleModal(i)}
                  htmlFor="image-view"
                  className="btn btn-xs btn-outline hover:bg-black btn-sm absolute top-5 right-4 w-2 text-red-900 font-bold"
                >
                  x
                </label>
              </div>
            ))
          : null}
        {/* { formik.values && formik.values.images ?
             
            formik.values.images((item)=>(
                <div key={item} onClick={()=>alert('Open')} 
                className="w-[200px] h-[200px] display: inline-block background-size: cover cursor-pointer"
                style={{background:`url(${item})`}}
                >
                     
                </div>
            ))
             
             :null
             } */}

{
        removeModal &&    <div>
        <input type="checkbox" id="image-view" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-red-600">
              Are You Sure Want To Delete   ?
            </h3>
            <div className="modal-action">
              <label htmlFor="image-view" className="btn">
                Cancel
              </label>
              {/* <button  className="btn btn-error">Delete</button> */}
              <button onClick={confirmDelete}   className="btn btn-error">Delete</button>
            </div>
          </div>
        </div>
      </div>
      }
      </div>
    </div>
  );
};

export default ImageView;
