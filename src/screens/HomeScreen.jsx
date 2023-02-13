import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./HomeScreen.scss";
import { fetchWeather } from "../redux/weatherSlice.js";
import { WeatherCard } from "../components/weather.card/WeatherCard.jsx";
import { WeatherParameterCard } from "../components/weather.parameter.card/WeatherParameterCard.jsx";
import { ForecastPanel } from "../components/forecast.panel/ForecastPanel.jsx";
import { mapStateToProps } from "../constants/mapStateToProps";
import { getWeatherParameters } from "../constants/getWeatherParameters";
import { Header } from "../components/header/Header.jsx";

export const HomeScreen = ({ weather }) => {
  const dispatch = useDispatch();
  const weatherParameters = getWeatherParameters({ weather });

  useEffect(() => {
    dispatch(fetchWeather());
  }, []);

  return (
    <div className="home-screen">
      <div className="main">
        <Header />
        <WeatherCard weather={weather} />
        <div className="cards">
          {weatherParameters.map((item) => (
            <WeatherParameterCard key={item.name} data={item} />
          ))}
        </div>
      </div>
      <ForecastPanel weather={weather} />
    </div>
  );
};

HomeScreen.propTypes = {
  weather: PropTypes.object,
};

export default connect(mapStateToProps)(HomeScreen);
