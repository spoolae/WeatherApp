import React from "react";
import PropTypes from "prop-types";

export const HistoryDropDownItem = ({
  cityName,
  handleClick,
  //   handleDelete,
}) => {
  return <p onClick={() => handleClick(cityName)}>{cityName}</p>;
};

HistoryDropDownItem.propTypes = {
  cityName: PropTypes.string,
  handleClick: PropTypes.func,
  handleDelete: PropTypes.func,
};
