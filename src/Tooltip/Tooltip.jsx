import React, { useState } from "react";
import "./tooltip.css";
const Tooltip = () => {
  const [visible, setVisible] = useState();
  const handleEnter = () => {
    setTimeout(() => setVisible(true), 300);
  };
  const handleLeave = () => {
    setTimeout(() => setVisible(false), 300);
  };
  return (
    <div
      className="Container"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      Tooltip
      {visible ? <div className="tooltip">ok </div> : null}
    </div>
  );
};

export default Tooltip;
