import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIconUrl } from 'api/urls'
import { fetchForecast, loadForecast } from 'api/calls'
import { formatDayName } from 'utils/formatters'
import {
  selectDate,
  selectPosition,
  selectForecast,
  selectLoading
} from 'utils/selectors'
import './Forecast.css'

function Forecast () {
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

  return (
    <>
      {loading ?
        <p>loading</p> :
        <div className='forecast'>
          <div className='cards'>
            {forecast.map((day, dayNum) => {
              const newDay = new Date()
              newDay.setDate(newDay.getDate() + dayNum)
              return (
              <div key={dayNum} className='card'>
                <p>{formatDayName(newDay)}</p>
                <img src={getIconUrl(day.icon)} alt={day.description} />
                <span className='temperature'>{day.temp.day.toFixed()}°</span>
              </div>
            )})}
          </div>
        </div>
      }
    </>
  )
}

export default Forecast
