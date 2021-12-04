import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { dateReducer } from './reducers/date-reducer'
import { inputReducer } from './reducers/input-reducer'
import { locationReducer } from './reducers/location-reducer'
import { positionReducer } from './reducers/position-reducer'
import { forecastReducer } from './reducers/forecast-reducer'

export const store = createStore(
  combineReducers({
    dateState: dateReducer,
    inputState: inputReducer,
    locationState: locationReducer,
    positionState: positionReducer,
    forecastState: forecastReducer
  }),
  applyMiddleware(thunk)
)
