import React from "react";
import "./VerticalTemperatureCardStyles.scss";
import ClearDay from "../../assets/icons/weather-icons/clear-day.svg";

export const VerticalTemperatureCard = () => {
  return (
    <div className="vertical-temperature-card">
      <p>Now</p>
      <img src={ClearDay} />
      <h3>10°</h3>
    </div>
  );
};
