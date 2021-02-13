import React from 'react';
import { pathOr } from 'ramda';
import { CardContainer } from './movie-card-style';
import { Container, Row, Col, Image } from 'react-bootstrap';

// TODO: Fetch from reducer
const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';

export default function MovieCard({ url = 'https://via.placeholder.com/150', breakpoint, trending }) {
    const bp = pathOr('', ['sm'])(breakpoint);
    const firstItem = pathOr('', ['0'])(trending);
    const secondItem = trending ? trending.slice(1, 3) : [];
    const thirdItem = trending ? trending.slice(3, 5) : [];
    return (
        <Container>
            <Row>
                <Col
                    style={{
                        ...CardContainer.colum(),
                        ...CardContainer.image(url = `${imageUrl}${size}${firstItem && firstItem.backdrop_path}`),
                        ...CardContainer.positionrelative()
                    }}
                    sm={12}
                    lg={6}>
                    <div style={{ ...CardContainer.bottomLeft() }} >
                        {firstItem && firstItem.original_title && firstItem.original_title}
                    </div>
                    <div style={{ ...CardContainer.bottomright() }} >
                        {firstItem && firstItem.original_title && firstItem.original_title}
                    </div>
                </Col>
                <Col style={CardContainer.colum(bp)}
                    sm={12}
                    lg={6}>
                    <Container>
                        <Row>
                            {
                                secondItem && secondItem.map((seconditem, key) => (
                                    <Col style={{
                                        ...CardContainer.image(url = `${imageUrl}${size}${seconditem && seconditem.backdrop_path}`),
                                        ...CardContainer.smallimage(bp)
                                    }}>

                                    </Col>
                                ))
                            }
                        </Row>
                        <Row>
                            {
                                thirdItem && thirdItem.map((thirdItem, key) => (
                                    <Col
                                        style={{
                                            ...CardContainer.image(url = `${imageUrl}${size}${thirdItem && thirdItem.backdrop_path}`),
                                            ...CardContainer.smallimage(bp)
                                        }}>

                                    </Col>
                                ))
                            }
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container >
    )
};
