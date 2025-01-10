import React from "react";
import useFetch from "./Usefetch";
const UsefetchHookTest = () => {
  const { data, loading, error } = useFetch('https://dummyjson.com/products');
  console.log(data)
  return (
    <div>
      UsefetchTest
      {data && data.products && data.product.length > 0
        ? data.products.map((itemObj) => {
            return <p key={itemObj.id}>{itemObj.title}</p>;
          })
        : (loading && <p> Loading Please wait</p>)
           }
    </div>
  );
};

export default UsefetchHookTest;
