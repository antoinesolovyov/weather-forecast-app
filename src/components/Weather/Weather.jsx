import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchForecast, loadForecast } from 'api/calls'
import {
  selectDate, selectPosition,
  selectForecast, selectLoading
} from 'utils/selectors'

import WeatherToday from 'components/wether-today/WeatherToday'
import WeatherForecast from 'components/weather-forecast/WeatherForecast'
import './Weather.css'

export default function Weather () {
  const dispatch = useDispatch()
  const date = useSelector(selectDate)
  const position = useSelector(selectPosition)
  const forecast = useSelector(selectForecast)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    if (localStorage.getItem(`${position.latitude.toFixed(2)}:${position.longitude.toFixed(2)},${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`) === null) {
      dispatch(fetchForecast(position))
    } else {
      dispatch(loadForecast(position))
    }
  }, [date, position])

  return (
    loading ? <p>!!!</p> :
    <main>
      <WeatherToday forecast={forecast} />
      <WeatherForecast forecast={forecast} />
    </main>
  )
}
