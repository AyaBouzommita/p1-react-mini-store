import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={6}>
            <h5>Mini Store</h5>
            <p className="text-muted">Your one-stop shop for quality products at great prices.</p>
          </Col>
          <Col md={3}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#home" className="text-decoration-none text-muted">Home</a></li>
              <li><a href="#products" className="text-decoration-none text-muted">Products</a></li>
              <li><a href="#features" className="text-decoration-none text-muted">Features</a></li>
              <li><a href="#contact" className="text-decoration-none text-muted">Contact</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <p className="text-muted mb-1">📧 contact@ministore.com</p>
            <p className="text-muted mb-1">📞 +1 234 567 890</p>
            <p className="text-muted">📍 123 Store Street, City</p>
          </Col>
        </Row>
        <hr className="my-4" />
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-0">&copy; 2024 Mini Store. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
