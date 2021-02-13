export const CardTitleStyle = () => {
    return {
        width: '100%',
        background: '#131722',
        color: 'white',
        fontSize: '38px',
    }
};

export const CardBodyStyle = (bp) => {
    return {
        border: 'none',
        width: `${bp ? '100%' : '40%'}`
    }
}