import React, { useState } from "react";
import "./bmi.css";
const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [BMI, setBMI] = useState("");
  const [error, setError] = useState("");

  const calculate = () => {
    const Height = parseFloat(height);
    const Weight = parseFloat(weight);
    if (Height > 40 && Height < 250 && Weight > 3 && Weight < 400) {
      const mtrHeight = Height / 100;
      setBMI((Weight / (mtrHeight * mtrHeight)).toFixed(2));
      setError("");
      console.log(BMI);
    } else {
      setBMI("");
      setError("Please enter a Realistic no.");
    }
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <label htmlFor="">Height (cm)</label>
      <input
        type="number"
        onChange={(event) => setHeight(event.target.value)}
      />
      <label htmlFor="">Weight (kg)</label>
      <input
        type="number"
        onChange={(event) => setWeight(event.target.value)}
      />
      <button onClick={calculate}>Calculate</button>
      <p>{error}</p>
      <p>
        {BMI
          ? BMI < 18.5
            ? "Underweight"
            : BMI <= 24.9
            ? "Normal Weight"
            : BMI <= 29.9
            ? "OverWeight"
            : "Obese"
          : null}
      </p>

      <p>{BMI}</p>
    </div>
  );
};

export default BMICalculator;
