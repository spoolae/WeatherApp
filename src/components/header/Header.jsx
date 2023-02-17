import React from "react";

import "./HeaderStyles.scss";
import { SearchInput } from "../search.input/SearchInput.jsx";
import { Moon, RotateCcw, Map } from "react-feather";

export const Header = () => {
  return (
    <div className="header">
      <SearchInput />
      <div className="icons-container">
        <div>
          <RotateCcw className="icon" />
        </div>
        <div>
          <Map className="icon" />
        </div>
        <div>
          <Moon className="icon" />
        </div>
      </div>
    </div>
  );
};
