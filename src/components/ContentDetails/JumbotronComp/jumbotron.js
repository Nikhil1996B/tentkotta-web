import React from 'react';
import { pathOr } from 'ramda';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Title from './Title/title';
import Overview from './Overview/overview';
import ImageContainer from './Image/image';
import { JumbotronStyle, ContainerStyle } from './jumbotronstyle';

export default function JumbotronComp({ movieDetails, hours, minutes, director, image_base_url }) {
    const title = pathOr('', ['title'])(movieDetails);
    const overview = pathOr('', ['overview'])(movieDetails);
    const release_date = pathOr('', ['release_date'])(movieDetails);
    const adult = pathOr('', ['adult'])(movieDetails);
    const backdrop_path = pathOr('', ['backdrop_path'])(movieDetails);
    const url = `${image_base_url}${backdrop_path}`;
    return (
        <div>
            <Jumbotron style={JumbotronStyle(url)} >
                <Container style={ContainerStyle()}>
                    <Row>
                        <Title
                            title={title}
                            overview={overview}
                            hours={hours}
                            minutes={minutes}
                            release_date={release_date}
                            adult={adult}
                        />
                        <Overview overview={overview} director={director} />
                        {/* <Col lg={7}>
                            <ImageContainer />
                        </Col> */}
                    </Row>
                </Container>
            </Jumbotron>
        </div>
    )
}
