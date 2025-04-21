import React from "react";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import "./styles.css";

const index = ({ stars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const handleClick = (index) => {
    setRating(index);
  };
  const handleEnter = (index) => {
    setHover(index);
  };
  const handleLeave = () => {
    setHover(rating);
  };
  return (
    <div>
      {[...Array(stars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            size={60}
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleEnter(index)}
            onMouseLeave={() => handleLeave()}
            className={index <= (hover || rating) ? "active" : "inactive"}
          />
        );
      })}
    </div>
  );
};

export default index;
