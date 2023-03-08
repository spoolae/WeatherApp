import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchCities = createAsyncThunk(
  "cities/fetchCities",
  async (searchQuery, { rejectWithValue }) => {
    try {
      const res = await fetch(
        `http://api.weatherapi.com/v1/search.json?key=c860d4d4f81745ebb4e223101232201&q=${searchQuery}`
      );
      const data = await res.json();
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const searchCitiesSlice = createSlice({
  name: "cities",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  extraReducers: {
    [fetchCities.pending]: (state) => {
      state.loading = true;
    },
    [fetchCities.fulfilled]: (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },
    [fetchCities.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export default searchCitiesSlice.reducer;
