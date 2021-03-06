import React from 'react';
import { pathOr } from 'ramda';

export const CategoryStyle = (style = '', breakpoint) => {
    var color = pathOr('white', ['color', 'value'])(style);
    var bp = pathOr('', ['md'])(breakpoint);
    return {
        color: `${color}`,
        fontSize: `${bp ? 1 : 1.5}rem`
    }
}

export const CategoryGlobalStyle = ({ themename }) => {
    return (
        <>
            <style type="text/css">
                {`
                 .${themename}-category .nav-link {
                    font-size: 18px;
                 }
            `}
            </style>
        </>
    )
}