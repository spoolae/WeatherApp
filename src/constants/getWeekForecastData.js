export const getWeekForecastData = ({ weather }) => {
  return weather.data.forecast.forecastday.map((item, i) => {
    let day = new Date(item.date).toLocaleDateString("en-US", {
      weekday: "long",
    });
    let date = new Date(item.date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
    });
    switch (i) {
      case 0:
        return {
          day: "Today",
          date,
          condition: item.day.condition.text.toLowerCase(),
          temperature: Math.round(item.day.avgtemp_c),
        };
      case 1:
        return {
          day: "Tommorow",
          date,
          condition: item.day.condition.text.toLowerCase(),
          temperature: Math.round(item.day.avgtemp_c),
        };
      default:
        return {
          day,
          date,
          condition: item.day.condition.text.toLowerCase(),
          temperature: Math.round(item.day.avgtemp_c),
        };
    }
  });
};
