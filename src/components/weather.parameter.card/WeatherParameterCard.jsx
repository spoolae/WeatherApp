import React from "react";
import PropTypes from "prop-types";

import "./WeatherParameterCardStyles.scss";

export const WeatherParameterCard = ({ data }) => {
  return (
    <div className="weather-parameter-card">
      <div className="info">
        <h3>{data.name}</h3>
        <p>{data.description}</p>
        <h3>
          {data.value} {data.unit}
        </h3>
      </div>
      <div className="icon">
        <img src={data.icon} />
      </div>
    </div>
  );
};

WeatherParameterCard.propTypes = {
  data: PropTypes.object,
};
