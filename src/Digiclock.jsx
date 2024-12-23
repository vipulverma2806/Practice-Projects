import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const Digiclock = () => {
  const [newDate, setDate] = useState(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div>Digitalclock</div>
      <div>
        <span>{newDate.getHours().toString().padStart(2, "0")}:</span>
        <span>{newDate.getMinutes().toString().padStart(2, "0")}:</span>
        <span>{newDate.getSeconds().toString().padStart(2, "0")}</span>
      </div>
      <div>
        {newDate.toLocaleDateString(undefined, {
          weekday: "long",
          month: "long",
          year: "numeric",
          day: "2-digit",
        })}
      </div>
    </div>
  );
};

export default Digiclock;
