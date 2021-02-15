import React from 'react';

export const accordionStyle = (props) => {
    return {
        background: `${props && props.color ? props.color : "#363A43"}`,
        color: `#E6E6E6`
    }
}

export const cardBody = (props) => {
    return {
        background: `#131722 0% 0% no-repeat padding-box`,
        borderRadius: `0px 0px 5px 5px`,
        opacity: 1
    }
}

export const Items = (props) => {
    return {
        background: `#363A43 0% 0% no-repeat padding-box`,
        borderRadius: `5px`,
        opacity: `1`,
        padding: `${2}% ${4}%`,
        margin: `${2}%`,
        color: '#E6E6E6',
        textAlign: 'center'
    }
}


export const FilterAccordionGlobalStyle = () => {
    return (
        <>
           <style type="text/css">
                {`
                .btn-link {
                    color:  ${'#E6E6E6'};
                }

                .card-body {
                    background: ${`#131722 0% 0% no-repeat padding-box`};
                    border-radius: 0px 0px 5px 5px;
                    border: 1px solid #363A43;
                }
                .filter-header-wrapper>button {
                    width: ${`100%`};
                    text-align: left;
                    border: 1px solid #363A43;
                }

                .filter-header-wrapper .btn-link:hover {
                    color: #FC9E74;
                    text-decoration: none;
                }
                .btn-link:hover{
                    color: #FC9E74;
                    text-decoration: none;
                }

                .filter-wrapper .accordion .card:first-of-type{
                    border: none;
                    border-radius: ${`3%`};
                }
                .filterclass .card-header{
                    padding: 0;
                }
                .filterclass .card-body{
                    padding: 0;
                }
              `}
            </style>
        </>
    )
}