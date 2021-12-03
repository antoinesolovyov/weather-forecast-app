import React from 'react'
import { getIconPath } from 'api/urls'
import { formatDayName } from 'utils/formatters'
import './WeatherForecast.css'

export default function WeatherForecast ({ forecast }) {
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
    <div className="weather-forecast">
      {renderHalf(firstHalf, 1)}
      {renderHalf(secondHalf, 4)}
    </div>
  )
}
