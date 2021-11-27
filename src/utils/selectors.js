export const selectDate = (state) => {
  return state.dateState.date
}

export const selectForecast = (state) => {
  return state.forecastState.forecast
}

export const selectTimezone = (state) => {
  return state.forecastState.timezone
}
