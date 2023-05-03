import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import PropTypes from "prop-types";

import "./HeaderStyles.scss";
import { SearchInput } from "../search.input/SearchInput.jsx";
import { Moon, RotateCcw, Map } from "react-feather";
import { setDarkMode } from "../../redux/themeSlice";
import { mapStateToProps } from "../../utils/mapStateToProps";
import { HistoryDropDownList } from "../history.dropdown.list/HistoryDropDownList.jsx";

const Header = ({ isDark }) => {
  const dispatch = useDispatch();
  const [showHistory, setShowHistory] = useState(false);

  const switchTheme = () => {
    isDark ? dispatch(setDarkMode(false)) : dispatch(setDarkMode(true));
  };

  const toggleHistory = () => {
    setShowHistory((prevState) => !prevState);
  };

  return (
    <div className="header">
      <SearchInput />
      <div className="icons-container">
        <div onClick={toggleHistory}>
          <RotateCcw className="icon" />
          {showHistory && <HistoryDropDownList toggleHistory={toggleHistory} />}
        </div>
        <div>
          <Map className="icon" />
        </div>
        <div onClick={switchTheme}>
          <Moon className="icon" />
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isDark: PropTypes.bool,
};

const ConnectedHeader = connect(mapStateToProps)(Header);
export { ConnectedHeader as Header };
