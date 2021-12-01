import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosition } from 'api/calls'
import { selectForecast } from 'utils/selectors'
import Clock from './components/Clock/Clock'
import Input from './components/Input/Input'
import Forecast from './components/Forecast/Forecast'
import './App.css'

const App = () => {
  const forecast = useSelector(selectForecast)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('App use Effect')
    dispatch(getPosition)
  }, [])

  return (
    <div style={forecast && forecast[0]?.main && {
      backgroundImage: `url(./condition-images/${forecast[0]?.main}.jpg)`,
      backgrounPosition: 'no-repeat',
      backgroundSize: 'cover',

      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      width: '100%',
      height: '100%'
    }}>
      <Clock />
      <Input />
      <Forecast />
    </div>
)}

export default App
