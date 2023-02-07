import React from "react";
import "./HorizontalTemperatureCardStyles.scss";
import ClearDay from "../../assets/icons/weather-icons/clear-day.svg";

export const HorizontalTemperatureCard = () => {
  return (
    <div className="horizontal-temperature-card">
      <div>
        <h4>Tommorow</h4>
        <p>12 Apr</p>
      </div>
      <h3>10°</h3>
      <img src={ClearDay} />
    </div>
  );
};
