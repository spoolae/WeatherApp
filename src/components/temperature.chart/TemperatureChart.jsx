import React from "react";
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

export const TemperatureChart = ({ weather }) => {
  const chartData = [
    {
      name: "Morning",
      t: weather.data.forecast.forecastday[0].hour[6].temp_c,
    },
    {
      name: "Afternoon",
      t: weather.data.forecast.forecastday[0].hour[13].temp_c,
    },
    {
      name: "Evening",
      t: weather.data.forecast.forecastday[0].hour[19].temp_c,
    },
    {
      name: "Night",
      t: weather.data.forecast.forecastday[0].hour[23].temp_c,
    },
  ];

  return (
    <ResponsiveContainer width="100%" height="60%">
      <LineChart width={400} height={150} data={chartData}>
        <Line
          type="monotone"
          dataKey="t"
          stroke="#5a81a3"
          strokeWidth={3}
          activeDot={{ strokeWidth: 0, r: 6 }}
          isAnimationActive={false}
        />
        <Tooltip />
        <XAxis
          tickLine={false}
          axisLine={false}
          dataKey="name"
          padding={{ left: 30, right: 15 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

TemperatureChart.propTypes = {
  weather: PropTypes.object,
};
