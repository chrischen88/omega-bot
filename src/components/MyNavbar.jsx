import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="light" fixed="top">
                <Navbar.Brand href="">Botmega</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="">Bot</Nav.Link>
                    <Nav.Link href="">Settings</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default MyNavbar;