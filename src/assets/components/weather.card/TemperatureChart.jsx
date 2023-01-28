import React from "react";
import { LineChart, Line, XAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Morning",
    t: 15,
  },
  {
    name: "Afternoon",
    t: 14,
  },
  {
    name: "Evening",
    t: 16,
  },
  {
    name: "Night",
    t: 12,
  },
];

export const TemperatureChart = () => {
  return (
    <LineChart width={400} height={150} data={data}>
      <Line
        type="monotone"
        dataKey="t"
        stroke="#8884d8"
        strokeWidth={2}
        activeDot={{ r: 8 }}
      />
      <Tooltip />
      <XAxis
        tickLine={false}
        axisLine={false}
        dataKey="name"
        padding={{ left: 30, right: 30 }}
      />
    </LineChart>
  );
};
