export const getChartData = ({ weather }) => {
  return weather.data.forecast.forecastday[0].hour
    .filter((item, i) => (i - 2) % 3 === 0)
    .map((item) => ({
      time: item.time.split(" ")[1],
      t: item.temp_c,
    }));
};
