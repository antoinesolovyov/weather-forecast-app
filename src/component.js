import React from 'react'
import PropTypes from 'prop-types'

export const Component = (props) => {
  const { count, handleIncrementClick, handleDecrementClick } = props
  return (
    <div>
      <h1>Helloworld React & Redux! {count}</h1>
      <button onClick={handleDecrementClick}>Decrement</button>
      <button onClick={handleIncrementClick}>Increment</button>
    </div>
  )
}

Component.propTypes = {
  count: PropTypes.number,
  handleIncrementClick: PropTypes.func,
  handleDecrementClick: PropTypes.func
}
