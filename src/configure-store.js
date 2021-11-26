import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { dateReducer, forecastReducer } from './reducer'

export const store = createStore(combineReducers({ forecastReducer, dateReducer }), applyMiddleware(thunk))
