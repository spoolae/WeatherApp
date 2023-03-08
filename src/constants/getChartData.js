export const getChartData = ({ weather }) => {
  const hourlyData = weather?.data?.forecast?.forecastday[0]?.hour || [];
  const filteredData = hourlyData.filter((item, i) => (i - 2) % 3 === 0);

  return filteredData.map((item) => ({
    time: item.time?.split(" ")[1] || "",
    t: item.temp_c || "",
  }));
};
