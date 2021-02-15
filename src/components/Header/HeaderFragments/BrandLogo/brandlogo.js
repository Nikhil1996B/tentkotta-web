import React, { useState, useEffect } from 'react';
import { Navbar, Figure } from 'react-bootstrap';
import { BrandLogoStyle, LogoFigure } from './brandlogostyle';
import { HeaderContext } from '../../header-context';


export default function Brandlogo() {
    return (
        <HeaderContext.Consumer>
            {
                ({ logotent, breakpoint }) =>
                    <Navbar.Brand href={"/"} style={BrandLogoStyle(breakpoint)}>
                        <Figure style={LogoFigure(breakpoint)}>
                            <Figure.Image width={`${60}%`} height={''} src={`${logotent}`}></Figure.Image>
                        </Figure>
                    </Navbar.Brand>
            }
        </HeaderContext.Consumer >
    )
}
