import React from "react";
import "reset-css";

import "./DateComponentStyles.scss";

export const DateComponent = () => {
  const today = new Date();
  const monthLong = today.toLocaleString("en-US", { month: "long" });
  const monthShort = today.toLocaleString("en-US", { month: "short" });
  const year = today.getFullYear();
  const day = today.toLocaleString("en-US", { weekday: "long" });
  const date = today.toLocaleString("en-US", { day: "numeric" });
  return (
    <div className="date-component">
      <h2>
        {monthLong} {year}
      </h2>
      <p>
        {day}, {date} {monthShort}, {year}
      </p>
    </div>
  );
};
