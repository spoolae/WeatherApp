import React from "react";
import { Thermometer, MapPin, Wind, Droplet } from "react-feather";

export const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="main-content">
        <div className="top">
          <h3>
            <MapPin />
            Gotham
          </h3>
          <p>Today 00:32 PM</p>
        </div>
        <div className="center">
          <h1>14°C</h1>
          <p>Mostly Clear</p>
        </div>
        <div className="bottom">
          <p>
            <Thermometer />
            720hpa
          </p>
          <p>
            <Droplet />
            32%
          </p>
          <p>
            <Wind />
            12km/h
          </p>
        </div>
      </div>
      <div className="temperature"></div>
    </div>
  );
};
