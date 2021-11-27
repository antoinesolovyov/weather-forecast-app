import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIconUrl } from 'api/urls'
import { fetchForecast } from 'api/calls'
import { formatDayName } from 'utils/formatters'
import { selectForecast, selectDate } from 'utils/selectors'
import './Forecast.css'

function Forecast () {
  const dispatch = useDispatch()
  const forecast = useSelector(selectForecast)
  const date = useSelector(selectDate)

  useEffect(() => {
    dispatch(fetchForecast)
  }, [date])

  return (
    <>
      <div className='forecast'>
        <div className='cards'>
          {forecast.map((day, dayNum) => (
            <div key={dayNum} className='card'>
              <p>{formatDayName(date.setDate(date.getDate() + 1) && date)}</p>
              <img src={getIconUrl(day.icon)} alt={day.description} />
              <span className='temperature'>{day.temp.day.toFixed()}°</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Forecast
