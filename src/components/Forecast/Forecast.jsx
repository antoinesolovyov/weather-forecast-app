import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIconUrl } from 'api/urls'
import { fetchForecast, loadForecast } from 'api/calls'
import { formatDayName } from 'utils/formatters'
import { selectForecast, selectDate } from 'utils/selectors'
import './Forecast.css'

function Forecast () {
  const dispatch = useDispatch()
  const forecast = useSelector(selectForecast)
  const date = useSelector(selectDate)

  useEffect(() => {
    if (localStorage.getItem(`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`) === null) {
      dispatch(fetchForecast)
    } else {
      dispatch(loadForecast)
    }
  }, [date])

  return (
    <>
      <div className='forecast'>
        <div className='cards'>
          {forecast.map((day, dayNum) => (
            <div key={dayNum} className='card'>
              <p>{formatDayName(date)}</p>
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
