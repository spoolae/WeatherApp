import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Thermometer, MapPin, Wind, Droplet } from "react-feather";

import "./WeatherCardStyles.scss";
import { TemperatureChart } from "../temperature.chart/TemperatureChart.jsx";

export const WeatherCard = ({ weather }) => {
  const cityName = weather.data.location.name;
  const temperature = weather.data.current.temp_c;
  const weatherCondition = weather.data.current.condition.text;
  const pressure = weather.data.current.pressure_mb;
  const humidity = weather.data.current.humidity;
  const windSpeed = weather.data.current.wind_kph;

  const [time, setTime] = useState("");

  const getLocalTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setTime(time);
  };

  useEffect(() => {
    getLocalTime();
  }, []);

  return (
    <div className="weather-card">
      <div className="main-content">
        <div className="top">
          <h3>
            <MapPin className="icon" />
            {cityName}
          </h3>
          <p>Today {time}</p>
        </div>
        <div className="center">
          <h1>{temperature}°</h1>
          <p>{weatherCondition}</p>
        </div>
        <div className="bottom">
          <p>
            <Thermometer className="icon" />
            {pressure}hpa
          </p>
          <p>
            <Droplet className="icon" />
            {humidity}%
          </p>
          <p>
            <Wind className="icon" />
            {windSpeed}km/h
          </p>
        </div>
      </div>
      <div className="temperature">
        <h3>Temperature</h3>
        <TemperatureChart weather={weather} />
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.object,
};
