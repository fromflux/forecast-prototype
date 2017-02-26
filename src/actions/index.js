import fetch from 'isomorphic-fetch'

export const RECEIVE_LOCATIONS = 'RECEIVE_LOCATIONS'
export const CLEAR_LOCATIONS = 'CLEAR_LOCATIONS'
export const SELECT_LOCATION = 'SELECT_LOCATION'
export const RECEIVE_FORECAST = 'RECEIVE_FORECAST'

export function fetchLocationsByPattern(pattern) {
  return dispatch => {
    return fetch(`/api/locations?search=${pattern}`)
      .then(response => response.json())
      .then(json => {
        const locations = json.list.map((item) => {
          return Object.assign(item, {
            id: item._id,
          })
        })
        dispatch(receiveLocations(locations))
      });
  }
}

export function receiveLocations(locations) {
  return {
    type: RECEIVE_LOCATIONS,
    locations
  }
}

export function clearLocations() {
  return {
    type: CLEAR_LOCATIONS
  }
}

export function selectLocation(location) {
  return {
    type: SELECT_LOCATION,
    location
  }
}

export function fetchForecast(locationId) {
  return dispatch => {
    return fetch(`/api/locations/${locationId}/forecast`)
      .then(response => response.json())
      .then(json => dispatch(receiveForecast(json.list)));
  }
}

export function receiveForecast(forecast) {
  return {
    type: RECEIVE_FORECAST,
    forecast
  }
}
