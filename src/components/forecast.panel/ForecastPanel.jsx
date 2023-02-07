import React from "react";
import "./ForecastPanelStyles.scss";
import { ArrowLeft, ArrowRight } from "react-feather";
import { VerticalTemperatureCard } from "../vertical.temperature.card/VerticalTemperatureCard.jsx";
import { HorizontalTemperatureCard } from "../horizontal.temperature.card/HorizontalTemperatureCard.jsx";

export const ForecastPanel = () => {
  return (
    <div className="forecast-panel">
      <div className="heading">
        <ArrowLeft />
        <h3>Today</h3>
        <ArrowRight />
      </div>
      <div className="today-cards">
        <VerticalTemperatureCard />
        <VerticalTemperatureCard />
        <VerticalTemperatureCard />
      </div>
      <div className="week-cards">
        <h3>This Week</h3>
        <HorizontalTemperatureCard />
        <HorizontalTemperatureCard />
        <HorizontalTemperatureCard />
        <HorizontalTemperatureCard />
        <HorizontalTemperatureCard />
      </div>
    </div>
  );
};
