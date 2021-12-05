const WEATHER_API = 'https://api.openweathermap.org/data/2.5/'
const WEATHER_API_KEY = '7cd1581792cb7fa3710cd45312c6415e'

const GEOCODE_API = 'https://maps.googleapis.com/maps/api/geocode/'
const GEOCOE_API_KEY = 'AIzaSyDt-koV9hJiZZBL_CguOs81KnGpwPjZo3c'

export const getWeatherUrl = ({ latitude, longitude }) =>
  `${WEATHER_API}onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`

export const getGeocodeUrl = (location) =>
  `${GEOCODE_API}json?address=${location}&key=${GEOCOE_API_KEY}`

export const getReverseGeocodeUrl = ({ latitude, longitude }) =>
  `${GEOCODE_API}json?latlng=${latitude},${longitude}&key=${GEOCOE_API_KEY}`
