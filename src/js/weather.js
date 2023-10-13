import React, { useState } from "react";
import "../scss/weather.scss";

const mapIconToImageUrl = (iconCode) => {
  return `https://openweathermap.org/img/w/${iconCode}.png`;
};

const Weather = () => {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");
  const weatherKey = "c174d70cf0a2e6ad0786d2a1ff61f904";

  const kelvinToCelsius = (kelvin) => {
    return kelvin - 273.15;
  };

  const getWeather = (event) => {
    if (event.key === "Enter") {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setWeatherData(data);
          setCity("");
          console.log(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
    }
  };

  return (
    <div className="main__container__weather">
      <p>Welcome to the weather app! Enter a city to get the weather.</p>
      <input
        className="weather--input"
        placeholder="Enter City..."
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={getWeather}
      />
      {weatherData.main && (
        <div>
          <p>City: {weatherData.name}</p>
          <p>
            Temperature: {Math.round(kelvinToCelsius(weatherData.main.temp))}°C
          </p>
          <p>
            description: {weatherData.weather[0].description}
            {weatherData.weather[0].icon && (
              <img
                src={mapIconToImageUrl(weatherData.weather[0].icon)}
                alt="Weather Icon"
              />
            )}
          </p>
          <p>wind: {weatherData.wind.speed} km/h</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
