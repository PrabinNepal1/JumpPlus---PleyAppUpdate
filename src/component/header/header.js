import React from 'react';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

function Header(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">PLEY</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link  href="#Restaurants">Restaurants</Nav.Link>
                    <Nav.Link  href="#AboutUS">About Us</Nav.Link>
                    <Nav.Link  href="#ContactUS">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link href="#login">Login/SignIn</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;

