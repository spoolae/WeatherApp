import React from "react";
import { connect, useDispatch } from "react-redux";
import { PropTypes } from "prop-types";

import "./DropDownListStyles.scss";
import { mapStateToProps } from "../../../constants/mapStateToProps";
import { fetchWeather } from "../../../redux/weatherSlice";
import { fetchCities } from "../../../redux/searchCitiesSlice";

const DropDownList = ({ searchCities }) => {
  const dispatch = useDispatch();

  const handleClick = (item) => {
    dispatch(fetchWeather(item.name));
    dispatch(fetchCities(""));
    //Здесь должно очищаться поле поиска.
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
};

const ConnectedDropDownList = connect(mapStateToProps)(DropDownList);
export { ConnectedDropDownList as DropDownList };
