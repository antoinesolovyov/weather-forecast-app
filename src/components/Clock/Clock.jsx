import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setDate } from 'actions/date-action'
import { formatTime, formatDate } from 'utils/formatters'
import { selectDate } from 'utils/selectors'
import './Clock.css'

export default function Clock () {
  const dispatch = useDispatch()
  const date = useSelector(selectDate)

  const tick = () => {
    const date = new Date()
    if (date.getSeconds() % 60 === 0)
      dispatch(setDate(date))
  }

  useEffect(() => {
    const timerID = setInterval(tick, 1000)
    return () => clearInterval(timerID)
  }, [])

  return (
    <div className="clock">
      <p>{formatTime(date)}</p>
      <p>{formatDate(date)}</p>
    </div>
  )
}
