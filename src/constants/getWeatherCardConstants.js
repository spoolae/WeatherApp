export const getWeatherCardConstants = ({ weather }) => {
  const cityName = weather?.data?.location?.name || "Unknown City";
  const temperature = weather?.data?.current?.temp_c || "";
  const weatherCondition = weather?.data?.current?.condition?.text || "";
  const pressure = weather?.data?.current?.pressure_mb || "";
  const humidity = weather?.data?.current?.humidity || "";
  const windSpeed = weather?.data?.current?.wind_kph || "";

  return {
    cityName,
    temperature,
    weatherCondition,
    pressure,
    humidity,
    windSpeed,
  };
};
