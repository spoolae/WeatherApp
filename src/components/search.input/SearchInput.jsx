import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Search } from "react-feather";

import "./SearchInputStyles.scss";
import { fetchCities } from "../../redux/searchCitiesSlice";
import { DropDownList } from "./dropdown.list/DropDownList.jsx";

export const SearchInput = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setValid] = useState(false);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    dispatch(fetchCities(event.target.value));
  };

  return (
    <div>
      <form className="search-input" onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          placeholder="Search location"
          required
          title="Please enter a city"
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={() => setValid(true)}
          onBlur={() => setValid(false)}
        />
        <Search className="search-icon" />
      </form>
      <DropDownList />
    </div>
  );
};
