import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIconPath } from 'api/urls'
import { fetchForecast, loadForecast } from 'api/calls'
import { formatDayName } from 'utils/formatters'
import {
  selectDate, selectPosition,
  selectForecast, selectLoading
} from 'utils/selectors'
import './Forecast.css'

export default function Forecast () {
  const dispatch = useDispatch()
  const date = useSelector(selectDate)
  const position = useSelector(selectPosition)
  const forecast = useSelector(selectForecast)
  const loading = useSelector(selectLoading)

  useEffect(() => {
    console.log('Forecast use Effect')
    if (localStorage.getItem(`${position.latitude.toFixed(2)}:${position.longitude.toFixed(2)},${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`) === null) {
      dispatch(fetchForecast(position))
    } else {
      dispatch(loadForecast(position))
    }
  }, [date, position])

  const today = forecast[0]
  const firstHalf = [forecast[1], forecast[2], forecast[3]]
  const secondHalf = [forecast[4], forecast[5], forecast[6]]

  console.log(today)
  return (
    loading ? <p>!!!</p> :
    <main>
      <div className="weather-today">
        <img src={getIconPath(today)} alt={today?.description} />
        <div>
          <span>TODAY</span>
          <span>{today?.temp.day.toFixed()}°</span>
        </div>
      </div>
      <div className="weather-forecast">
        <div className="weather-forecast_half">
          {firstHalf.map((day, dayNum) => {
            const newDay = new Date()
            newDay.setDate(newDay.getDate() + dayNum + 1)
            return (
              <div key={dayNum} className="weather-forecast_day">
                <span>{formatDayName(newDay)}</span>
                <img src={getIconPath(day)} alt={day?.description} />
                <span>{day?.temp.day.toFixed()}°</span>
              </div>
          )})}
        </div>
        <div className="weather-forecast_half">
          {secondHalf.map((day, dayNum) => {
            const newDay = new Date()
            newDay.setDate(newDay.getDate() + dayNum + 4)
            return (
              <div key={dayNum} className="weather-forecast_day">
                <span>{formatDayName(newDay)}</span>
                <img src={getIconPath(day)} alt={day?.description} />
                <span>{day?.temp.day.toFixed()}°</span>
              </div>
          )})}
        </div>
      </div>
    </main>
  )
}
