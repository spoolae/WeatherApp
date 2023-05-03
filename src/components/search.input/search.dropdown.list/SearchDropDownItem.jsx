import React from "react";
import { PropTypes } from "prop-types";

export const SearchDropDownItem = ({ item, handleClick }) => {
  return (
    <p key={item.id} onClick={() => handleClick(item)}>
      {`${item.name}, ${item.country}`}
    </p>
  );
};

SearchDropDownItem.propTypes = {
  item: PropTypes.object,
  handleClick: PropTypes.func,
};
