import Wind from "../assets/icons/weather-icons/wind.svg";
import DustWind from "../assets/icons/weather-icons/dust-wind.svg";
import Raindrop from "../assets/icons/weather-icons/raindrop.svg";
import Raindrops from "../assets/icons/weather-icons/raindrops.svg";
import Pressure from "../assets/icons/weather-icons/barometer.svg";
import UV from "../assets/icons/weather-icons/uv-index.svg";
import UV1 from "../assets/icons/weather-icons/uv-index-1.svg";
import UV2 from "../assets/icons/weather-icons/uv-index-2.svg";
import UV3 from "../assets/icons/weather-icons/uv-index-3.svg";
import UV4 from "../assets/icons/weather-icons/uv-index-4.svg";
import UV5 from "../assets/icons/weather-icons/uv-index-5.svg";
import UV6 from "../assets/icons/weather-icons/uv-index-6.svg";
import UV7 from "../assets/icons/weather-icons/uv-index-7.svg";
import UV8 from "../assets/icons/weather-icons/uv-index-8.svg";
import UV9 from "../assets/icons/weather-icons/uv-index-9.svg";
import UV10 from "../assets/icons/weather-icons/uv-index-10.svg";

export const getWeatherParameters = ({ weather }) => {
  return [
    {
      name: "Wind",
      description: "Today wind speed",
      value: weather.data.current.wind_kph,
      unit: "km/h",
      icon: weather.data.current.wind_kph < 52 ? Wind : DustWind,
    },
    {
      name: "Humidity",
      description: "Today humidity",
      value: weather.data.current.humidity,
      unit: "%",
      icon: weather.data.current.humidity < 75 ? Raindrop : Raindrops,
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
      icon: (() => {
        switch (weather.data.current.uv) {
          case 0:
            return UV;
          case 1:
            return UV1;
          case 2:
            return UV2;
          case 3:
            return UV3;
          case 4:
            return UV4;
          case 5:
            return UV5;
          case 6:
            return UV6;
          case 7:
            return UV7;
          case 8:
            return UV8;
          case 9:
            return UV9;
          case 10:
            return UV10;
          default:
            return UV;
        }
      })(),
    },
  ];
};
