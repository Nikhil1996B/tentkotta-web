import React from 'react';

export const NavBarStyle = (bgColor = '') => {
    return {
        background: `${bgColor ? bgColor : 'black'}`
    }
}

export const HeaderGlobalStyle = ({breakpoint}) => {
    return (
        <>
            <style type="text/css">
                {`
                .headercomp .navbar-brand {
                    width: ${breakpoint && breakpoint.sm ? '44%' : ''}
                }
                `}
            </style>
        </>
    )
}