export const selectDate = (state) => {
  return state.dateState.date
}

export const selectForecast = (state) => {
  return state.forecastState.forecast
}

export const selectLoading = (state) => {
  return state.forecastState.loading
}

export const selectTimezone = (state) => {
  return state.forecastState.timezone
}

export const selectPosition = (state) => {
  return state.forecastState.position
}
