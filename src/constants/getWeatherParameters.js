import Wind from "../assets/icons/weather-icons/wind.svg";
import Humidity from "../assets/icons/weather-icons/raindrop-measure.svg";
import Pressure from "../assets/icons/weather-icons/barometer.svg";
import UV from "../assets/icons/weather-icons/uv-index.svg";

export const getWeatherParameters = ({ weather }) => {
  return [
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
};
