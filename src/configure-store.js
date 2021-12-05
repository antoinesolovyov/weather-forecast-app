import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import {
  dateReducer, inputReducer,
  positionReducer, locationReducer,
  forecastReducer
} from 'reducers'

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
