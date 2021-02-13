import React from 'react';
import { HeaderContext } from '../../header-context';
import { Form, Button } from 'react-bootstrap';
import NavBarComponent from '../../../searchBar/NavBar';
import UserAuth from '../UserAuthentication/userauth';

export default function SearchForm() {
    return (
        <HeaderContext.Consumer>
            {
                ({ dispatch, isSignedIn }) => (
                    <Form inline>
                        <NavBarComponent />
                        <UserAuth />
                    </Form>
                )
            }
        </HeaderContext.Consumer>
    )
}
