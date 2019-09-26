import { times, uniqueId, reduce } from 'lodash/fp'

export const makeInitiatives = times(index => ({
  id: `${uniqueId('initiative_')}`,
  content: 'Im a cell',
  minWidth: index === 0 ? '480px' : '130px',
  sticky: index === 0 ? '15px' : false
}))

export const makeEntities = reduce(
  (result, item) => ({ ...result, [item.id]: item }),
  {}
)

export const makeResults = reduce(
  (result, item) => [ ...result, item.id ],
  []
)
