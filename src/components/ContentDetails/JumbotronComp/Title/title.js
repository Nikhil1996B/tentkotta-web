import React from 'react';
import { Card, Row } from 'react-bootstrap';
import { CardStyle } from './titlestyle';

export default function Title({ title, overview, hours, minutes, release_date, adult }) {
    return (
        <Card style={CardStyle.card()}>
            <Card.Body style={CardStyle.card()}>
                <Card.Title style={CardStyle.CardTitle()}>{title}</Card.Title>
                <Card.Text>
                    <Row>
                        <div style={{ ...CardStyle.movierunTime(), ...CardStyle.moviDetailsRow() }}>
                            {hours > 0 ? `${hours}h ` : ""}
                            {minutes > 0 ? `${minutes}min` : ""}
                        </div>
                        <div style={{ ...CardStyle.movierunTime(), ...CardStyle.moviDetailsRow() }}>
                            {release_date
                                ? release_date.substr(0, 4)
                                : ""}
                        </div>
                        <div style={{ ...CardStyle.movierunTime(), ...CardStyle.moviDetailsRow() }}>
                            Certificate:
                           {adult ? " 18+" : " U"}
                        </div>
                    </Row>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
