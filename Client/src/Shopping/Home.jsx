import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Tile from "./Tile";
const Home = () => {
  const [id, setId] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setId(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <nav className="mx-15">
        <ul className="flex flex-row justify-between">
            <h3 className="font-medium text-4xl">Shopping cart</h3>
          <li><Link to="/cart">Cart</Link></li>
          
        </ul>
      </nav>
      <div className="flex flex-row flex-wrap justify-center">
        {id.map((item) => {
          return <Tile item={item}></Tile>;
        })}
      </div>
    </div>
  );
};

export default Home;
