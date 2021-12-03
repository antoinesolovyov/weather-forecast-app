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
    if (localStorage.getItem(`${position.latitude.toFixed(2)}:${position.longitude.toFixed(2)},${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`) === null) {
      dispatch(fetchForecast(position))
    } else {
      dispatch(loadForecast(position))
    }
  }, [date, position])

  const today = forecast[0]
  const firstHalf = [forecast[1], forecast[2], forecast[3]]
  const secondHalf = [forecast[4], forecast[5], forecast[6]]

  const renderHalf = (half, indent) => (
    <div className="weather-forecast_half">
      {half.map((day, dayNum) => {
        const newDay = new Date()
        newDay.setDate(newDay.getDate() + dayNum + indent)
        return (
          <div key={dayNum} className="weather-forecast_day">
            <span>{formatDayName(newDay)}</span>
            <img src={getIconPath(day?.weather[0])} alt={day?.weather[0].description} />
            <p>{day?.temp?.day.toFixed()}° / <span style={{color: 'grey'}}>{day?.temp?.night.toFixed()}°</span></p>
          </div>
      )})}
    </div>
  )

  return (
    loading ? <p>!!!</p> :
    <main>
      <div className="weather-today">
        <img src={getIconPath(today?.weather[0])} alt={today?.weather[0].description} />
        <div>
          <span>TODAY</span>
          <span>{today?.temp.toFixed()}°</span>
        </div>
      </div>
      <div className="weather-forecast">
        {renderHalf(firstHalf, 1)}
        {renderHalf(secondHalf, 4)}
      </div>
    </main>
  )
}
