import React, { useState } from "react";
import QRCode from "react-qr-code";
const QRgen = () => {
  const [input, setInput] = useState("");
  const QRFunction = (e) => {
    setInput(e.target.value);
  };
  return (
    <>
      <h1>QRgenerator</h1>
      <input type="text" onChange={QRFunction} />
      <div>
        <QRCode value={input}></QRCode>
      </div>
    </>
  );
};

export default QRgen;
