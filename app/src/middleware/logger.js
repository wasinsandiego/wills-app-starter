/**
 * THIS IS FOR EXAMPLE PURPOSES ONLY
 */
const logger = store => next => action => {
  let result = next(action)
  console.groupCollapsed('dispatching --> ', action.type)
  console.log('action: ', action)
  console.log('store: ', store.getState())
  console.groupEnd()
  return result
}

export default logger
