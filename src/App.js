import React from 'react'
// import {createHashHistory} from 'history'
import {
  // BrowserRouter as Router,
  HashRouter,
} from 'react-router-dom'
import queryString from 'query-string'
// import { createLocation } from 'history'

import Header from './components/header'
import RouteComment from './routes'


// const hashHistory = createHashHistory()
// <HashRouter history={hashHistory}  >

// const location = createLocation()

const parsed = queryString.parse(window.location.search);
console.log(window.location);
console.log(parsed)

const App = () => (
  <HashRouter >
    <div>
      <Header />
      <RouteComment />
    </div>
  </HashRouter>
)

export default App