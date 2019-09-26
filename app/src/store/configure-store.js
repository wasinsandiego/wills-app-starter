import Immutable, { fromJS } from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import createSagaMiddleware, { END } from 'redux-saga'
import Raven from 'raven-js'
import createRavenMiddleware from 'raven-for-redux'
import * as reducers from 'src/reducers'
import customMiddleware from 'src/middleware'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware({
  onError: error => {
    // good place to put last resort error reporting
    console.error('Caught a saga error --> ', error)
  }
})

const enhancersComposed = composeEnhancers(
  applyMiddleware(
    ...customMiddleware,
    sagaMiddleware,
    createRavenMiddleware(Raven)
  )
)

const initialState = window.__INITIAL_STATE ? fromJS(window.__INITIAL_STATE) : Immutable.Map()

const configureStore = () => {
  const rootReducer = combineReducers({
    ...reducers
  })

  const store = createStore(rootReducer, initialState, enhancersComposed)
  store.runSaga = sagaMiddleware.run
  store.close = () => store.dispatch(END)

  return store
}

export default configureStore
