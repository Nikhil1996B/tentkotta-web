import React from 'react';
import { Image } from 'react-bootstrap';
import { ImageStyle } from './imagestyle';

export default function ImageContainer() {
    return (
        <>
            < Image className={'float-right'} src="https://via.placeholder.com/150/" alt={'image poster'} style={ImageStyle()} />
        </>
    )
}
