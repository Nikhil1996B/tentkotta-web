import React from 'react';
import { pathOr } from 'ramda';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { CardTitleStyle, CardBodyStyle } from './title-style.js';

export default function Title({ title = "Trending Movies", breakpoint }) {
    const bp = pathOr('', ['sm'])(breakpoint);
    return (
        <Card style={CardBodyStyle(bp)} className="float-left">
            <Card.Body style={CardTitleStyle()} >{title}</Card.Body>
        </Card>
    )
}
