import React, { useState } from "react";
import { Search } from "react-feather";

import "./SearchInputStyles.scss";

export const SearchInput = () => {
  const [, setValid] = useState(false);

  return (
    <form className="search-input" onSubmit={(e) => e.preventDefault()}>
      <input
        type="search"
        placeholder="Search location"
        required
        title="Please enter a city"
        onFocus={() => setValid(true)}
        onBlur={() => setValid(false)}
      />
      <Search className="search-icon" />
    </form>
  );
};
