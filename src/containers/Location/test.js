import React from 'react'
import { mount } from 'enzyme'
import { Location } from './index'

describe('Location', () => {
  let location
  let matchedItemsMock = []
  let dispatch = jest.fn()

  beforeEach(() => {
    location = mount(<Location matchedItems={matchedItemsMock} dispatch={dispatch}/>)
  })

  afterEach(() => {
    dispatch.mockReset()
  })

  it('Should render a Location wrapper', () => {
    expect(location.find('.Location').length).toEqual(1)
  })

  it('Should render a TextInput', () => {
    expect(location.find('TextInput').length).toEqual(1)
  })

  it('Should render a LocationList', () => {
    expect(location.find('LocationList').length).toEqual(1)
  })

  it('Should clear location on mount', () => {
    expect(dispatch).toHaveBeenCalledWith({"type": "CLEAR_LOCATIONS"})
  })

})