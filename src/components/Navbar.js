import React, { useState } from 'react';
import { Collapse, Container, Nav, Navbar, NavItem, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import logo from '../assets/img/logo.png';

const NavbarComp = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Container>
            <Navbar vertical light expand='lg'>
                <NavbarToggler onClick={toggle} />
                <NavbarBrand><img src={logo} alt='logo' height='120' /></NavbarBrand>
                <Collapse isOpen={isOpen} navbar vertical>
                    <Nav vertical>
                        <NavItem>
                            <NavLink href='/'>Hallo, Gadjian User</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>

            {/* <Collapse isOpen={isOpen} > */}
                {/* <Nav vertical expand="md">
                    <NavItem>
                        <NavLink href='/'>Beranda</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>Personnel List</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/'>Daily Attendance</NavLink>
                    </NavItem>
                </Nav> */}
            {/* </Collapse> */}
        </Container>
    )
}

export default NavbarComp;