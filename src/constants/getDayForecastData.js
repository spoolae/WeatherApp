export const getDayForecastData = ({ weather }) => {
  return weather.data.forecast.forecastday[0].hour.map((item) => ({
    time: item.time.split(" ")[1],
    condition: item.condition.text.toLowerCase(),
    isDay: item.is_day,
    temperature: Math.round(item.temp_c),
  }));
};
