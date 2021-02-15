import React from 'react';
import { pathOr } from 'ramda';


export const BrandLogoStyle = ({ breakpoint }) => {
    const sm = pathOr('', ['md'])(breakpoint);
    return {
        width: `${sm ? '36%' : ''}`,
        marginTop: `${sm ? '1rem' : ''}`
    }
}

export const LogoFigure = ({ breakpoint }) => {
    const sm = pathOr('', ['sm'])(breakpoint);
    return {
        marginBottom: `${'0'}`
    }
}