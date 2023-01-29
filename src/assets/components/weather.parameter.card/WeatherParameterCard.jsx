import React from "react";
import "./WeatherParameterCardStyles.scss";
import icon from "../../icons/weather-icons/wind.svg";

export const WeatherParameterCard = () => {
  return (
    <div className="weather-parameter-card">
      <div className="info">
        <h3>Wind</h3>
        <p>Today wind speed</p>
        <h3>12km/h</h3>
      </div>
      <div className="icon">
        <img src={icon} />
      </div>
    </div>
  );
};