import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLocation } from 'utils/selectors'
import { fetchLocationSuccess } from '../../actions/forecast-actions'
import './Input.css'

export default function Input () {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const location = useSelector(selectLocation)

  useEffect(() => {
    setValue(location?.split(' ')[1]?.split(',')[0])
  }, [location])

  const submit = (event) => {
    event.preventDefault()
    dispatch(fetchLocationSuccess(value))
  }

  const change = (event) => {
    setValue(event.target.value)
  }

  return (
    <form onSubmit={submit}>
      <input
        type="text"
        value={value}
        onChange={change}
        placeholder="Input the city name"
      />
    </form>
  )
}
