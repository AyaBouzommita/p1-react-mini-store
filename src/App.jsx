import React from 'react'
import { Container, Navbar, Nav, Badge } from 'react-bootstrap'
import { Cart3 } from 'react-bootstrap-icons'
import Hero from './components/Hero'
import Products from './components/Products'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="shadow">
        <Container>
          <Navbar.Brand href="#home" className="fw-bold fs-4">MY STORE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#categories">Categories</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#cart" className="position-relative">
                <Cart3 size={24} />
                <Badge 
                  bg="danger" 
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: '0.7rem' }}
                >
                  0
                </Badge>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Hero />
      <Products />
      <Footer />
    </>
  )
}

export default App
