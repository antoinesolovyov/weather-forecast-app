export const WEATHER_API = 'https://api.openweathermap.org/data/2.5/'
export const WEATHER_API_KEY = '7cd1581792cb7fa3710cd45312c6415e'

export const GEOCODE_API = 'https://maps.googleapis.com/maps/api/geocode/'
export const GEOCOE_API_KEY = 'AIzaSyDt-koV9hJiZZBL_CguOs81KnGpwPjZo3c'

export const getIconPath = (day) => `./condition-icons/${day?.main.toLowerCase()}.svg`
export const getWeatherUrl = (lat, lon) => `${WEATHER_API}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
export const getGeocodeUrl = (location) => `${GEOCODE_API}json?address=${location}&key=${GEOCOE_API_KEY}`
export const getReverseGeocodeUrl = (lat, lon) => `${GEOCODE_API}json?latlng=${lat},${lon}&key=${GEOCOE_API_KEY}`
export const getWeatherLocationUrl = (location) => `${WEATHER_API}onecall?q=${location}&units=metric&appid=${WEATHER_API_KEY}`
