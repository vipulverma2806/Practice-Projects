import React, { useReducer } from "react";

const Image = () => {
  let imageArr = [
    "https://shorturl.at/TeNzT",
    "https://shorturl.at/YCrgt",
    "https://shorturl.at/Ovuwx",
    "https://shorturl.at/Irjqs",
    "https://shorturl.at/W7sWh",
  ];

  const first = (state, action) => {
    switch (action.type) {
      case "PREVIOUS":
        return state - 1;
      case "NEXT":
        return state + 1;
    }
  };
  const [state, dispatch] = useReducer(first, 0);
  return (
    <div>
      The Boys Image
      <div>
        <img src={imageArr[state]} />
      </div>
      <button
        onClick={() => {
          dispatch({ type: "PREVIOUS" });
        }}
      >
        Previous
      </button>
      <button
        onClick={() => {
          dispatch({ type: "NEXT" });
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Image;
