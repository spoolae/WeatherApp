import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "isDark",
  initialState: false,
  reducers: {
    setDarkMode: (state, action) => {
      return action.payload;
    },
  },
});

export const { setDarkMode } = themeSlice.actions;

export default themeSlice.reducer;
