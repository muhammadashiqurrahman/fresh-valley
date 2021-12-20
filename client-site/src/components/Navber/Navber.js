import React from 'react';
import {Container, Nav, Navbar} from "react-bootstrap";
import './Navber.css'
import { Link } from "react-router-dom";

const Navber = () => {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand>
                    <Link to="/">FRESH VALLEY</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="ml-auto">
                            <Link to="/" className="nav-items">Home</Link>
                            <Link to="/orders" className="nav-items">Orders</Link>
                            <Link to="/dashboard" className="nav-items">Admin</Link>
                            <Link to="/details" className="nav-items">Details</Link>
                            <Link to="/login" className="nav-items">Login</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navber;