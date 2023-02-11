import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import "./ForecastPanelStyles.scss";
import { ArrowLeft, ArrowRight } from "react-feather";
import { VerticalTemperatureCard } from "../vertical.temperature.card/VerticalTemperatureCard.jsx";
import { HorizontalTemperatureCard } from "../horizontal.temperature.card/HorizontalTemperatureCard.jsx";
import { EmptyHorizontalTemperatureCard } from "../horizontal.temperature.card/EmptyHorizontalTemperatureCard.jsx";
import { getWeekForecastData } from "../../constants/getWeekForecastData";
import { getDayForecastData } from "../../constants/getDayForecastData";

export const ForecastPanel = ({ weather }) => {
  const weekForecastData = getWeekForecastData({ weather });
  const dayForecastData = getDayForecastData({ weather });

  const [page, setPage] = useState(0);
  const itemsPerPage = 3;
  const pageCount = Math.ceil(dayForecastData.length / itemsPerPage);

  const currentDate = new Date();
  const currentHour = currentDate.getHours();

  useEffect(() => {
    setPage(Math.floor(currentHour / itemsPerPage));
  }, []);

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
          <VerticalTemperatureCard
            item={item}
            key={startIndex + i}
            isActive={currentHour - 1 === i}
          />
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
