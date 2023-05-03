export const getWeekForecastData = ({ weather }) => {
  const forecastData = weather?.data?.forecast?.forecastday || [];

  return forecastData.map((item, i) => {
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
          day: "Tomorrow",
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
