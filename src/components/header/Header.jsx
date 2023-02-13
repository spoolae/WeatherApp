import React from "react";

import "./HeaderStyles.scss";
import { SearchInput } from "../search.input/SearchInput.jsx";
import { Moon, RotateCcw, Map } from "react-feather";

export const Header = () => {
  return (
    <div className="header">
      <SearchInput />
      <div className="icons-container">
        <RotateCcw className="icon" />
        <Map className="icon" />
        <Moon className="icon" />
      </div>
    </div>
  );
};
