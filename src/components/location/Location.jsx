import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchLocation } from 'api/calls'
import { selectLocation, selectPosition } from 'utils/selectors'
import './Location.css'

export default function Location () {
  const dispatch = useDispatch()
  const position = useSelector(selectPosition)
  const location = useSelector(selectLocation)

  useEffect(() => {
    dispatch(fetchLocation(position))
  }, [position])

  return (
    <div className="location">
      <p>{location?.split(' ')[2]}</p>
      <p>{location?.split(' ')[1]?.split(',')[0]}</p>
      <p>{location}</p>
    </div>
  )
}
