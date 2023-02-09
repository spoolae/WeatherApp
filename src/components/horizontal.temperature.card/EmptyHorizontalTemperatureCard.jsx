import React from "react";
import { AlertTriangle } from "react-feather";

import "./HorizontalTemperatureCardStyles.scss";

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
