import React from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'

function Hero() {
  return (
    <div className="bg-primary text-white py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4 fw-bold">Welcome to Mini Store</h1>
            <p className="lead my-4">
              Discover amazing products at unbeatable prices. Shop the latest trends and enjoy fast shipping on all orders.
            </p>
            <Button variant="light" size="lg" className="me-2">Shop Now</Button>
            <Button variant="outline-light" size="lg">Learn More</Button>
          </Col>
          <Col md={6}>
            <div className="text-center">
              <div className="bg-white text-dark p-5 rounded-3 d-inline-block">
                <h3>🛍️</h3>
                <p className="mb-0">Your One-Stop Shop</p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Hero
