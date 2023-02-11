import React from "react";
import PropTypes from "prop-types";

import "./VerticalTemperatureCardStyles.scss";
import ClearDay from "../../assets/icons/weather-icons/clear-day.svg";

export const VerticalTemperatureCard = ({ item }) => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const isActive = currentHour === parseInt(item.time.split(":")[0]);
  const className = isActive
    ? "vertical-temperature-card active"
    : "vertical-temperature-card";

  return (
    <div className={className}>
      <p>{item.time}</p>
      <img src={ClearDay} />
      <h3>{item.temperature}°</h3>
    </div>
  );
};

VerticalTemperatureCard.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
};
