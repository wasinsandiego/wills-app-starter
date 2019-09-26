/**
 * This is where we pull all the api config factories together which fetch routines will ingest
 * and use.
 * Just import your file with proper call type and factories exported and add to the default
 * exported hash.
 */
import * as person from './person'

export default {
  person
}
