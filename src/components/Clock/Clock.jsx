import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatTime, formatDate } from 'utils/formatters'
import { selectDate, selectTimezone } from 'utils/selectors'
import './Clock.css'

export default function Clock () {
  const dispatch = useDispatch()
  const date = useSelector(selectDate)
  const timezone = useSelector(selectTimezone)

  const tick = () => {
    const date = new Date()
    if (date.getSeconds() % 60 === 0)
      dispatch({ type: 'SET_DATE', payload: date })
  }

  useEffect(() => {
    console.log('Clock use Effect')
    const timerID = setInterval(tick, 1000)

    return () => clearInterval(timerID)
  }, [])

  return (
    <header>
      <div className="clock">
        <p>{formatTime(date)}</p>
        <p>{formatDate(date)}</p>
      </div>
      <div className="location">
        <p>{timezone.split('/')[0]}</p>
        <p>{timezone.split('/')[1]}</p>
      </div>
    </header>
  )
}
