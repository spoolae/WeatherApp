import React from "react";
import PropTypes from "prop-types";
import { Thermometer, MapPin, Wind, Droplet } from "react-feather";

import "./WeatherCardStyles.scss";
import { TemperatureChart } from "../temperature.chart/TemperatureChart.jsx";
import { getLocalTime } from "../../utils/getLocalTime";
import { getWeatherCardConstants } from "../../utils/getWeatherCardConstants";

export const WeatherCard = ({ weather }) => {
  const {
    cityName,
    temperature,
    weatherCondition,
    pressure,
    humidity,
    windSpeed,
  } = getWeatherCardConstants({ weather });

  return (
    <div className="weather-card">
      <div className="main-content">
        <div className="top">
          <h3>
            <MapPin className="icon" />
            {cityName}
          </h3>
          <p>Today {getLocalTime()}</p>
        </div>
        <div className="center">
          <h1>{parseInt(temperature)}°</h1>
          <p>{weatherCondition}</p>
        </div>
        <div className="bottom">
          <p>
            <Thermometer className="icon" />
            {pressure} hpa
          </p>
          <p>
            <Droplet className="icon" />
            {humidity} %
          </p>
          <p>
            <Wind className="icon" />
            {windSpeed} km/h
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
