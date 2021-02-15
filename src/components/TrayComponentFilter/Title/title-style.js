export const CardTitleStyle = (bp) => {
    return {
        width: '100%',
        background: '#131722',
        color: 'white',
        fontSize: `${bp ? '24px' : '38px'}`,
        paddingBottom: `${bp ? '0' : ''}`,
        textAlign: `${bp ? 'center' : ''}`
    }
};

export const CardBodyStyle = (bp) => {
    return {
        border: 'none',
        width: `${bp ? '100%' : '40%'}`,
        paddingLeft: '1rem',
        background: '#131722',
    }
}