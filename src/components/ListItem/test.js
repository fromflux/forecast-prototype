import React from 'react'
import { mount } from 'enzyme'
import ListItem from './index'

describe('ListItem', () => {
  let listItem
  let onSelectMock = jest.fn()
  let itemMock = {
    name: 'foo',
    country: 'bar'
  }

  beforeEach(() => {
    listItem = mount(<ListItem onSelect={onSelectMock} item={itemMock} />)
  })

  afterEach(() => {
    onSelectMock.mockReset()
  })

  it('Should render a ListItem wrapper', () => {
    expect(listItem.find('.ListItem').length).toEqual(1)
  })

  it('Should call onSelect prop on click', () => {
    listItem.simulate('click')
    expect(onSelectMock).toHaveBeenCalled()
  })

})