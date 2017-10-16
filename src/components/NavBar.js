import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    NavItem,
    Nav
} from 'react-bootstrap'

import './NavBar.css';

const NavBar = () => (
    <Navbar>
        <Nav>
            <NavItem eventKey={1} href="#">
                <NavLink exact activeClassName='active' to='/'>
                    Home
                </NavLink>
            </NavItem>
            <NavItem eventKey={2} href="#">
                <NavLink activeClassName='active' to='/liked'>
                    Liked
                </NavLink>
            </NavItem>
        </Nav>
    </Navbar>
);

export default NavBar;