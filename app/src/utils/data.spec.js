import test from 'tape'
import sinon from 'sinon'
import Immutable, { fromJS } from 'immutable'
import {
  flatten,
  createResultsToPropsMapper,
  mapPropsToOptions
} from './data'

test('Data Utils - flatten', t => {
  t.deepEqual(
    flatten('id', [
      { id: '0', name: 'Fizz' },
      { id: '1', name: 'Buzz' }
    ]),
    {
      0: { id: '0', name: 'Fizz' },
      1: { id: '1', name: 'Buzz' }
    },
    'should flatten array using the id prop'
  )

  const flattenOnName = flatten('name')
  t.deepEqual(
    flattenOnName([
      { id: '0', name: 'Fizz' },
      { id: '1', name: 'Buzz' }
    ]),
    {
      'Fizz': { id: '0', name: 'Fizz' },
      'Buzz': { id: '1', name: 'Buzz' }
    },
    'should be curried'
  )

  t.throws(() => (
    flattenOnName({})
  ), 'should throw when given non-array')

  t.end()
})

test('Data Utils - createResultsToPropsMapper', t => {
  const methodWrapper = {
    testTransformer: entities => fromJS(entities)
  }
  const transformer = sinon.spy(methodWrapper, 'testTransformer')
  const resultsToProps = createResultsToPropsMapper({ entitiesKey: 'clients', transformer })
  const entitiesCheck = resultsToProps({
    data: {
      loading: false,
      clients: [
        { id: '1', name: 'Test Client 1' },
        { id: '2', name: 'Test Client 2' }
      ]
    },
    ownProps: {}
  })

  t.deepEqual(
    transformer.firstCall.args[0],
    [
      { id: '1', name: 'Test Client 1' },
      { id: '2', name: 'Test Client 2' }
    ],
    'should call transformer and and give it correct entity as first argument'
  )

  t.deepEqual(
    entitiesCheck,
    {
      loading: false,
      entities: fromJS([
        { id: '1', name: 'Test Client 1' },
        { id: '2', name: 'Test Client 2' }
      ]),
      entityIds: fromJS(['1', '2']),
      refetch: undefined
    },
    'function returned from `createResultsToPropsMapper` should map clients data to entities prop and returns result'
  )

  const loadingCheck = resultsToProps({
    data: { loading: true },
    ownProps: { }
  })

  t.deepEqual(
    loadingCheck,
    { loading: true },
    'function returned from `createResultsToPropsMapper` returns loading state when no entities are present'
  )

  const errorCheck = resultsToProps({
    data: {
      loading: false,
      clients: {},
      error: { message: 'Ima error!' }
    },
    ownProps: {
      entityIds: ['1', '2']
    }
  })

  t.deepEqual(
    errorCheck,
    { error: { message: 'Ima error!' } },
    'function returned from `createResultsToPropsMapper`returns error state when error is present'
  )

  t.end()
})

test('Data Utils - mapPropsToOptions', t => {
  const throwMe = () => mapPropsToOptions({ entityIds: ['1', '2'] })
  t.throws(throwMe, 'should throw if given standard array instead of Immutable List')

  t.deepEqual(
    mapPropsToOptions({
      entityIds: Immutable.List(['1', '2'])
    }),
    { variables: { ids: [ '1', '2' ] } },
    'should map prop to variables and return JS object'
  )

  t.end()
})
