import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatTime, formatDate } from 'utils/formatters'
import { selectDate, selectLocation, selectPosition } from 'utils/selectors'
import { fetchLocation } from 'api/calls'
import './Clock.css'

export default function Clock () {
  const dispatch = useDispatch()
  const date = useSelector(selectDate)
  const position = useSelector(selectPosition)
  const location = useSelector(selectLocation)

  const tick = () => {
    const date = new Date()
    if (date.getSeconds() % 60 === 0)
      dispatch({ type: 'SET_DATE', payload: date })
  }

  useEffect(() => {
    console.log('Clock use Effect')
    const timerID = setInterval(tick, 1000)

    dispatch(fetchLocation(position))

    return () => clearInterval(timerID)
  }, [position])

  return (
    <header>
      <div className="clock">
        <p>{formatTime(date)}</p>
        <p>{formatDate(date)}</p>
      </div>
      <div className="location">
        <p>{location?.split(' ')[2]}</p>
        <p>{location?.split(' ')[1]?.split(',')[0]}</p>
        <p>{location}</p>
      </div>
    </header>
  )
}
