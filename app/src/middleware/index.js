/**
 * This is where we pull all the redux middleware together for easy store configuration.
 * Middleware that is specific to a feature should live in that feature directory. Just import
 * your middleware functions here and add them to the default array export.
 */

import logger from './logger'

export default [
  logger
]
