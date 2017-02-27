import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import fetchMock from 'fetch-mock'
import 'isomorphic-fetch'

import { RECEIVE_LOCATIONS, CLEAR_LOCATIONS, SELECT_LOCATION, RECEIVE_FORECAST,
  fetchLocationsByPattern, receiveLocations, clearLocations, selectLocation, fetchForecast, receiveForecast } from './index'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('reducer', () => {

  afterEach(() => {
    fetchMock.restore()
  })

  it('Should return a function', () => {
    expect(typeof fetchLocationsByPattern('text')).toEqual('function');
  })

  it('Should dispatch RECEIVE_LOCATIONS when fetching locations has been done', () => {
    fetchMock.get('*', {
     list: ['foo']
    });

    const expectedActions = [
      { type: RECEIVE_LOCATIONS, locations: ['foo']  }
    ]
    const store = mockStore({ locations: [] })

    return store.dispatch(fetchLocationsByPattern('text'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('Should dispatch RECEIVE_LOCATIONS on receiveLocations call', () => {
    expect(receiveLocations('foo')).toEqual({
      type: RECEIVE_LOCATIONS,
      locations: 'foo'
    })
  })

  it('Should dispatch CLEAR_LOCATIONS on clearLocations call', () => {
    expect(clearLocations()).toEqual({
      type: CLEAR_LOCATIONS
    })
  })

  it('Should dispatch SELECT_LOCATION on selectLocation call', () => {
    expect(selectLocation('foo')).toEqual({
      type: SELECT_LOCATION,
      location: 'foo'
    })
  })

  it('Should return a function on fetchForecast call', () => {
    expect(typeof fetchForecast('locationId')).toEqual('function');
  })

  it('Should dispatch RECEIVE_FORECAST when fetching forecast has been done', () => {
    fetchMock.get('*', {
     list: ['foo']
    });

    const expectedActions = [
      { type: RECEIVE_FORECAST, forecast: ['foo']  }
    ]
    const store = mockStore({ locations: [] })

    return store.dispatch(fetchForecast('text'))
      .then(() => { // return of async actions
        expect(store.getActions()).toEqual(expectedActions)
      })
  })

  it('Should dispatch RECEIVE_FORECAST on receiveForecast call', () => {
    expect(receiveForecast('foo')).toEqual({
      type: RECEIVE_FORECAST,
      forecast: 'foo'
    })
  })

})