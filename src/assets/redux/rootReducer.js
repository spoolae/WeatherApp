import { combineReducers } from "redux";

import weatherSlice from "./weatherSlice.js";

export const rootReducer = combineReducers({
  weather: weatherSlice,
});
