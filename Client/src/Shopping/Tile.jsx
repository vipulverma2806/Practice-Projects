import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {Add} from "./CartSlice"

const Tile = ({ item }) => {
  const [id, setId] = useState();
  const dispatch = useDispatch()
  return (
    <div className="flex flex-col items-center p-3 w-56 border-b-red-700 border-2 rounded-2xl m-2 justify-between">
      <img src={item.image} alt="err" className="h-32" />
      <p className="w-50 h-6 m-5 overflow-hidden">{item.title}</p>
      <button
        className="bg-blue-600  text-white font-bold py-2 px-4 rounded"
        onClick={() => dispatch(Add({image:item.image, title : item.title,id:item.id }))}
      >
        Add to cart
      </button>
    </div>
  );
};

export default Tile;
