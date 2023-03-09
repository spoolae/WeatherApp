import React from "react";
import { connect, useDispatch } from "react-redux";
import { PropTypes } from "prop-types";

import "./DropDownListStyles.scss";
import { mapStateToProps } from "../../../constants/mapStateToProps";
import { fetchWeather } from "../../../redux/weatherSlice";

const DropDownList = ({ searchCities, handleInputChange }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(fetchWeather(item.name));
    handleInputChange("");
  };

  if (!searchCities.data.length) {
    return null;
  }
  return (
    <div className="drop-down-list">
      {searchCities.data.map((item) => (
        <p
          key={item.id}
          onClick={() => handleClick(item)}
        >{`${item.name}, ${item.country}`}</p>
      ))}
    </div>
  );
};

DropDownList.propTypes = {
  searchCities: PropTypes.object,
  handleInputChange: PropTypes.function,
};

const ConnectedDropDownList = connect(mapStateToProps)(DropDownList);
export { ConnectedDropDownList as DropDownList };
