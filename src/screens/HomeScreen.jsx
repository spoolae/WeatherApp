import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./HomeScreen.scss";
import { fetchWeather } from "../redux/weatherSlice.js";
import { WeatherCard } from "../components/weather.card/WeatherCard.jsx";
import { WeatherParameterCard } from "../components/weather.parameter.card/WeatherParameterCard.jsx";

export const HomeScreen = ({ weather }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
    console.log(weather.data);
  }, []);

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

HomeScreen.propTypes = {
  weather: PropTypes.object,
};

const mapStateToProps = (state) => ({
  weather: state.weather,
});

export default connect(mapStateToProps)(HomeScreen);
