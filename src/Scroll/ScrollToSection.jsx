import React, { useRef } from "react";

const ScrollToSection = () => {
  const ref = useRef();
  const Box = [
    {
      label: "1",
      style: {
        background: "red",
        width: "100%",
        height: "400px",
        margin: "10px",
      },
    },
    {
      label: "2",
      style: {
        background: "yellow",
        width: "100%",
        height: "400px",
        margin: "10px",
      },
    },
    {
      label: "3",
      style: {
        background: "pink",
        width: "100%",
        height: "400px",
        margin: "10px",
      },
    },
    {
      label: "4",
      style: {
        background: "green",
        width: "100%",
        height: "400px",
        margin: "10px",
      },
    },
    {
      label: "5",
      style: {
        background: "blue",
        width: "100%",
        height: "400px",
        margin: "10px",
      },
    },
    {
      label: "6",
      style: {
        background: "purple",
        width: "100%",
        height: "400px",
        margin: "10px",
      },
    },
  ];
  const ClickHere = () => {
    let position = ref.current.getBoundingClientRect().top;
    window.scrollTo(0, window.scrollY + position);
  };

  return (
    <div>
      ScrollToSection
      <div>
        <button onClick={ClickHere}>Click here</button>
      </div>
      {Box.map((Item, index) => {
        return (
          <div ref={index == 2 ? ref : null} style={Item.style}>
            {Item.label}
          </div>
        );
      })}
      <button onClick={ClickHere}>Click here</button>
    </div>
  );
};

export default ScrollToSection;
