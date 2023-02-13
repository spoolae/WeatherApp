import React from "react";
import PropTypes from "prop-types";

import "./VerticalTemperatureCardStyles.scss";
import { getWeatherIcon } from "../../constants/getWeatherIcon";

export const VerticalTemperatureCard = ({ item }) => {
  const currentDate = new Date();
  const currentHour = currentDate.getHours();
  const isActive = currentHour === parseInt(item.time.split(":")[0]);
  const className = isActive
    ? "vertical-temperature-card active"
    : "vertical-temperature-card";

  console.log(item.condition);
  console.log(item.isDay);

  return (
    <div className={className}>
      <p>{item.time}</p>
      <img src={getWeatherIcon(item.condition, item.isDay)} />
      <h3>{item.temperature}°</h3>
    </div>
  );
};

VerticalTemperatureCard.propTypes = {
  item: PropTypes.object,
};
