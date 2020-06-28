import React from 'react'
import { shallow } from 'enzyme'

import { HelloTeam } from '../components/helloTeam'

describe('HelloTeam', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<HelloTeam />)
  })

  it('has the correct class name', () => {
    expect(wrapper.hasClass('hello-team')).toBe(true)
  })

  it('renders the correct message', () => {
    expect(wrapper.text()).toContain('Hello team!')
  })
})
