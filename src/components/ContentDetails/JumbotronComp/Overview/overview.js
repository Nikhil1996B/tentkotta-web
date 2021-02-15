import React from 'react';
import { Row, Col, Card, Container } from 'react-bootstrap';
import { CardStyle } from './overviewstyle';

export default function Overview({ overview, director }) {
    return (
        <>
            <Card style={CardStyle.card()}>
                <Card.Body style={CardStyle.card()}>
                    <Card.Text>
                        <Container >
                            <Row style={{ ...CardStyle.overview(), ...CardStyle.container() }} >
                                {overview}
                            </Row>
                            <Row style={CardStyle.Details()}>
                                <Col style={CardStyle.CardTitle()} md={2}>
                                    Director
                              </Col>
                                <Col md={10} style={CardStyle.brandcolor()}>
                                    {director}
                                </Col>
                            </Row>
                            <Row style={CardStyle.Details()}>
                                <Col style={CardStyle.CardTitle()} md={2}>
                                    Director
                              </Col>
                                <Col md={10} style={CardStyle.brandcolor()}>
                                    {director}
                                </Col>
                            </Row>
                            <Row style={CardStyle.Details()}>
                                <Col style={CardStyle.CardTitle()} md={2}>
                                    Director
                              </Col>
                                <Col md={10} style={CardStyle.brandcolor()}>
                                    {director}
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>

            </Card>
        </>
    )
}
