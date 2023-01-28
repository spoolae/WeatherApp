import React from "react";
import { WeatherCard } from "../components/weather.card/WeatherCard.jsx";
import "./HomeScreen.scss";

export const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="main">
        <WeatherCard />
      </div>
    </div>
  );
};
