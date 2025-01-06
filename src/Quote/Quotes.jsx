import React, { useEffect, useState } from "react";
import './Quote.css'
const Quotes = () => {
  const [Loading, setLoading] = useState(true);
  const [quote, setQuote] = useState({});

  async function randomQuote() {
    const response = await fetch("https://dummyjson.com/quotes/random");
    const quoteObj = await response.json();
    setQuote(quoteObj);
    setLoading(false);
  }
  useEffect(() => {
    randomQuote();
  }, []);
  return (
    <div>
      Quotes
      {Loading ? (
        <h1>Loading! Please Wait</h1>
      ) : (
        <div>
          <div className="Quote-container">
            <div>{quote.quote}</div>
            <div className="author">-{quote.author}</div>
          </div>
          <button onClick={randomQuote} className="refresh">Next</button>
        </div>
      )}
    </div>
  );
};

export default Quotes;
