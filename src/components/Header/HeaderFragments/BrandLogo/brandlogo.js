import React, { useState, useEffect } from 'react';
import { Navbar, Figure } from 'react-bootstrap';
import { HeaderContext } from '../../header-context';


export default function Brandlogo() {
    return (
        <HeaderContext.Consumer>
            {
                context =>
                    <Navbar.Brand href={"/"}>
                        <Figure>
                            <Figure.Image width={`${60}%`} height={''} src={`${context && context.logotent}`}></Figure.Image>
                        </Figure>
                    </Navbar.Brand>
            }
        </HeaderContext.Consumer >
    )
}
