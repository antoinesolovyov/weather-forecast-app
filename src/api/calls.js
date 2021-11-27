import { getForecastUrl } from './urls'

export async function fetchForecast (dispatch) {
  await navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const response = await fetch(getForecastUrl(lat, lon))
    const json = await response.json()

    const { timezone, daily } = json
    const forecast = []
    for (let i = 0; i < 7; i++) {
      forecast[i] = {
        ...daily[i].weather[0],
        temp: daily[i].temp
      }
    }

    dispatch({ type: 'SET_TIMEZONE', payload: timezone })
    dispatch({ type: 'SET_FORECAST', payload: forecast })
  })
}
