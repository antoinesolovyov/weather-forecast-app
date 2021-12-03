import React from 'react'
import Clock from 'components/clock/Clock'
import Location from 'components/location/Location'
import './Header.css'

export default function Header () {
  return (
    <header>
      <Clock />
      <Location />
    </header>
  )
}
