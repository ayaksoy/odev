// src/components/Navbar.js
import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const menuItems = ['Anasayfa', 'Hakkımızda', 'İletişim'];

const MyNavbar = () => {
    return (
        <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Logo</NavbarBrand>
            <Nav className="mr-auto" navbar>
                {menuItems.map((item, index) => (
                    <NavItem key={index}>
                        <NavLink href="#">{item}</NavLink>
                    </NavItem>
                ))}
            </Nav>
        </Navbar>
    );
};

export default MyNavbar;
