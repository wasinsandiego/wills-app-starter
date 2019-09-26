import Immutable from 'immutable'
import { curry } from 'lodash/fp'

/**
 * Flattens an array of objects keyed by id
 * @param  {Array}  data  An array of objects with `id` keys
 * @return {Object}       Object with `id` keys and object values
 */
export const flatten = curry((idKey, data) => {
  if (!data || !Array.isArray(data)) {
    throw new Error(`flatten requires an array, you gave me this:\n${JSON.stringify(data, null, '  ')}`)
  }
  return data.reduce((result, item) => ({
    ...result,
    [item[idKey]]: item
  }), {})
})

/**
 * Iterates over the array of entities from the graphql response to construct an ordered Immutable List of ids.
 * @param  {Array}  entities The entities from the response
 * @return {List}            An Immutable List of ids
 */
const getEntityIds = entities => Immutable.List(entities ? entities.map(item => item.id) : {})

/**
 * Factory that returns a function for mapping graphql results (response) to the component props.
 * @param  {String}   options.entitiesKey   The key where the entities live on the response. Usually matching the name of the query.
 * @param  {Function} options.transformer   Transforms the entities how we want for the component
 * @return {Function}                       See description
 */
export const createResultsToPropsMapper = ({ entitiesKey, transformer }) => ({ data, ownProps }) => {
  const { entityIds } = ownProps
  const entities = data[entitiesKey]
  if (data.error) return { error: data.error }
  if (!entities) return { loading: data.loading }

  // console.groupCollapsed('createResultsToPropsMapper')
  // console.log('data: ', data)
  // console.groupEnd()

  // If no entityIds were provided to the component all the things will be fetched.
  // Later we'll use the entityIds to render things in a specific order so this collects them from the untransformed response.
  const maybeEntityIds = !entityIds ? { entityIds: getEntityIds(entities) } : {}
  const { loading, refetch } = data
  return {
    refetch,
    loading,
    entities: transformer(entities),
    ...maybeEntityIds
  }
}

// this is where we would use component props to set the query options
export const mapPropsToOptions = ({ entityIds }) => (
  entityIds
    ? {
      variables: {
        ids: [ ...entityIds.toArray() ] // entityIds.toArray() because immutable js
      }
    } : {}
)
