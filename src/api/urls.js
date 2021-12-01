export const WEATHER_API = 'https://api.openweathermap.org/data/2.5/'
export const WEATHER_API_KEY = ''

export const GEOCODE_API = 'https://maps.googleapis.com/maps/api/geocode/'
export const GEOCOE_API_KEY = ''

export const getIconPath = (day) => `./condition-icons/${day?.main.toLowerCase()}.svg`
export const getWeatherUrl = (lat, lon) => `${WEATHER_API}onecall?lat=${lat}&lon=${lon}&units=metric&appid=${WEATHER_API_KEY}`
export const getGeocodeUrl = (lat, lon) => `${GEOCODE_API}json?latlng=${lat},${lon}&result_type=country&key=${GEOCOE_API_KEY}`
export const getWeatherLocationUrl = (location) => `${WEATHER_API}onecall?q=${location}&units=metric&appid=${WEATHER_API_KEY}`
