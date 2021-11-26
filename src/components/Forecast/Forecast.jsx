import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getIconSrc, fetchForecast } from 'api/api'
import { formatDayName } from 'components/Clock/formatter'
import './Forecast.css'

const selectForecast = (state) => {
  return state.forecastReducer.forecast
}

const selectTimezone = (state) => {
  return state.forecastReducer.timezone
}

const selectDate = (state) => {
  return state.dateReducer.date
}

function Forecast () {
  const dispatch = useDispatch()
  const forecast = useSelector((state) => selectForecast(state))
  const timezone = useSelector((state) => selectTimezone(state))
  const date = useSelector((state) => selectDate(state))

  useEffect(() => {
    dispatch(fetchForecast)
  }, [])

  console.log(forecast)

  return (
    <>
      <h2>{timezone}</h2>
      <div className='forecast'>
        <div className='cards'>
          {forecast?.map((day, dayNum) => (
            <div key={dayNum} className='card'>
              <p>{formatDayName(date.setDate(date.getDate() + 1) && date)}</p>
              <img src={getIconSrc(day.icon)} alt={day.description} />
              <span className='temperature'>{day.temp.day.toFixed()}°</span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    // dispatching plain actions
    increment: () => dispatch({ type: 'INCREMENT' }),
    decrement: () => dispatch({ type: 'DECREMENT' }),
    reset: () => dispatch({ type: 'RESET' }),
  }
}

export default Forecast
