import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Facebook, Instagram, Twitter, Youtube } from 'react-bootstrap-icons'

function Footer() {
  return (
    <footer id="contact" className="bg-dark text-white py-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">MY STORE</h5>
            <p className="text-muted mb-4">Fashion - Style - You</p>
            <p className="text-muted">
              Your one-stop destination for the latest fashion trends and quality products.
            </p>
          </Col>
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">About Us</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#contact" className="text-decoration-none text-muted hover-white">Contact</a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="text-decoration-none text-muted hover-white">FAQ</a>
              </li>
              <li className="mb-2">
                <a href="#shipping" className="text-decoration-none text-muted hover-white">Shipping Info</a>
              </li>
              <li className="mb-2">
                <a href="#returns" className="text-decoration-none text-muted hover-white">Returns</a>
              </li>
            </ul>
          </Col>
          <Col md={4} className="mb-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#facebook" className="text-white fs-4">
                <Facebook />
              </a>
              <a href="#instagram" className="text-white fs-4">
                <Instagram />
              </a>
              <a href="#twitter" className="text-white fs-4">
                <Twitter />
              </a>
              <a href="#youtube" className="text-white fs-4">
                <Youtube />
              </a>
            </div>
            <p className="text-muted mt-4 mb-0">
              📧 contact@mystore.com<br />
              � +1 234 567 890
            </p>
          </Col>
        </Row>
        <hr className="my-4 border-secondary" />
        <Row>
          <Col className="text-center">
            <p className="text-muted mb-0">&copy; 2026 MY STORE. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
