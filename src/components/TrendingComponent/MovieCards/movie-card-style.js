export const CardContainer = {
    colum: (bp) => ({
        border: '1px solid grey',
        minHeight: '40vh',
        paddingRight: `${bp ? "0" : '2rem'}`,
        paddingLeft: `${bp ? "0" : ''}`
    }),
    image: (url) => ({
        backgroundImage: `url(${url})`,
        backgroundRepeat: `no - repeat, repeat`,
        backgroundColor: '#131722',
        backgroundPosition: `center`,
        backgroundSize: 'cover'
    }),
    smallimage: (bp) => ({
        minHeight: '20vh',
        margin: `${bp ? '0 0.2rem' : '0 1rem'} `
    }),
    topmargin: () => ({
        marginTop: '1rem'
    }),
    positionrelative: () => ({
        position: 'realative'
    }),
    positionabsolute: () => ({
        position: 'absolute'
    }),
    bottomright: () => ({
        position: `absolute`,
        bottom: `8px`,
        right: `16px`,
        fontSize: `18px`,
        color: 'white'
    }),
    bottomLeft: () => ({
        position: `absolute`,
        bottom: `8px`,
        left: `16px`,
        fontSize: `18px`
    })
}
