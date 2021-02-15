import React from 'react';

export const JumbotronStyle = (url) => {
    const gradient = `linear-gradient(90deg, #131722 0%, #131722 17%, #131722 29%, #0A0A0A42 100%)`;
    return {
        backgroundImage: `${gradient},url(${url})`,
        minHeight: '70vh',
        borderRadius: 'none',
        padding: '0',
        backgroundRepeat: `no-repeat`,
        backgroundPosition: `center`,
        backgroundSize: 'cover',
        border: '0'
    }
}

export const ContainerStyle = () => {
    return {
        margin: '0rem 1rem 1rem 1rem',
        border: 'none'
    }
}