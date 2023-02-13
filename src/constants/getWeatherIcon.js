import ClearDay from "../assets/icons/weather-icons/clear-day.svg";
import ClearNight from "../assets/icons/weather-icons/clear-night.svg";
import PartlyCloudyDay from "../assets/icons/weather-icons/partly-cloudy-day.svg";
import PartlyCloudyNight from "../assets/icons/weather-icons/partly-cloudy-night.svg";
import FogDay from "../assets/icons/weather-icons/fog-day.svg";
import FogNight from "../assets/icons/weather-icons/fog-night.svg";
import Hail from "../assets/icons/weather-icons/hail.svg";
import HazeDay from "../assets/icons/weather-icons/haze-day.svg";
import HazeNight from "../assets/icons/weather-icons/haze-night.svg";
import OvercastDay from "../assets/icons/weather-icons/overcast-day.svg";
import OvercastNight from "../assets/icons/weather-icons/overcast-night.svg";
import Rain from "../assets/icons/weather-icons/rain.svg";
import Snow from "../assets/icons/weather-icons/snow.svg";
import Sleet from "../assets/icons/weather-icons/sleet.svg";
import Sunrise from "../assets/icons/weather-icons/sunrise.svg";
import Sunset from "../assets/icons/weather-icons/sunset.svg";
import Thunderstorms from "../assets/icons/weather-icons/thunderstorms.svg";

export const getWeatherIcon = (condition, isDay) => {
  if (isDay) {
    switch (condition) {
      case "clear":
        return ClearDay;
      case "sunny":
        return ClearDay;
      case "partly cloudy":
        return PartlyCloudyDay;
      case "fog":
        return FogDay;
      case "hail":
        return Hail;
      case "haze":
        return HazeDay;
      case "overcast":
        return OvercastDay;
      case "rain":
        return Rain;
      case "snow":
        return Snow;
      case "sleet":
        return Sleet;
      case "sunrise":
        return Sunrise;
      case "sunset":
        return Sunset;
      case "thunderstorms":
        return Thunderstorms;
      default:
        return ClearDay;
    }
  } else {
    switch (condition) {
      case "clear":
        return ClearNight;
      case "sunny":
        return ClearNight;
      case "partly cloudy":
        return PartlyCloudyNight;
      case "fog":
        return FogNight;
      case "hail":
        return Hail;
      case "haze":
        return HazeNight;
      case "overcast":
        return OvercastNight;
      case "rain":
        return Rain;
      case "snow":
        return Snow;
      case "sleet":
        return Sleet;
      case "sunrise":
        return Sunrise;
      case "sunset":
        return Sunset;
      case "thunderstorms":
        return Thunderstorms;
      default:
        return ClearNight;
    }
  }
};
