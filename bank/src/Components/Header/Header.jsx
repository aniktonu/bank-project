import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import './Header.css';




const Header = () => {
    return (
        <>
            <Navbar bg="light" variant="light fs-4">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img
                            src={require('./Logo.png')}
                            width="100"
                            className="d-inline-block align-top"
                            alt="logo"
                        />
                    </Navbar.Brand>
                    <Nav className="my-auto my-auto-inner">
                        <Nav.Link as={Link} to="/">Sign In</Nav.Link>
                        <Nav.Link as={Link} to="/sign-up">Sign Up</Nav.Link>
                        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default Header