import React from 'react'
import { shallow } from 'enzyme'
import { App } from './index'

describe('App', () => {
  let app

  beforeEach(() => {
    app = shallow(<App />)
  })

  it('Should render a header', () => {
    expect(app.find('header').length).toEqual(1)
  })

  it('Should render a AppHeader', () => {
    expect(app.find('AppHeader').length).toEqual(1)
  })

  it('Should render a main', () => {
    expect(app.find('main').length).toEqual(1)
  })
})