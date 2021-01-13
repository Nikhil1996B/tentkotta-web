import React from 'react'
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from '../../testing-utils/utils';
import VideoInfoPage from './VideoInfoPage'
import castMock from './__mock/cast'
import moviesMock from './__mock/movies'
import continueWaching from './__mock/continuewatching'

const setUp = (props = {}) => {
    const component = shallow(<VideoInfoPage {...props} />);
    return component;
}

const movies = moviesMock

const cast = castMock


describe('Video Info page', () => {

    describe('Checking proptypes', () => {
        it('it should not through warnings', () => {
            // const expectedProps = {
            //     cast: [],
            //     continueWaching: [],
            //     movies: []
            // }
            // const propsErr = checkProps(VideoInfoPage, expectedProps)

            // expect(propsErr).toBeUndefined()
        })
    })
    describe('Have props', () => {
        let wrapper;
        beforeEach(() => {
            // const props = {
            //     cast: [],
            //     continueWaching: [],
            //     movies: []
            // }
            // wrapper = setUp(props)
        })

        it('', () => { })
        // it('it should render without errors', () => {
        //     const component = findByTestAttr(wrapper, 'VideoInfoPage');
        //     expect(component.length).toBe(1);
        // })
    })
})
