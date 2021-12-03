export const selectDate = (state) => {
  return state.dateState.date
}

export const selectForecast = (state) => {
  return state.forecastState.forecast
}

export const selectLoading = (state) => {
  return state.forecastState.loading
}

export const selectLocation = (state) => {
  return state.locationState.location
}

export const selectPosition = (state) => {
  return state.positionState.position
}
