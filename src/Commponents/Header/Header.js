import React from 'react';
import { Container, Nav, Navbar, } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Nav className="me-auto">
                        <NavLink className='link ms-5' to="home">Home</NavLink>
                        <NavLink className='link ms-5' to="about">About</NavLink>
                        <NavLink className='link ms-5' to="service">Service</NavLink>
                        <NavLink className='link ms-5' to="blog">Blog</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;