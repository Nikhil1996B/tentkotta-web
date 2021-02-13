import React from 'react';
import { pathOr } from 'ramda';
import { HeaderContext } from '../../header-context';
import { Nav, Link } from 'react-bootstrap';
import { CategoryStyle } from './category-style';

export default function Category() {
    return (
        <HeaderContext.Consumer>
            {
                ({ breakpoint, category, themename }) => (
                    <>
                        <style type="text/css">
                            {
                                `
                                .${themename}-category .nav-link {
                                        font-size: 18px;
                                }
                                `
                            }
                        </style>
                        <Nav className={`mr-auto ${themename}-category`} style={{ display: `${pathOr('', ['md'])(breakpoint) ? 'none' : ''}` }}>
                            <Nav.Link href="/?movies" style={CategoryStyle(pathOr(['style'])(category), breakpoint)}>
                                Movies
                        </Nav.Link >
                            <Nav.Link href="/?web-series" style={CategoryStyle(pathOr(['style'])(category), breakpoint)}>
                                Web Series
                        </Nav.Link>
                        </Nav>
                    </>
                )
            }
        </HeaderContext.Consumer >
    )
}
