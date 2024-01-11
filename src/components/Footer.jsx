import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-success mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5 className='mt-4'>Company</h5>
            <ul className="list-unstyled">
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className='mt-4'>Products</h5>
            <ul className="list-unstyled">
              <li><a href="/electronics">Electronics</a></li>
              <li><a href="/clothing">Clothing</a></li>
              <li><a href="/appliances">Appliances</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5 className='mt-4'>Support</h5>
            <ul className="list-unstyled">
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/shipping">Shipping</a></li>
              <li><a href="/returns">Returns</a></li>
            </ul>
          </Col>
        </Row>
        <hr />
        <Row>
          <Col md={6}>
            <p>&copy; {new Date().getFullYear()} Insta Cart. All rights reserved.</p>
          </Col>
          <Col md={6}>
            <ul className="list-inline float-right">
              <li className="list-inline-item"><a href="/privacy">Privacy Policy</a></li>
              <li className="list-inline-item"><a href="/terms">Terms of Service</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
