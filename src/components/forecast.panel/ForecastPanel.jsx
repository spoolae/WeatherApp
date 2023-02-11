import React from "react";
import PropTypes from "prop-types";
import { register } from "swiper/element/bundle";

import "./ForecastPanelStyles.scss";
import { ArrowLeft, ArrowRight } from "react-feather";
import { VerticalTemperatureCard } from "../vertical.temperature.card/VerticalTemperatureCard.jsx";
import { HorizontalTemperatureCard } from "../horizontal.temperature.card/HorizontalTemperatureCard.jsx";
import { EmptyHorizontalTemperatureCard } from "../horizontal.temperature.card/EmptyHorizontalTemperatureCard.jsx";
import { getWeekForecastData } from "../../constants/getWeekForecastData";
import { getDayForecastData } from "../../constants/getDayForecastData";

export const ForecastPanel = ({ weather }) => {
  register();

  const weekForecastData = getWeekForecastData({ weather });
  const dayForecastData = getDayForecastData({ weather });

  const swiperEl = document.querySelector("swiper-container");

  const handlePrevClick = () => {
    swiperEl.swiper.slidePrev();
    swiperEl.swiper.slidePrev();
    swiperEl.swiper.slidePrev();
  };

  const handleNextClick = () => {
    swiperEl.swiper.slideNext();
    swiperEl.swiper.slideNext();
    swiperEl.swiper.slideNext();
  };

  return (
    <div className="forecast-panel">
      <div className="heading">
        <ArrowLeft onClick={handlePrevClick} />
        <h3>Today</h3>
        <ArrowRight onClick={handleNextClick} />
      </div>
      <div className="today-cards">
        <swiper-container slides-per-view="3">
          {dayForecastData.map((item, i) => (
            <swiper-slide key={i}>
              <VerticalTemperatureCard item={item} />
            </swiper-slide>
          ))}
        </swiper-container>
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
