import { getWeatherUrl, getGeocodeUrl, getReverseGeocodeUrl } from './urls'
import { getLocaleStorageItem, setLocaleStorageItem } from './localStorage'
import {
  setValue,
  fetchPositionBegin, fetchPositionSuccess, fetchPositionFailure,
  fetchLocationBegin, fetchLocationSuccess, fetchLocationFailure,
  fetchForecastBegin, fetchForecastSuccess, fetchForecastFailure
} from 'actions'

export const fetchForecast = (position) => async (dispatch) => {
  dispatch(fetchForecastBegin())

  try {
    const response = await fetch(getWeatherUrl(position))

    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json()
    const forecast = [json.current, ...json.daily]

    setLocaleStorageItem(new Date(), position, forecast)

    dispatch(fetchForecastSuccess(forecast))
  } catch (error) {
    dispatch(fetchForecastFailure(error))
  }
}

export const loadForecast = (position) => (dispatch) => {
  const forecast = getLocaleStorageItem(new Date(), position)

  dispatch(fetchForecastSuccess(forecast))
}

export const getPosition = async (dispatch) => {
  await navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords

    dispatch(fetchPositionSuccess({ latitude, longitude }))
  })
}

export const fetchLocation = (position) => async (dispatch, getState) => {
  const state = getState()
  dispatch(fetchLocationBegin())

  try {
    const response = await fetch(getReverseGeocodeUrl(position))

    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json()
    const results = json?.results.reverse()
    const location = results[1].formatted_address

    if (state.inputState.value === '') {
      dispatch(setValue(location.split(',')[0]))
    }

    dispatch(fetchLocationSuccess(location))
  } catch (error) {
    dispatch(fetchLocationFailure(error))
  }
}

export const fetchPostition = (location) => async (dispatch) => {
  dispatch(fetchPositionBegin())

  try {
    const response = await fetch(getGeocodeUrl(location))

    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json()
    const latitude = json?.results[0]?.geometry.location.lat
    const longitude = json?.results[0]?.geometry.location.lng

    dispatch(fetchPositionSuccess({ latitude, longitude }))
  } catch (error) {
    dispatch(fetchPositionFailure(error))
  }
}
