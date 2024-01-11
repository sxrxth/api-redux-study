import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="success" expand="lg" style={{ height: '70px',marginBottom:"20px" }}>
      <Navbar.Brand className='ms-3' as={Link} to="/">
        INSTA CART
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/wishlist">
            Wishlist
          </Nav.Link>
          <Nav.Link as={Link} to="/cart">
            Cart
          </Nav.Link>
          <Nav.Link >
            About
          </Nav.Link>
          <Nav.Link >
            Contact
          </Nav.Link>
          {/* Add more Nav.Link components for additional pages */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
