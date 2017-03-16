import React from 'react'
import { Router, Route } from 'react-router'
// import {App} from './components'
import {App} from './finalComponents'

const Root = (history) => (
  <Router history={history}>
    <Route path='/' component={App} />
  </Router>
)

export default Root
