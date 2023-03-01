import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (cityName, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=c860d4d4f81745ebb4e223101232201&q=${cityName}&days=7`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchWeather.pending]: (state) => {
      state.loading = true;
    },
    [fetchWeather.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchWeather.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default weatherSlice.reducer;
