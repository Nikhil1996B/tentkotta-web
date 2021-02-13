import React, { useState } from 'react';
import { HeaderContext } from '../../header-context';
import { Container, Row, Col, Form, Button, Image, Card, Figure } from 'react-bootstrap';
import { pathOr } from 'ramda';
import SideNav from 'react-simple-sidenav';
import { CardHeaderStyle, CardStyle, ImageStyle, CrossBtnStyle, FigureStyle, SubscribeBtnStyle } from './user-auth-style';


export const SideMenuContent = ({ icons = "", setShow, handleSignInClick, history, dispatch }) => {
    const closeicon = pathOr('', ['remove_icon'])(icons);
    const devices = pathOr('', ['devices'])(icons);
    const account = pathOr('', ['account'])(icons);
    return (
        <Container>
            <Row>
                <Card style={CardHeaderStyle()}>
                    <div className="float-right">
                        <button type="button" className={"close"} aria-label="Close" onClick={() => setShow(false)}>
                            <span aria-hidden="true" style={CrossBtnStyle()}>&times;</span>
                        </button>
                    </div>
                </Card>
            </Row>
            <Row>
                <Card style={CardStyle()}>
                    <Row>
                        <Image src={devices} style={ImageStyle()}></Image>
                        <Card.Body>Movies</Card.Body>
                    </Row>
                </Card>
            </Row>
            <Row>
                <Card style={CardStyle()}>
                    <Row>
                        <Image src={devices} style={ImageStyle()}></Image>
                        <Card.Body>Web Series</Card.Body>
                    </Row>
                </Card>
            </Row>
            <Row>
                <Card style={CardStyle()}>
                    <Row>
                        <Image src={devices} style={ImageStyle()}></Image>
                        <Card.Body>Devices</Card.Body>
                    </Row>
                </Card>
            </Row>

            <Row className={'account-logout'}>
                <Card style={{ ...CardStyle(), minHeight: '12vh' }}>
                    <Row className="mx-auto">
                        <Figure style={FigureStyle.figure()} >
                            <Figure.Image src={account} alt="account" style={FigureStyle.image()} rounded></Figure.Image>
                            <Figure.Caption style={FigureStyle.caption()}>Account</Figure.Caption>
                        </Figure>
                        <Figure style={FigureStyle.figure()} onClick={
                            () => {
                                handleSignInClick();
                                setShow(true);
                            }}>
                            <Figure.Image src={account} alt="logout" rounded style={FigureStyle.image()}></Figure.Image>
                            <Figure.Caption style={FigureStyle.caption()}>Logout</Figure.Caption>
                        </Figure>
                    </Row>
                </Card>
            </Row>

            <Row >
                <Button onClick={() => {
                    dispatch({ type: "RESET_SIGIN" });
                    history.push("/signUp");
                }} style={SubscribeBtnStyle} className="mx-auto">Subscribe</Button>
            </Row>
        </Container >
    )
}


export const MenueCard = ({ show, setShow, icons, handleSignInClick, dispatch, history }) => {
    return (
        <SideNav
            navStyle={
                {
                    minWidth: '50%',
                    minHeight: '100%',
                    height: 'auto',
                    backgroundColor: '#131722'
                }
            }
            showNav={show}
            onHideNav={() => setShow(false)}
            itemStyle={{ backgroundColor: '#131722' }}
            openFromRight={false}
            itemHoverStyle={{ backgroundColor: '#CDDC39' }}
        >
            <SideMenuContent icons={icons} setShow={setShow} handleSignInClick={handleSignInClick} dispatch={dispatch} history={history} />
        </SideNav>
    )
}

export const AuthenticatedUser = () => {
    return (
        <HeaderContext.Consumer>
            { ({ profile, setShow, show, handleSignInClick, emailAddress, icons, dispatch, history }) => (
                <>
                    <img
                        src={profile}
                        // src={account} 
                        alt="signed-in avatar"
                        style={{ height: '44px', width: '44px' }}
                        id="signedIn"
                        onClick={() => setShow(!show)}
                    />
                    <MenueCard setShow={setShow} show={show} icons={icons} handleSignInClick={handleSignInClick} dispatch={dispatch} history={history} />
                </>
            )
            }
        </HeaderContext.Consumer>
    )
};


export default function UserAuth() {
    return (
        <HeaderContext.Consumer>
            {
                ({ isSignedIn, button, handleSignInClick }) => (
                    <>
                        {!isSignedIn && <Button onClick={() => handleSignInClick()}>Sign In</Button>}
                        {isSignedIn && <AuthenticatedUser />}
                    </>
                )

            }
        </HeaderContext.Consumer>
    )
}
