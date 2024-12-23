import React, { useState } from "react";

const Bg = () => {
  const [random, setRandom] = useState();
  const [backgroundColor, setColor] = useState("white");
  const array = ["red", "green", "yellow", "blue", "pink"];

  const clickhere = () => {
    setRandom(Math.floor(Math.random() * 5));
    setColor(array[random]);
  };
  return (
    <div
      onClick={clickhere}
      style={{
        backgroundColor,
        width: "100px",
        height: "100px",
      }}
    >
      Bg
    </div>
  );
};

export default Bg;
