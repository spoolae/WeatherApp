import { combineReducers } from "redux";

import weatherSlice from "./weatherSlice.js";
import themeSlice from "./themeSlice.js";

export const rootReducer = combineReducers({
  weather: weatherSlice,
  isDark: themeSlice,
});
