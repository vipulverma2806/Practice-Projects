import React, { useState } from "react";

const Four = () => {
  const [istoggled, settoggle] = useState(false);
  const toggle = () => {
    settoggle(!istoggled);
  };
  return (
    <div>
      <input type="checkbox" onChange={toggle} />
      <h1>{istoggled ? "On" : "Off"}</h1>
    </div>
  );
};

export default Four;
