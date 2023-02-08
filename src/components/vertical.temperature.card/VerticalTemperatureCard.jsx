import React from "react";
import PropTypes from "prop-types";
import "./VerticalTemperatureCardStyles.scss";
import ClearDay from "../../assets/icons/weather-icons/clear-day.svg";

export const VerticalTemperatureCard = ({ item }) => {
  return (
    <div className="vertical-temperature-card">
      <p>{item.time}</p>
      <img src={ClearDay} />
      <h3>{item.temperature}°</h3>
    </div>
  );
};

VerticalTemperatureCard.propTypes = {
  item: PropTypes.object,
};
