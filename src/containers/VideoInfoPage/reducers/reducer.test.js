import React from 'react'
import { shallow } from 'enzyme'
import { types } from '../actions/types'
import videoInfo from './reducer'

describe('Cast Reducers', () => {

    it('Should return default state', () => {
        const newState = videoInfo(undefined, {})
        expect(newState).toEqual([])
    })

    it('Should return new state if any types matches', () => {
        const cast = [{
            id: 1,
            image: 'testimg.png',
            imageBg: '/images/slide1b.webp',
            content: 'test content',
            title: 'test title',
        },
        {
            id: 1,
            image: 'testimg.png',
            imageBg: '/images/slide1b.webp',
            content: 'test content',
            title: 'test title',
        },
        {
            id: 1,
            image: 'testimg.png',
            imageBg: '/images/slide1b.webp',
            content: 'test content',
            title: 'test title',
        },
        ]
        const newState = videoInfo(undefined, {
            type: types.GET_CAST,
            payload: cast
        })
        expect(newState).toEqual(cast)
    })
})