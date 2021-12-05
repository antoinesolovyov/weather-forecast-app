import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImagePath } from 'api/paths'
import { getPosition } from 'api/calls'
import { selectForecast } from 'utils/selectors'
import { Header, Input, Weather } from 'components'
import './App.css'

const App = () => {
  const dispatch = useDispatch()
  const forecast = useSelector(selectForecast)

  useEffect(() => {
    dispatch(getPosition)
  }, [])

  const style = forecast && forecast[0]?.weather[0]?.main && {
    backgroundImage: `url(${getImagePath(forecast[0])})`,
  }

  return (
    <div className='wrapper' style={style}>
      <Header />
      <Input />
      <Weather />
    </div>
)}

export default App
