import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import Resturant  from '../pages/resturant/Resturant';

function Header(){
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/">PLEY</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link> <Link to="/Resturant">Restaurants</Link></Nav.Link>
                    <Nav.Link  href="/resturant">Restaurants</Nav.Link>
                    <Nav.Link  href="#AboutUS">About Us</Nav.Link>
                    <Nav.Link  href="#ContactUS">Contact Us</Nav.Link>
                    </Nav>
                    <Nav>
                    <Nav.Link> <Link to="/Login">Login</Link></Nav.Link>
                    <Nav.Link> <Link to="/Signup">Signup</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Header;

