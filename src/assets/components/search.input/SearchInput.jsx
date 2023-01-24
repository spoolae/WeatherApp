import React, { useState } from "react";
import { Search } from "react-feather";

import "./SearchInputStyles.scss";

export const SearchInput = () => {
  const [searchQuery, setsearchQuery] = useState("");

  const handleChange = (event) => {
    setsearchQuery(event.target.value);
  };

  return (
    <div className="search-input">
      <Search className="search-icon" size={16} />
      <input
        type="text"
        placeholder="Search location here"
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};
