import React from "react";
import PropTypes from "prop-types";
import { AlertTriangle } from "react-feather";
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

export const EmptyHorizontalTemperatureCard = () => {
  return (
    <div className="horizontal-temperature-card">
      <div>
        <h4>Sorry, we have no information</h4>
        <p>about other days</p>
      </div>
      <AlertTriangle className="icon" />
    </div>
  );
};

HorizontalTemperatureCard.propTypes = {
  item: PropTypes.object,
};
