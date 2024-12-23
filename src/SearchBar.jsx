import React, { useEffect, useState } from "react";

const SearchBar = ({ items }) => {
  const [input, setinput] = useState("");
  const [sitems, setitem] = useState(items);

  useEffect(() => {
    setitem(
      items.filter((item) => item.toLowerCase().includes(input.toLowerCase()))
    );
  }, [input]);

  return (
    <div>
      <input type="text" onChange={(e) => setinput(e.target.value)} />
      <ul>
        {sitems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;
