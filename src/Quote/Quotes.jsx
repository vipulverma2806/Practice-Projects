import React, { useEffect, useState } from "react";

const Quotes = () => {
  const [Loading, setLoading] = useState(false);
  const [quote, setQuote] = useState();
    
  
  async function randomQuote() {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const quote1 = await response.json();
    setQuote(quote1);
    // console.log(quote.quote)
    
  }
  useEffect(randomQuote(),[])
  return (
    <div>
      Quotes
      {Loading ? (
        <h1>Loading! Please Wait</h1>
      ) : (
        <div>
          <div className="Quote-container">
            <div>{quote.quote}</div>
            <div>{quote.author}</div>
          </div>
          <button onClick={randomQuote} className="refresh"></button>
        </div>
      )}
    </div>
  );
};

export default Quotes;
