import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {Delete} from "./CartSlice"

const ShoppingCart = () => {
    const dispatch =useDispatch();
  const products = useSelector((store) => store.cart.value);
  return (
    <div className="flex flex-row flex-wrap justify-center">
      
      ShoppingCart
      {products.map((item) => {
        return <div className="flex flex-col justify-center items-center p-3 w-56 border-b-red-700 rounded-2xl m-2 border-2">
          <img src={item.image} alt="err" className="h-32" />
          <p>{item.title}</p>
          <button
            className="bg-blue-600  text-white font-bold py-2 px-4 rounded"
            onClick={() =>
              dispatch(Delete({id:item.id }))
            }
          >
            Delete
          </button>
        </div>;
      })}
    </div>
  );
};

export default ShoppingCart;
