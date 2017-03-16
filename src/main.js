import React from 'react'
import ReactDOM from 'react-dom'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerMiddleware, routerReducer } from 'react-router-redux'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import Root from './routes'
import reducers from './reducers'
require('./style/_globals.scss')

const history = createBrowserHistory()
const logger = createLogger()
const store = createStore(
  combineReducers({
    ...reducers,
    router: routerReducer
  }),
  applyMiddleware(thunk, routerMiddleware(history), logger)
)

ReactDOM.render(
  <Provider store={store}>
    {Root(history)}
  </Provider>
  , document.querySelector('#container'))
