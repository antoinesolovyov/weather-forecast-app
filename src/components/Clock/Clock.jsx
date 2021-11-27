import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatTime, formatAMPM, formatDate } from 'utils/formatters'
import { selectDate, selectTimezone } from 'utils/selectors'
import './Clock.css'

function Clock () {
  const dispatch = useDispatch()
  const date = useSelector(selectDate)
  const timezone = useSelector(selectTimezone)

  const tick = () => {
    const date = new Date()
    if (date.getSeconds() % 60 === 0)
      dispatch({ type: 'SET_DATE', payload: date })
  }

  useEffect(() => {
    const timerID = setInterval(tick, 1000)

    return () => clearInterval(timerID)
  }, [])

  return (
    <header>
      <div className='clock'>
        <span className='time'>{formatTime(date)}</span> <span>{formatAMPM(date)}</span>
        <p className='date'>{formatDate(date)}</p>
      </div>
      <div className='location'><span>{timezone.split('/')[0]}</span><span>{timezone.split('/')[1]}</span></div>
    </header>
  )
}

export default Clock
