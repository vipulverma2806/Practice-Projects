import React, { useState } from "react";
import { useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  let dataObj;
  async function fetchApi() {
    try {
      const fetchedData = await fetch(url);  

      if (!fetchedData.ok) throw new Error(fetchedData.statusText);
      dataObj = await fetchedData.json();
    } catch (e) {
      setError(true);
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchApi();
    setData(dataObj);
    setLoading(false);
    setError(false);
  }, []);
  return <>{data}</>;
};

export default useFetch;
