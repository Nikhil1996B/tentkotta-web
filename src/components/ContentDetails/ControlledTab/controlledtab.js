import React, { useState } from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import TrayWithTitleHome from './CarousalContent/index';
import { Tabstyle, ControlledTabGlobalStyle } from './controlledtabstyle';
export default function Controlledtab({ production, writing, crew }) {
    const [key, setKey] = useState('home');
    return (
        <>
            <ControlledTabGlobalStyle />
            <Container className="contentDetailsWrapper" style={{ margin: '0 4rem' }}>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    style={Tabstyle.tabs()}
                >
                    <Tab eventKey="home" title="Home" style={Tabstyle.tab()}>
                        <TrayWithTitleHome />
                    </Tab>
                    <Tab eventKey="profile" title="Details" style={Tabstyle.tab()}>
                        <div className="detailsCrew">
                            <div className="people">
                                {production.length > 0 ? (
                                    <div className="peopleHeading">Production</div>
                                ) : (
                                        null
                                    )}
                                {production && production.length > 0 ? (
                                    <div className="peopleVal">
                                        {production.map((person) => {
                                            let str = `${person}, `;
                                            return str;
                                        })}
                                    </div>
                                ) : (
                                        null
                                    )}
                                {writing && writing.length > 0 ? (
                                    <div className="peopleHeading">Writing</div>
                                ) : (
                                        null
                                    )}
                                {writing && writing.length > 0 ? (
                                    <div className="peopleVal">
                                        {writing.map((person) => {
                                            let str = `${person}, `;
                                            return str;
                                        })}
                                    </div>
                                ) : (
                                        null
                                    )}
                                {crew && crew.length > 0 ? (
                                    <div className="peopleHeading">Crew</div>
                                ) : (
                                        <div></div>
                                    )}
                                {crew && crew.length > 0 ? (
                                    <div className="peopleVal">
                                        {crew.map((person) => {
                                            let str = `${person}, `;
                                            return str;
                                        })}
                                    </div>
                                ) : (
                                        null
                                    )}
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </Container >
        </>
    )
}
