import { getForecastUrl } from './urls'
import {
  fetchForecastBegin,
  fetchForecastSuccess,
  fetchForecastFailure,
  setCurrentPosition,
  setTimezone
} from '../actions/forecast-actions'

export async function getPosition (dispatch) {
  await navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords

    dispatch(setCurrentPosition({ latitude, longitude }))
  })
}

export const fetchForecast = ({ latitude, longitude }) => async (dispatch) => {
  dispatch(fetchForecastBegin())

  try {
    const response = await fetch(getForecastUrl(latitude, longitude))

    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json()

    const { timezone, daily } = json
    const forecast = []
    for (let i = 0; i < 7; i++) {
      forecast[i] = {
        ...daily[i].weather[0],
        temp: daily[i].temp
      }
    }

    const date = new Date()
    localStorage.setItem(
      `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
      JSON.stringify({ timezone, forecast })
    )

    dispatch(setTimezone(timezone))
    dispatch(fetchForecastSuccess(forecast))
  } catch (error) {
    dispatch(fetchForecastFailure(error))
  }
}

export function loadForecast (dispatch) {
  const date = new Date()
  const item = JSON.parse(localStorage.getItem(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`))

  dispatch(setTimezone(item.timezone))
  dispatch(fetchForecastSuccess(item.forecast))
}
