export const CardTitleStyle = () => {
    return {
        width: '100%',
        background: '#131722',
        color: 'white',
        fontSize: '38px',
        border: 'none',
        borderRadius: '0'
    }
};

export const CardBodyStyle = (bp) => {
    return {
        border: 'none',
        borderRadius: '0',
        width: `${bp ? '100%' : '100%'}`,
        margin: '2rem 0'
    }
}