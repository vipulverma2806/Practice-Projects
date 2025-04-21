import React, { useState } from "react";

const Page = ({ items, perPage }) => {
  const [currentPage, setCurrent] = useState();

  const pages = [];
  for (let i = 1; i <= Math.ceil(items.length / perPage); i++) {
    pages.push(i);
  }
  let first;
  for (let i = -1; i <= currentPage - 2; i++) {
    first = currentPage + i;
  }
  let last = first + 2;
  let currentList = items.slice(first, last);

  return (
    <div>
      <div>
        <ul>
          {currentList.map((List, index) => {
            return <li key={index}>{List}</li>;
          })}
        </ul>
      </div>
      <div>
        <ul>
          {pages.map((page, index) => {
            return (
              <li key={index} onClick={() => setCurrent(page)}>
                {page}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Page;
