import React, { useState } from "react";

import "./tabs.css";
const Tabs = () => {
  const [currentIndex, setIndex] = useState(0);

  const Data = [
    {
      title: "Tab 1",
      content: "This is first",
    },
    {
      title: "Tab 2",
      content: "This is Second",
    },
    {
      title: "Tab 3",
      content: "This is Third",
    },
  ];
  const clicked = (e) => {
    setIndex(e);
  };

  return (<>
    <div className="container">
      {Data.map((dataItem, index) => {
        return (
          <div
            className={`tab ${currentIndex == index ? "active-tab" : ""}`}
            onClick={()=>clicked(index)}
            key={index + 1}
          >
            Tab {index + 1}
          </div>
        );
      })}
      
    </div>
    <div className="Content">{Data[currentIndex].content}</div>
    </>
  );
};

export default Tabs;
