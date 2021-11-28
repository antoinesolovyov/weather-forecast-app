import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosition } from 'api/calls'
import { selectForecast } from 'utils/selectors'
import Clock from './components/Clock/Clock'
import Forecast from './components/Forecast/Forecast'
import './App.css'

const App = () => {
  const forecast = useSelector(selectForecast)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPosition)
  })

  return (
    <main style={forecast && forecast[0]?.main && {
      backgroundImage: `url(./condition-images/${forecast[0]?.main}.jpg)`,
      backgrounPosition: 'no-repeat',
      backgroundSize: 'cover'
    }}>
      <Clock />
      <Forecast />
    </main>
)}

export default App
