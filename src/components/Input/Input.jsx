import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchPostition } from 'api/calls'
import './Input.css'

export default function Input () {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()

  const submit = (event) => {
    event.preventDefault()
    dispatch(fetchPostition(value))
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
