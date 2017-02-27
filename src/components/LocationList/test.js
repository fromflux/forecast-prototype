import React from 'react'
import { shallow } from 'enzyme'
import LocationList from './index'

describe('LocationList', () => {
  let locationList
  let itemsMock = [{
    id: 1
  }, {
    id: 2
  }]
  let onSelectMock = jest.fn()

  beforeEach(() => {
    locationList = shallow(<LocationList items={itemsMock} onSelect={onSelectMock}/>)
  })

  it('Should render a LocationList wrapper', () => {
    expect(locationList.find('.LocationList').length).toEqual(1)
  })

  it('Should render approppriate number of ListItem', () => {
    expect(locationList.find('ListItem').length).toEqual(2)
  })

})