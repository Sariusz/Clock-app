import React, { useState } from "react";
import "./weather.scss";
const Weather = () => {
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c174d70cf0a2e6ad0786d2a1ff61f904`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
        });
    }
  };

  return (
    <div className="weather--container">
      <input
        className="weather--input"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />
      {typeof weatherData.main === "undefined" ? (
        <div>
          <p>Welcome to weather app! Enter in a city to get the weather of.</p>
        </div>
      ) : (
        <div>
          <p>{weatherData.name}</p>
          <p>{Math.round(weatherData.main.temp)}°C</p>
          <p>{weatherData.weather[0].main}</p>
        </div>
      )}
    </div>
  );
};
export default Weather;
