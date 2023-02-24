import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { LineChart, Line, XAxis, Tooltip, ResponsiveContainer } from "recharts";

import "./TemperatureChartStyles.scss";
import { getChartData } from "../../constants/getChartData";
import { connect } from "react-redux";
import { mapStateToProps } from "../../constants/mapStateToProps";

const TemperatureChart = ({ weather, isDark }) => {
  const chartData = getChartData({ weather });
  const [primaryColor, setPrimaryColor] = useState(null);

  useEffect(() => {
    setPrimaryColor(
      isDark
        ? getComputedStyle(document.documentElement).getPropertyValue(
            "--light-grey-color"
          )
        : getComputedStyle(document.documentElement).getPropertyValue(
            "--chart-color"
          )
    );
    console.log(primaryColor);
  }, [isDark]);

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="time">{label}</p>
          <p className="value">{`Temperature is ${payload[0].value}°C`}</p>
        </div>
      );
    }

    return null;
  };

  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.number,
        unit: PropTypes.string,
      })
    ),
    label: PropTypes.string,
  };

  return (
    <ResponsiveContainer width="100%" height="60%">
      <LineChart width={400} height={150} data={chartData}>
        <Line
          type="natural"
          dataKey="t"
          stroke={primaryColor}
          strokeWidth={3}
          activeDot={{ strokeWidth: 0, r: 6 }}
          isAnimationActive={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <XAxis dataKey="time" hide />
      </LineChart>
    </ResponsiveContainer>
  );
};

TemperatureChart.propTypes = {
  weather: PropTypes.object,
  isDark: PropTypes.bool,
};

const ConnectedTemperatureChart = connect(mapStateToProps)(TemperatureChart);
export { ConnectedTemperatureChart as TemperatureChart };
