import React from 'react';
import { Jumbotron, Button, Card, Container, Row, Col, Image } from 'react-bootstrap';
import { pathOr } from 'ramda';
import { HeroBanner } from '../../hero-banner-context';
import { JubotronStyle, CardStyle, SubscriptionStyleTitle } from './jumbotron-style';
import CustomizedInputBase from "../../subscriptionForm";


export default function JumbotronComp() {
    return (
        <HeroBanner.Consumer>
            {
                ({ url, isSignedIn, handleClick, plus, play, breakpoint }) => (
                    <Jumbotron style={JubotronStyle(url)} fluid className={'rounded-0'}>
                        {isSignedIn ? (
                            <Card style={{ ...CardStyle.cardwrapper(), width: `${pathOr('', ['sm'])(breakpoint) ? '21rem' : '28rem'}` }}>
                                <Card.Body>
                                    <Card.Title style={CardStyle.title(pathOr('', ['sm'])(breakpoint))}>
                                        MASTER
                                    </Card.Title>
                                    <Card.Subtitle className="mb-2" style={CardStyle.subtitle(pathOr('', ['sm'])(breakpoint))}>
                                        2009 | ACTION-THRILLER | 179 Minutes
                                        </Card.Subtitle>
                                    <Container>
                                        <Row style={CardStyle.buttonWrapper(pathOr('', ['sm'])(breakpoint))}>
                                            <Button
                                                className="play"
                                                onClick={() => handleClick()}
                                                style={CardStyle.playButton(pathOr('', ['sm'])(breakpoint))}>
                                                <Row>
                                                    <Image
                                                        src={`${play}`}
                                                        alt="play button"
                                                        className="imageCont"
                                                        style={CardStyle.playButtonImage()} />
                                                    <span className="btnTxt" style={CardStyle.playButtonTxt(pathOr('', ['sm'])(breakpoint))}>
                                                        {'play'}
                                                    </span>
                                                </Row>
                                            </Button>
                                            <Button className="addToList" style={CardStyle.addToList(pathOr('', ['sm'])(breakpoint))}>
                                                <Row>
                                                    <Image
                                                        src={plus}
                                                        alt="shortlist movie"
                                                        style={{ height: '17px' }} />
                                                    <span style={CardStyle.addToListTxt(pathOr('', ['sm'])(breakpoint))}>
                                                        Add to my list
                                                    </span>
                                                </Row>
                                            </Button>
                                        </Row>
                                    </Container>
                                </Card.Body>
                            </Card>

                        ) : (
                                <Card style={{ ...CardStyle.cardwrapper(), width: `${pathOr('', ['sm'])(breakpoint) ? '18rem' : '28rem'}` }}>
                                    <Card.Body>
                                        <Card.Subtitle className="" style={SubscriptionStyleTitle(breakpoint)}>
                                            get your subscription now
                                            </Card.Subtitle >
                                        <CustomizedInputBase />
                                    </Card.Body>
                                </Card>
                            )
                        }
                    </Jumbotron>
                )
            }
        </HeroBanner.Consumer>

    )
}
