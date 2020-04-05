import React from "react"
import Enzyme ,{ shallow } from "enzyme"

import HeaderText from './HeaderText'


describe('Header Text test!', () => {
  it('renders', () => {
    let wrapper = shallow(<HeaderText text="test"/>)
  })
})