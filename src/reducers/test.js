import {
  RECEIVE_LOCATIONS, CLEAR_LOCATIONS, SELECT_LOCATION, RECEIVE_FORECAST
} from '../actions'
import reducer from './index'

describe('reducer', () => {

  it('Should replace locations on RECEIVE_LOCATIONS', () => {
    const state = {
      currentLocation: {},
      forecast: [],
      locations: []
    }

    const action = {
      type: RECEIVE_LOCATIONS,
      locations: [1, 2, 3]
    }

    expect(reducer(state, action)).toEqual({
      currentLocation: {},
      forecast: [],
      locations: [1, 2, 3]
    })
  })

  it('Should clear location on CLEAR_LOCATIONS', () => {
    const state = {
      currentLocation: {},
      forecast: [],
      locations: [1, 2, 3]
    }

    const action = {
      type: CLEAR_LOCATIONS
    }

    expect(reducer(state, action)).toEqual({
      currentLocation: {},
      forecast: [],
      locations: []
    })
  })

  it('Should replace currentLocation on SELECT_LOCATION', () => {
    const state = {
      currentLocation: {
        foo: 'bar'
      },
      forecast: [],
      locations: []
    }

    const action = {
      type: SELECT_LOCATION,
      location: 'foobar'
    }

    expect(reducer(state, action)).toEqual({
      currentLocation: 'foobar',
      forecast: [],
      locations: []
    })
  })

  it('Should replace forecast on RECEIVE_FORECAST', () => {
    const state = {
      currentLocation: {},
      forecast: [],
      locations: []
    }

    const action = {
      type: RECEIVE_FORECAST,
      forecast: 'foobar'
    }

    expect(reducer(state, action)).toEqual({
      currentLocation: {},
      forecast: 'foobar',
      locations: []
    })
  })

})