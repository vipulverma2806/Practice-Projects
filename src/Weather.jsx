import React, { useEffect, useState } from "react";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let lon = position.coords.longitude;
        let lat = position.coords.latitude;
        console.log(lon);
        console.log(lat);

        fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lat}&appid=85810822c12563f28f45620c628bd72f`
        )
          .then((stream) => stream.json())
          .then((data) => setWeather(data));
        console.log(weather);
      });
    }
  }, []);

  return (
    <div>
      {weather ? (
        <div>
          <h2>Mausam:{weather.weather[0].main}</h2>
          <h2>Temp:{weather.main.temp}</h2>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default Weather;
