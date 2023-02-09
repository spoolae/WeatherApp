import React from "react";
import PropTypes from "prop-types";

import "./HorizontalTemperatureCardStyles.scss";
import ClearDay from "../../assets/icons/weather-icons/clear-day.svg";

export const HorizontalTemperatureCard = ({ item }) => {
  return (
    <div className="horizontal-temperature-card">
      <div>
        <h4>{item.day}</h4>
        <p>{item.date}</p>
      </div>
      <h3>{item.temperature}°</h3>
      <img src={ClearDay} />
    </div>
  );
};

HorizontalTemperatureCard.propTypes = {
  item: PropTypes.object,
};
