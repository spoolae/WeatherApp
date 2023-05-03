import React from "react";
import { connect, useDispatch } from "react-redux";
import { PropTypes } from "prop-types";

import "./SearchDropDownListStyles.scss";
import { mapStateToProps } from "../../../utils/mapStateToProps";
import { fetchWeather } from "../../../redux/weatherSlice";
import { addCityToHistory } from "../../../redux/searchHistorySlice";
import { SearchDropDownItem } from "./SearchDropDownItem.jsx";

const SearchDropDownList = ({ searchCities, handleInputChange }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(fetchWeather(item.name));
    dispatch(addCityToHistory({ city: item.name }));
    handleInputChange("");
  };

  if (!searchCities.data.length) {
    return null;
  }
  return (
    <div className="search-drop-down-list">
      {searchCities.data.map((item) => (
        <SearchDropDownItem
          key={item.id}
          item={item}
          handleClick={handleClick}
        />
      ))}
    </div>
  );
};

SearchDropDownList.propTypes = {
  searchCities: PropTypes.object,
  handleInputChange: PropTypes.func,
};

const ConnectedDropDownList = connect(mapStateToProps)(SearchDropDownList);
export { ConnectedDropDownList as SearchDropDownList };
