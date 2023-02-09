export const getWeatherCardConstants = ({ weather }) => {
  return {
    cityName: weather.data.location.name,
    temperature: weather.data.current.temp_c,
    weatherCondition: weather.data.current.condition.text,
    pressure: weather.data.current.pressure_mb,
    humidity: weather.data.current.humidity,
    windSpeed: weather.data.current.wind_kph,
  };
};
