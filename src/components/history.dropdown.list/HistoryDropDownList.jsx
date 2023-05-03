import React from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import "./HistoryDropDownListStyles.scss";
import { mapStateToProps } from "../../utils/mapStateToProps";
import { HistoryDropDownItem } from "./HistoryDropDownItem.jsx";
import { fetchWeather } from "../../redux/weatherSlice";
import { addCityToHistory } from "../../redux/searchHistorySlice";
import { fetchCities } from "../../redux/searchCitiesSlice";

const HistoryDropDownList = ({ searchHistory }) => {
  const dispatch = useDispatch();

  const handleInputChange = (value) => {
    dispatch(fetchCities(value));
  };

  const handleClick = (cityName) => {
    dispatch(fetchWeather(cityName));
    dispatch(addCityToHistory({ city: cityName }));
    handleInputChange("");
  };

  return (
    <div className="history-drop-down-list">
      {searchHistory.map((item) => (
        <HistoryDropDownItem
          key={item}
          cityName={item}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

HistoryDropDownList.propTypes = {
  searchHistory: PropTypes.arrayOf(PropTypes.string),
  handleInputChange: PropTypes.func,
};

const ConnectedDropDownList = connect(mapStateToProps)(HistoryDropDownList);
export { ConnectedDropDownList as HistoryDropDownList };
