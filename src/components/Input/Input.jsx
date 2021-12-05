import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchPostition } from 'api/calls'
import { setValue } from 'actions/input-actions'
import { selectValue } from 'utils/selectors'
import './Input.css'

export function Input () {
  const dispatch = useDispatch()
  const value = useSelector(selectValue)

  const submit = (event) => {
    event.preventDefault()
    dispatch(fetchPostition(value))
  }

  const change = (event) => {
    dispatch(setValue(event.target.value))
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
