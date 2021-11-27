export const WEATHER_API = 'https://api.openweathermap.org/data/2.5/'
export const WEATHER_API_KEY = '7cd1581792cb7fa3710cd45312c6415e'

export const getIconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`
export const getForecastUrl = (lat, lon) => `${WEATHER_API}onecall?appid=${WEATHER_API_KEY}&lat=${lat}&lon=${lon}&units=metric`
