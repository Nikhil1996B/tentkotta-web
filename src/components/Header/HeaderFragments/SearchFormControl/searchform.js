import React from 'react';
import { HeaderContext } from '../../header-context';
import { Form, Button, Row } from 'react-bootstrap';
import NavBarComponent from '../../../searchBar/NavBar';
import UserAuth from '../UserAuthentication/userauth';

export default function SearchForm() {
    const handleClick = (e) => {
        e.preventDefault();
    }
    return (
        <HeaderContext.Consumer>
            {
                ({ dispatch, isSignedIn, breakpoint }) => (
                    <Row inline onSubmit={(e) => handleClick(e)}>
                        <NavBarComponent />
                        <UserAuth breakpoint={breakpoint}/>
                    </Row>
                )
            }
        </HeaderContext.Consumer>
    )
}
