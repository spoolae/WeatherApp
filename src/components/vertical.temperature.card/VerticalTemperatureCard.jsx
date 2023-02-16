import React, { useMemo } from "react";
import PropTypes from "prop-types";

import "./VerticalTemperatureCardStyles.scss";
import { getWeatherIcon } from "../../constants/getWeatherIcon";

export const VerticalTemperatureCard = ({ item }) => {
  const currentHour = useMemo(() => new Date().getHours(), []);
  const isActive = currentHour === parseInt(item.time.split(":")[0], 10);
  const className = isActive
    ? "vertical-temperature-card active"
    : "vertical-temperature-card";

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
