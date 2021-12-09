import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchForecast, loadForecast } from 'api/calls'
import { isLocalStorageHasKey } from 'api/localStorage'
import { WeatherToday, WeatherForecast } from 'components'
import {
  selectDate, selectPosition,
  selectForecast, selectLoading
} from 'utils/selectors'
import './Weather.css'

export const Weather = () => {
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
      {loading ? <p>Loading...</p> :
        <>
          <WeatherToday forecast={forecast} />
          <WeatherForecast forecast={forecast} />
        </>
      }
    </main>
  )
}
