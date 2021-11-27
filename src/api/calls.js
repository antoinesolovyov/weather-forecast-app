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

    const date = new Date()
    localStorage.setItem(
      `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
      JSON.stringify({ timezone, forecast })
    )

    dispatch({ type: 'SET_TIMEZONE', payload: timezone })
    dispatch({ type: 'SET_FORECAST', payload: forecast })
  })
}

export function loadForecast (dispatch) {
  const date = new Date()
  const item = JSON.parse(localStorage.getItem(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`))
  dispatch({ type: 'SET_TIMEZONE', payload: item.timezone })
  dispatch({ type: 'SET_FORECAST', payload: item.forecast })
  console.log('!', localStorage.getItem(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`))
}
