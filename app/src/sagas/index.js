/**
 * This is where we pull all the sagas together for easy store configuration.
 * Just import your sagas here and add them to the root saga. If you are familiar with the
 * redux-saga helpers and effects, feel free to use those as appropriate.
 * More info: https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
 */
import { call, all } from 'redux-saga/effects'
// import appSagas from './app-sagas'
import { fetchWatcher, fetchBatchWatcher } from 'src/fetch-routine'

export default function * rootSaga () {
  yield all([
    call(fetchWatcher),
    call(fetchBatchWatcher)
  ])
}
