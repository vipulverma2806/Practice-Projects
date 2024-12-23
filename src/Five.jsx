import React, { useState } from "react";

const Five = () => {
  const quote = [ " Avoid daydreaming about the years to come.","You are the most important person in your whole life.","Always be true to who you are, and ignore what other people have to say about you.","Always be true to who you are, and ignore what other people have to say about you.","Only demonstrate your strength when it’s really required.","Subscribe to Drop X Out"];

  const [random, qs] = useState(0);
  const rand = () => {
    qs(Math.floor(Math.random() * quote.length));
  };
  console.log(random);
  return (
    <>
      <div>{quote[random]}</div>
      <button onClick={rand}>Click for New quote</button>
    </>
  );
};

export default Five;
