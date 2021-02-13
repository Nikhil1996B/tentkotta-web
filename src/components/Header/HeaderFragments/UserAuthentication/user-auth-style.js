export const CardHeaderStyle = () => {
    return {
        width: '100%',
        background: '#131722',
        minHeight: '85px',
        padding: `${8}px`
    }
}

export const CardStyle = () => {
    return {
        width: '100%',
        background: '#131722',
        color: 'white',
        borderBottom: '1px solid #707070'
    }
}

export const ImageStyle = () => {
    return {
        background: 'white',
        width: `3rem`,
        margin: `${1}rem`,
        marginLeft: `${2}rem`,
        height: `${2} rem`
    }
}

export const CrossBtnStyle = () => {
    return {
        fontSize: `${4}rem`,
        color: '#707070'
    }
}

export const FigureStyle = {
    figure: () => ({
        padding: '4rem'
    }),
    image: () => ({
        height: '',
        width: '',
        background: 'grey',
        borderRadius: '50%'
    }),
    caption: () => ({
        color: '#707070',
        fontSize: ''
    })
}

export const SubscribeBtnStyle = {
    background: '#E1540F',
    color: '#FFFFFF',
    padding: '2rem 6rem',
    margin: '2rem 0',
    border: 'none',
    fontSize: '14px'
}

export const SignInBtnStyle = () => {
    return {
        background: '#E1540F',
        color: '#FFFFFF',
        font: '19px',
        padding: '0.8rem 1.5rem',
        border: 'none',
        textTransform: 'uppercase'
    }
}