import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { forecastReducer } from './reducers/forecast-reducer'
import { locationReducer } from './reducers/location-reducer'
import { positionReducer } from './reducers/position-reducer'
import { dateReducer } from './reducers/date-reducer'

export const store = createStore(
  combineReducers({
    forecastState: forecastReducer,
    locationState: locationReducer,
    positionState: positionReducer,
    dateState: dateReducer
  }),
  applyMiddleware(thunk)
)
