import React from 'react';
import Home from '../../Carousel/Home';
import { pathOr } from 'ramda';
import { Container, Row, Col } from 'react-bootstrap';

export default function SliderSection({
    traycontent,
    display,
    breakpoint,
    title
}) {
    const sm = pathOr('', ['sm'])(breakpoint);
    return (
        <Home
            displayTextOnCard={true}
            movies={traycontent}
            displayCard={sm ? 3 : 5}
            progressBar={false}
            displayHoverState={true}
            redirecturl={'/contentdetails'}
            title={title}
        />
    )
}