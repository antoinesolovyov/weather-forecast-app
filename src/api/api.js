export const WEATHER_API = 'https://api.openweathermap.org/data/2.5/'
export const WEATHER_API_KEY = '7cd1581792cb7fa3710cd45312c6415e'

export const fetchWeatherForecast = (lat, lon) =>
  fetch(`${WEATHER_API}onecall?appid=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}&units=metric`)
export const getIconSrc = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`

export async function fetchForecast (dispatch) {
  await navigator.geolocation.getCurrentPosition(async (position) => {
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const response = await fetchWeatherForecast(lat, lon)
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
