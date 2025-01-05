//https://api.quotable.io/quotes/random

import { useEffect, useState } from "react";
import "./Quote.css";

function RandomQuoteGenerator() {
  const [loading, setLoading] = useState(false);
  const [quote, setQuote] = useState({});

  async function fetchQuote() {
    try {
      setLoading(true);
      const apiResponse = await fetch("https://dummyjson.com/quotes/random");

      const result = await apiResponse.json();

      console.log(result.quote);

      if (result && result.quote.length > 0) {
        setLoading(false);
        setQuote(result);
        console.log(result);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchQuote();
  }, []);

  function handleRefresh() {
    fetchQuote();
  }
  if (loading) {
    return <h3>Loading Quote ! Please wait</h3>;
  }

  return (
    <div className="random-quote-generator">
      <h1>Random Quote Generator</h1>
      <div className="quote-wrapper">
        <p>{quote.author}</p>
        <p>{quote.quote}</p>
      </div>
      <button className="refresh-btn" onClick={handleRefresh}>
        Refresh
      </button>
    </div>
  );
}

export default RandomQuoteGenerator;
