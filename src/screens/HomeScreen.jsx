import React, { useState } from "react";
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

const HomeScreen = ({ weather, isDark }) => {
  const dispatch = useDispatch();
  const [weatherParameters, setWeatherParameters] = useState([]);

  useEffect(() => {
    try {
      dispatch(fetchWeather("Zerkow"));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      setWeatherParameters(getWeatherParameters({ weather }));
    } catch (error) {
      console.log(error);
    }
  }, [weather]);

  if (weather.data.error || !weather.data) {
    console.log(weather.data);
    return <div>Loading...</div>;
  }

  return (
    <div className={isDark ? "home-screen theme-dark" : "home-screen"}>
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
  isDark: PropTypes.bool,
};

const ConnectedHomeScreen = connect(mapStateToProps)(HomeScreen);
export { ConnectedHomeScreen as HomeScreen };
