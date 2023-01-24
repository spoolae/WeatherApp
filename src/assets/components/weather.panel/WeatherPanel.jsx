import React, { useEffect, useState } from "react";
import "./WeatherPanelStyles.scss";
import PartlyCloudyDayFog from "../../icons/weather-icons/partly-cloudy-day-fog.svg";

export const WeatherPanel = () => {
  const [weatherData, setWeatherData] = useState({});
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString()
  );

  useEffect(() => {
    fetch(
      "http://api.weatherapi.com/v1/forecast.json?key=c860d4d4f81745ebb4e223101232201&q=London"
    )
      .then((response) => response.json())
      .then((data) => setWeatherData(data));

    setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  const weatherPanel = () => {
    let hour = new Date().getHours();
    let humidityData = weatherData.forecast.forecastday[0].hour;
    let humidityInfo = humidityData.slice(hour - 1, hour + 3).map((item) => {
      let time = new Date(item.time).toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
      return (
        <p key={item.time}>
          {time} - Humidity: {item.humidity}%
        </p>
      );
    });

    // const HumidityBar = () => {
    //   return null;
    // };

    return (
      <div>
        <div className="main">
          <div className="heading">
            <div>
              <h2>{weatherData.location.name}</h2>
              <p>
                {weatherData.location.region}, {weatherData.location.country}
              </p>
            </div>
            <h2>{currentTime}</h2>
          </div>
          <div className="temperature">
            <img src={PartlyCloudyDayFog} />
            <h1>{weatherData.current.temp_c}°C</h1>
            <h3>{weatherData.current.condition.text}</h3>
          </div>
          <div className="underline" />
        </div>
        <div className="info">
          <h4>Humidity</h4>
          {humidityInfo}
        </div>
      </div>
    );
  };

  const emptyPanel = () => {
    return (
      <div>
        <p>{`Sorry, information can't be loaded`}</p>
      </div>
    );
  };

  return (
    <div className="weather-panel">
      {weatherData.location && weatherData.current
        ? weatherPanel()
        : emptyPanel()}
    </div>
  );
};
