export const mapStateToProps = (state) => ({
  searchCities: state.searchCities,
  searchHistory: state.searchHistory,
  weather: state.weather,
  isDark: state.isDark,
});
