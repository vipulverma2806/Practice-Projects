import React from "react";
import { useState } from "react";
import "./progress.css";

const Progress = () => {
  const [progress, setProgress] = useState(0);
  const [Error, setError] = useState("");
  const handleProgress = (event) => {
    setProgress(event.target.value);
    if (event.target.value > 100) {
      setError("Precent should be less than 100");
    } else if (event.target.value < 0) {
      setError("Precent should be more than 0");
    }
  };
  return (
    <div>
      <div className="container">
        <div className="bar">
          {progress < 100 && progress > 0 ? (
            <div className="progress" style={{ width: `${progress}%` }}>
              <div
                style={{
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                {progress}
              </div>
            </div>
          ) : (
            Error
          )}
        </div>
        <label htmlFor="">Put Progress Percent:</label>
        <input type="number" onChange={handleProgress} className="input" />
      </div>
    </div>
  );
};

export default Progress;
