import { pathOr } from 'ramda';

export const JubotronStyle = (url = '../../assets/masterPoster.png') => {
    return {
        backgroundImage: `url(${url})`,
        backgroundRepeat: `no-repeat, repeat`,
        backgroundColor: '#131722',
        minHeight: '60vh',
        backgroundPosition: `center`,
        backgroundSize: 'cover'
    }
}

export const CardStyle = {
    cardwrapper: (bp) => ({
        margin: '6%',
        background: 'transparent'
    }),
    title: (bp) => ({
        color: '#FFFFFF',
        fontSize: `${bp ? '28px' : '58px'}`,
        padding: '',
        textTransform: 'uppercase',
        margin: '18px 0'
    }),
    subtitle: (bp) => ({
        color: '#FFFFFF',
        fontSize: '19px',
        padding: '',
        margin: '18px 0',
        marginBottom: '4rem',
        textTransform: 'uppercase',
    }),
    buttonWrapper: (bp) => ({
        marginTop: '2rem'
    }),
    playButton: (bp) => ({
        backgroundColor: '#ffffff',
        padding: `${bp ? '14px 30px 14px 34px' : '21px 38px 20px 58px'}`,
        marginRight: '1rem',
        border: 'none'
    }),
    playButtonTxt: (bp) => ({
        color: '#000000',
        fontSize: `${bp ? '14px' : '21px'}`,
        textTransform: 'uppercase'
    }),
    playButtonImage: (bp) => ({
        width: '20px',
        height: '20px',
        borderRadius: '10px'
    }),
    addToList: (bp) => ({
        background: 'transparent linear-gradient(180deg, #4D4D4D 0%, #6B6562 100%) 0% 0% no-repeat padding-box',
        border: '2px solid #ffffff',
        borderRadius: '10px',
        padding: `${bp ? '14px 30px 14px 34px' : '21px 38px 20px 58px'}`
    }),
    addToListTxt: (bp) => ({
        color: '#FFFFFF',
        fontSize: `${bp ? '14px' : '21px'}`,
        marginLeft: '1rem',
        textTransform: 'uppercase'
    })
}

export const SubscriptionStyleTitle = (breakpoint) => {
    const bk = pathOr('', ['sm'])(breakpoint);
    return {
        color: `#FFFFFF`,
        textTransform: 'uppercase',
        fontSize: `${bk ? '18px' : '38px'}`,
        marginBottom: '2rem'
    }
}