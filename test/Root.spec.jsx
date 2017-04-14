/* eslint-env node, mocha */

import React from 'react'
import { shallow, mount } from 'enzyme'
import { Root } from '../src/components/Root'
import Home from '../src/components/Home'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import chaiJsx from 'chai-jsx'

chai.use(chaiEnzyme())
chai.use(chaiJsx)

var expect = chai.expect
// let should = chai.should()

describe('<Root/>', () => {
  describe('when loading the root page', () => {
    let wrapper

    beforeEach(() => {
      wrapper = shallow(<Root />)
    })

    it('should show text "Garage-Bin"', () => {
      expect(wrapper.find('h1')).to.contain.text('Garage-Bin')
    })
  })
})
