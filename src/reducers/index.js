import {
  RECEIVE_LOCATIONS, CLEAR_LOCATIONS, SELECT_LOCATION, RECEIVE_FORECAST
} from '../actions'

const defaultState = {
  currentLocation: {},
  forecast: [],
  locations: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {

    case RECEIVE_LOCATIONS:
      return Object.assign({}, state, {
        locations: action.locations
      });

    case CLEAR_LOCATIONS:
      return Object.assign({}, state, {
        locations: []
      })

    case SELECT_LOCATION:
      return Object.assign({}, state, {
        currentLocation: action.location
      })

    case RECEIVE_FORECAST:
      return Object.assign({}, state, {
        forecast: action.forecast
      })

    default:
      return state
  }
}

export default reducer