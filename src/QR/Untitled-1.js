import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [qrCode, setQrCode] = useState("");
  // const [input, setInput] = useState("");
  let Input;
  function handleGenerateQrCode() {
    setQrCode(Input);
    // setInput("");
    console.log(Input)
  }

  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
        <input
          onChange={(e) => Input = e.target.value}
          type="text"
          name="qr-code"
          // value={Input}
          placeholder="Enter your value here"
        />
        <button
          disabled={Input && Input.trim() !== "" ? false : true}
          onClick={handleGenerateQrCode}
        >
          Generate
        </button>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}








