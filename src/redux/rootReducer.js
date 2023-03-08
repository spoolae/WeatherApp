import { combineReducers } from "redux";

import searchCitiesSlice from "./searchCitiesSlice.js";
import weatherSlice from "./weatherSlice.js";
import themeSlice from "./themeSlice.js";

export const rootReducer = combineReducers({
  searchCities: searchCitiesSlice,
  weather: weatherSlice,
  isDark: themeSlice,
});
