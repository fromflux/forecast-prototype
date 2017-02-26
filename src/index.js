import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import reducer from './reducers'

import App from './containers/App'
import NotFound from './components/NotFound'
import Home from './containers/Home'
import Location from './containers/Location'

const middlewares = [thunkMiddleware]

if (process.env.NODE_ENV !== 'production') {
  const createLogger = require('redux-logger')
  const logger = createLogger()
  middlewares.push(logger)
}

const store = createStore(
  combineReducers({
    reducer,
    routing: routerReducer
  }),
  applyMiddleware(
    ...middlewares
  )
)

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="location" component={Location} />
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
)