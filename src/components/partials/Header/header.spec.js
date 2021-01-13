import React from 'react'
import { shallow } from 'enzyme'
import Header from './index'
import { findByTestAttr } from './../../../testing-utils/utils'

const setUp = (props = {}) => {
    const component = shallow(<Header {...props} />);
    return component
}

describe('header Component', () => {

    let component;

    beforeEach(() => {
        component = setUp()
    })

    it('Should render without errors', () => {
        const wrapper = findByTestAttr(component, 'headerComponent')
        expect(wrapper.length).toBe(1)
    })
})