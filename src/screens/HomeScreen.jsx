import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./HomeScreen.scss";
import { fetchWeather } from "../redux/weatherSlice.js";
import { WeatherCard } from "../components/weather.card/WeatherCard.jsx";
import { WeatherParameterCard } from "../components/weather.parameter.card/WeatherParameterCard.jsx";
import Wind from "../assets/icons/weather-icons/wind.svg";
import Humidity from "../assets/icons/weather-icons/raindrop-measure.svg";
import Pressure from "../assets/icons/weather-icons/barometer.svg";
import UV from "../assets/icons/weather-icons/uv-index.svg";

export const HomeScreen = ({ weather }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchWeather());
    console.log(weather.data);
  }, []);

  const weatherParameters = [
    {
      name: "Wind",
      description: "Today wind speed",
      value: weather.data.current.wind_kph,
      unit: "km/h",
      icon: Wind,
    },
    {
      name: "Humidity",
      description: "Today humidity",
      value: weather.data.current.humidity,
      unit: "%",
      icon: Humidity,
    },
    {
      name: "Pressure",
      description: "Today pressure",
      value: weather.data.current.pressure_mb,
      unit: "hpa",
      icon: Pressure,
    },
    {
      name: "UV Index",
      description: "Today UV index",
      value: weather.data.current.uv,
      unit: "",
      icon: UV,
    },
  ];

  return (
    <div className="home-screen">
      <div className="main">
        <WeatherCard weather={weather} />
        <div className="cards">
          {weatherParameters.map((item) => (
            <WeatherParameterCard key={item.name} data={item} />
          ))}
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
