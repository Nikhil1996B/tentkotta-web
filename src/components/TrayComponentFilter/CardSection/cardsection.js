import React from 'react';
import Home from '../../Carousel/Home';
import { Container, Col, Row } from 'react-bootstrap';

export default function CardSection({
    trending,
    displayCard,
    redirecturl
}) {
    return (
        <Home
            movies={trending}
            displayCard={displayCard ? 3 : 8}
            redirecturl={redirecturl}
            displayTextOnCard={false}
        />
    )
}
