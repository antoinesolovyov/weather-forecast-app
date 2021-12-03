import React from 'react'
import { getIconPath } from 'api/urls'
import './WeatherToday.css'

export default function WeatherToday ({ forecast }) {
  const today = forecast[0]

  return (
    <div className="weather-today">
      <img src={getIconPath(today?.weather[0])} alt={today?.weather[0].description} />
      <div>
        <span>TODAY</span>
        <span>{today?.temp.toFixed()}°</span>
      </div>
    </div>
  )
}
