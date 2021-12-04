import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchForecast, loadForecast } from 'api/calls'
import { isLocalStorageHasKey } from 'api/localStorage'
import WeatherToday from 'components/wether-today/WeatherToday'
import WeatherForecast from 'components/weather-forecast/WeatherForecast'
import {
  selectDate, selectPosition,
  selectForecast, selectLoading
} from 'utils/selectors'
import './Weather.css'

export default function Weather () {
  const dispatch = useDispatch()
  const date = useSelector(selectDate)
  const position = useSelector(selectPosition)
  const forecast = useSelector(selectForecast)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    if (isLocalStorageHasKey(date, position)) {
      dispatch(loadForecast(position))
    } else {
      dispatch(fetchForecast(position))
    }
  }, [date, position])

  return (
    <main>
      {loading ? <p>!!!</p> :
        <>
          <WeatherToday forecast={forecast} />
          <WeatherForecast forecast={forecast} />
        </>
      }
    </main>
  )
}
