import React from 'react';
import { pathOr } from 'ramda';
import { HeaderContext } from '../../header-context';
import { Nav, Link } from 'react-bootstrap';
import { CategoryStyle, CategoryGlobalStyle } from './category-style';

export default function Category() {
    return (
        <HeaderContext.Consumer>
            {
                ({ breakpoint, category, themename }) => (
                    <>
                        <CategoryGlobalStyle themename={themename} />
                        <Nav className={`mr-auto ${themename}-category`} style={{ display: `${pathOr('', ['sm'])(breakpoint) ? 'none' : ''}` }}>
                            <Nav.Link href="/?movies" style={CategoryStyle(pathOr(['style'])(category), breakpoint)} className={"mr-3"}>
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
