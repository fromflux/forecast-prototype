import React from 'react'
import { shallow } from 'enzyme'
import { Home } from './index'

describe('Home', () => {
  let home
  let currentLocation = {}
  let forecast = [{
    "dt": 1488153600,
    "main": {
      "temp": 9.1
    },
    "weather": [
      {
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "dt_txt": "2017-02-27 00:00:00"
  }, {
    "dt": 1488164400,
    "main": {
      "temp": 7.92,
    },
    "weather": [
      {
        "description": "light rain",
        "icon": "10n"
      }
    ],
    "dt_txt": "2017-02-28 00:00:00"
  }]
  let dispatch = jest.fn()

  beforeEach(() => {
    home = shallow(<Home currentLocation={currentLocation} forecast={forecast} dispatch={dispatch}/>)
  })

  afterEach(() => {
    dispatch.mockReset()
  })

  it('Should render a Home wrapper', () => {
    expect(home.find('.Home').length).toEqual(1)
  })

  it('Should render correct number of ForecastItem', () => {
    expect(home.find('ForecastItem').length).toEqual(2)
  })

})