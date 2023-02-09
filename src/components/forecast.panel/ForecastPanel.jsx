import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ForecastPanelStyles.scss";
import { ArrowLeft, ArrowRight } from "react-feather";
import { VerticalTemperatureCard } from "../vertical.temperature.card/VerticalTemperatureCard.jsx";
import {
  EmptyHorizontalTemperatureCard,
  HorizontalTemperatureCard,
} from "../horizontal.temperature.card/HorizontalTemperatureCard.jsx";

export const ForecastPanel = ({ weather }) => {
  //what a mess. need to fix that
  const weekForecastData = weather.data.forecast.forecastday.map((item, i) => {
    let day = new Date(item.date).toLocaleDateString("en-US", {
      weekday: "long",
    });
    let date = new Date(item.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
    switch (i) {
      case 0:
        return {
          day: "Today",
          date,
          condition: item.day.condition.text,
          temperature: Math.round(item.day.avgtemp_c),
        };
      case 1:
        return {
          day: "Tommorow",
          date,
          condition: item.day.condition.text,
          temperature: Math.round(item.day.avgtemp_c),
        };
      default:
        return {
          day,
          date,
          condition: item.day.condition.text,
          temperature: Math.round(item.day.avgtemp_c),
        };
    }
  });

  const dayForecastData = weather.data.forecast.forecastday[0].hour.map(
    (item) => ({
      time: item.time.split(" ")[1],
      condition: item.condition.text,
      temperature: Math.round(item.temp_c),
    })
  );

  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(dayForecastData.length / itemsPerPage);

  const handlePrevClick = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const handleNextClick = () => {
    if (page < pageCount - 1) {
      setPage(page + 1);
    }
  };

  const startIndex = page * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const items = dayForecastData.slice(startIndex, endIndex);

  return (
    <div className="forecast-panel">
      <div className="heading">
        <ArrowLeft onClick={handlePrevClick} />
        <h3>Today</h3>
        <ArrowRight onClick={handleNextClick} />
      </div>
      <div className="today-cards">
        {items.map((item, i) => (
          <VerticalTemperatureCard item={item} key={startIndex + i} />
        ))}
      </div>
      <div className="week-cards">
        <h3>This Week</h3>
        {weekForecastData.map((item, i) => (
          <HorizontalTemperatureCard item={item} key={i} />
        ))}
        {weekForecastData.length < 7 ? (
          <EmptyHorizontalTemperatureCard />
        ) : null}
      </div>
    </div>
  );
};

ForecastPanel.propTypes = {
  weather: PropTypes.object,
};
