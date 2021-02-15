import React from 'react';
import { pathOr } from 'ramda';
import { CardContainer } from './movie-card-style';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { placeholder_url, placeholder_url_small } from './placeholderimg/index';

// TODO: Fetch from reducer
const imageUrl = 'https://image.tmdb.org/t/p/';
const size = 'w500';

export default function MovieCard({ url = 'https://via.placeholder.com/150', breakpoint, trending }) {
    const bp = pathOr('', ['sm'])(breakpoint);
    const xl = pathOr('', ['xl'])(breakpoint);
    const xxl = pathOr('', ['xxl'])(breakpoint);
    const firstItem = pathOr('', ['0'])(trending);
    const secondItem = trending ? trending.slice(1, 3) : [];
    const thirdItem = trending ? trending.slice(3, 5) : [];
    return (
        <Container style={{ maxWidth: `${xl ? '1989' : ''}px` }}>
            <Row>
                <Col
                    style={{
                        ...CardContainer.colum(),
                        ...CardContainer.image(url = `${imageUrl}${size}${firstItem && firstItem.backdrop_path}`),
                        ...CardContainer.positionrelative()
                    }}
                    sm={12}
                    lg={6}>
                    <div style={{ ...CardContainer.bottomLeft(bp) }} >
                        <div style={{ color: '#949CB0' }}>
                            {firstItem && firstItem.release_date && firstItem.release_date}
                        </div>
                        {firstItem && firstItem.original_title && firstItem.original_title}
                    </div>
                    <div style={{ ...CardContainer.bottomright() }} >
                        <Image src={placeholder_url} alt="movies list order" />
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
                                        ...CardContainer.smallimage(bp), ...{
                                            marginTop: `${bp ? '1rem' : ''}`
                                        }
                                    }}>
                                        <div style={{ ...CardContainer.bottomLeft(bp) }} >
                                            <div style={{ color: '#949CB0' }}>
                                                {seconditem && seconditem.release_date && seconditem.release_date}
                                            </div>
                                            {seconditem && seconditem.original_title && seconditem.original_title}
                                        </div>
                                        <div style={{ ...CardContainer.bottomright() }} >
                                            <Image src={placeholder_url_small} alt="movies list order" />
                                        </div>
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
                                            ...CardContainer.smallimage(bp), ...CardContainer.topmargin()
                                        }}>
                                        <div style={{ ...CardContainer.bottomLeft(bp) }} >
                                            <div style={{ color: '#949CB0' }}>
                                                {thirdItem && thirdItem.release_date && thirdItem.release_date}
                                            </div>
                                            {thirdItem && thirdItem.original_title && thirdItem.original_title}
                                        </div>
                                        <div style={{ ...CardContainer.bottomright() }} >
                                            <Image src={placeholder_url_small} alt="movies list order" />
                                        </div>
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
