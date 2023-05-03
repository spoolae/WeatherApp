import React from "react";

import "./HeaderStyles.scss";
import { SearchInput } from "../search.input/SearchInput.jsx";
import { Moon, RotateCcw, Map } from "react-feather";
import { setDarkMode } from "../../redux/themeSlice";
import { connect, useDispatch } from "react-redux";
import { mapStateToProps } from "../../utils/mapStateToProps";
import { PropTypes } from "prop-types";
import { HistoryDropDownList } from "../history.dropdown.list/HistoryDropDownList.jsx";

const Header = ({ isDark }) => {
  const dispatch = useDispatch();

  const switchTheme = () => {
    isDark ? dispatch(setDarkMode(false)) : dispatch(setDarkMode(true));
  };
  return (
    <div className="header">
      <SearchInput />
      <div className="icons-container">
        <div>
          <RotateCcw className="icon" />
          <HistoryDropDownList />
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
