import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { forecastReducer } from './reducers/forecast-reducer'
import { dateReducer } from './reducers/date-reducer'

export const store = createStore(
  combineReducers({ forecastState: forecastReducer, dateState: dateReducer }),
  applyMiddleware(thunk)
)
