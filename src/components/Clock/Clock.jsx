import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { formatTime, formatAMPM, formatDate } from './formatter'
import './Clock.css'

const selectDate = (state) => {
  return state.dateReducer.date
}

function Clock () {
  const dispatch = useDispatch()
  const date = useSelector((state) => selectDate(state))

  const tick = () => {
    dispatch({ type: 'SET_DATE', payload: new Date() })
  }

  useEffect(() => {
    const timerID = setInterval(tick, 60 * 1000)

    return () => clearInterval(timerID)
  }, [])

  return (
    <header>
      <div className='clock'>
        <span className='time'>{formatTime(date)}</span> <span>{formatAMPM(date)}</span>
        <p className='date'>{formatDate(date)}</p>
      </div>
      <div className='location'><span>Europe</span><span>Minsk</span></div>
    </header>
  )
}

export default Clock
