import { createSlice } from "@reduxjs/toolkit";

const MAX_HISTORY_LENGTH = 5;

const searchHistorySlice = createSlice({
  name: "searchHistory",
  initialState: [],
  reducers: {
    addCityToHistory: (state, action) => {
      const { city } = action.payload;

      const existingCityIndex = state.findIndex((item) => item === city);

      if (existingCityIndex !== -1) {
        state.splice(existingCityIndex, 1);
      }

      state.unshift(city);

      if (state.length > MAX_HISTORY_LENGTH) {
        state.pop();
      }
    },
    clearHistory: (state) => {
      state.splice(0);
    },
    removeCityFromHistory: (state, action) => {
      const { city } = action.payload;
      const index = state.findIndex((item) => item === city);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addCityToHistory, clearHistory, removeCityFromHistory } =
  searchHistorySlice.actions;

export default searchHistorySlice.reducer;
