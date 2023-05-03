import { combineReducers } from "redux";

import searchCitiesSlice from "./searchCitiesSlice.js";
import weatherSlice from "./weatherSlice.js";
import themeSlice from "./themeSlice.js";
import searchHistorySlice from "./searchHistorySlice.js";

export const rootReducer = combineReducers({
  searchCities: searchCitiesSlice,
  searchHistory: searchHistorySlice,
  weather: weatherSlice,
  isDark: themeSlice,
});
