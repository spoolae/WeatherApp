import React from "react";
import { WeatherCard } from "../components/weather.card/WeatherCard.jsx";
import { WeatherParameterCard } from "../components/weather.parameter.card/WeatherParameterCard.jsx";
import "./HomeScreen.scss";

export const HomeScreen = () => {
  return (
    <div className="home-screen">
      <div className="main">
        <WeatherCard />
        <div className="cards">
          <WeatherParameterCard />
          <WeatherParameterCard />
          <WeatherParameterCard />
          <WeatherParameterCard />
        </div>
      </div>
    </div>
  );
};
