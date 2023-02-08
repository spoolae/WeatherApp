import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export const TemperatureChart = ({ weather }) => {
  const chartData = weather.data.forecast.forecastday[0].hour
    .filter((item, i) => (i - 2) % 3 === 0)
    .map((item) => ({
      time: item.time.split(" ")[1],
      t: item.temp_c,
    }));

  return (
    <ResponsiveContainer width="100%" height="60%">
      <LineChart width={400} height={150} data={chartData}>
        <Line
          type="natural"
          dataKey="t"
          stroke="#5a81a3"
          strokeWidth={3}
          activeDot={{ strokeWidth: 0, r: 6 }}
          isAnimationActive={false}
        />
        <Tooltip />
        <XAxis dataKey="time" hide />
      </LineChart>
    </ResponsiveContainer>
  );
};

TemperatureChart.propTypes = {
  weather: PropTypes.object,
};
