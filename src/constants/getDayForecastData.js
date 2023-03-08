export const getDayForecastData = ({ weather }) => {
  const hourlyForecastData =
    weather?.data?.forecast?.forecastday[0]?.hour || [];

  return hourlyForecastData.map((item) => ({
    time: item.time?.split(" ")[1] || "",
    condition: item.condition?.text?.toLowerCase() || "",
    isDay: item.is_day || false,
    temperature: Math.round(item.temp_c) || 0,
  }));
};
