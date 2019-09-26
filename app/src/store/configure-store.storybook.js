/**
 * A version of the store configured for the storybook. This is primarily so we dont run into
 * issues with the Link and ImmutableLink components from `redux-little-router`. In general we
 * shouldn't need to create stories for our connected components. Stories are intended for
 * composable presentational components.
 */
import Immutable, { fromJS } from 'immutable'
import { createStore, applyMiddleware, compose } from 'redux'
import { combineReducers } from 'redux-immutable'
import { initializeCurrentLocation } from 'redux-little-router'
import { immutableRouterForBrowser } from 'redux-little-router/es/immutable'
import routes from 'src/routes'

const { reducer, enhancer, middleware } = immutableRouterForBrowser({ routes })
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancersComposed = composeEnhancers(
  enhancer,
  applyMiddleware(
    middleware
  )
)

const initialState = window.__INITIAL_STATE ? fromJS(window.__INITIAL_STATE) : Immutable.Map()

const configureStore = () => {
  const rootReducer = combineReducers({
  //   ...reducers,
    router: reducer
  })

  const store = createStore(rootReducer, initialState, enhancersComposed)

  store.initLocation = () => {
    const initialLocation = store.getState().get('router')
    if (initialLocation) store.dispatch(initializeCurrentLocation(initialLocation))
  }
  // store.runSaga = sagaMiddleware.run
  // store.close = () => store.dispatch(END)

  return store
}

export default configureStore
