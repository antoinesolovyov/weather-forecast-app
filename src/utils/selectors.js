export const selectDate = (state) => {
  return state.dateState.date
}

export const selectForecast = (state) => {
  return state.forecastState.forecast
}

export const selectLocation = (state) => {
  return state.forecastState.location
}

export const selectLoading = (state) => {
  return state.forecastState.loading
}

export const selectPosition = (state) => {
  return state.forecastState.position
}
