import React from "react";
import { Thermometer, MapPin, Wind, Droplet } from "react-feather";
import { TemperatureChart } from "./TemperatureChart.jsx";
import "./WeatherCardStyles.scss";

export const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="main-content">
        <div className="top">
          <h3>
            <MapPin className="icon" />
            Gotham
          </h3>
          <p>Today 00:32 PM</p>
        </div>
        <div className="center">
          <h1>14°</h1>
          <p>Mostly Clear</p>
        </div>
        <div className="bottom">
          <p>
            <Thermometer className="icon" />
            720hpa
          </p>
          <p>
            <Droplet className="icon" />
            32%
          </p>
          <p>
            <Wind className="icon" />
            12km/h
          </p>
        </div>
      </div>
      <div className="temperature">
        <h3>Temperature</h3>
        <TemperatureChart />
      </div>
    </div>
  );
};
