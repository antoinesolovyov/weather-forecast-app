import React from 'react'
import PropTypes from 'prop-types'
import { getIconPath } from 'api/paths'
import { formatDayName } from 'utils/formatters'
import './WeatherForecast.css'

export const WeatherForecast = ({ forecast }) => {
  const firstHalf = [forecast[1], forecast[2], forecast[3]]
  const secondHalf = [forecast[4], forecast[5], forecast[6]]

  const renderDay = (day, dateName) => (
    <div key={dateName} className='weather-forecast_day'>
      <span>{dateName}</span>
      <img src={getIconPath(day?.weather[0])} alt={day?.weather[0].description} />
      <p>{day?.temp?.day.toFixed()}° / <span style={{ color: 'grey' }}>{day?.temp?.night.toFixed()}°</span></p>
    </div>
  )

  const renderHalf = (half, indent) => (
    <div className='weather-forecast_half'>
      {half.map((day, dayNum) => {
        const newDate = new Date()
        newDate.setDate(newDate.getDate() + dayNum + indent)
        const dateName = formatDayName(newDate)
        return renderDay(day, dateName)
      })}
    </div>
  )

  return (
    <div className='weather-forecast'>
      {renderHalf(firstHalf, 1)}
      {renderHalf(secondHalf, 4)}
    </div>
  )
}

WeatherForecast.propTypes = {
  forecast: PropTypes.array
}
