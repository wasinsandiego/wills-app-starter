/**
 * THIS IS FOR EXAMPLE PURPOSES ONLY
 */
export const BASE = 'https://swapi.co/api'

export const GET_PERSON = 'person.getPerson as people'
export const getPerson = ({ index = 10 }) => ({
  method: 'GET',
  url: `${BASE}/people/${index}`,
  headers: {
    'Content-Type': 'application/json'
  }
})
