import React from "react";
// import { DateComponent } from "../components/date.component/DateComponent.jsx";
// import { SearchInput } from "../components/search.input/SearchInput.jsx";
import { WeatherCard } from "../components/weather.card/WeatherCard.jsx";
// import { WeatherPanel } from "../components/weather.panel/WeatherPanel.jsx";
import "./HomeScreen.scss";

export const HomeScreen = () => {
  return (
    <div className="home-screen">
      <WeatherCard />
      {/* <div className="header">
        <DateComponent className="date-component" />
        <SearchInput className="search-input" />
      </div>
      <WeatherPanel /> */}
    </div>
  );
};
